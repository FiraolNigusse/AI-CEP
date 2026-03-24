from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .serializers import EmailGenerateRequestSerializer
from .services import EmailGenerationService
from users.decorators import check_credits
from users.utils import deduct_user_credits
from django.db import transaction

class EmailGenerateView(generics.CreateAPIView):
    """
    Main API for generating cold emails.
    - Uses @check_credits decorator for immediate balance verify.
    - Uses atomic deduct_user_credits to prevent race conditions.
    """
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = EmailGenerateRequestSerializer

    @check_credits(1)
    def post(self, request, *args, **kwargs):
        # 1. Validate Input Data
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        user = request.user
        
        # 2. Call AI Service inside a transaction
        service = EmailGenerationService()
        try:
            with transaction.atomic():
                # Deduction: Deduct 1 credit safely with DB lock
                success, new_balance = deduct_user_credits(user.id, amount=1)
                
                if not success:
                    return Response(
                        {"error": "Credit balance check failed during processing."},
                        status=status.HTTP_402_PAYMENT_REQUIRED
                    )
                
                # Actual AI Generation
                result = service.generate_email_content(
                    user=user,
                    target_role=serializer.validated_data['target_role'],
                    company_name=serializer.validated_data['company_name'],
                    user_background=serializer.validated_data['user_background'],
                    job_description=serializer.validated_data.get('job_description', '')
                )
                
                return Response({
                    "message": "Email generated successfully.",
                    "remaining_credits": new_balance,
                    "data": result
                }, status=status.HTTP_201_CREATED)
                
        except Exception as e:
            # Atomic transaction handles rollback if exceptions occur
            return Response(
                {"error": f"Internal process failed: {str(e)}"}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
