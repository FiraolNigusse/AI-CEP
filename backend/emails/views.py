from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .serializers import EmailGenerateRequestSerializer
from .services import EmailGenerationService

class EmailGenerateView(generics.CreateAPIView):
    """
    Main API for generating cold emails.
    - Path: POST /api/emails/generate/
    - Logic: Check credits, Deduct 1, Generate AI content, Store result, Return JSON.
    """
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = EmailGenerateRequestSerializer

    def post(self, request, *args, **kwargs):
        user = request.user
        
        # 1. Credit Check
        if user.credits < 1:
            return Response(
                {"error": "Insufficient credits. Please top up."},
                status=status.HTTP_402_PAYMENT_REQUIRED
            )
        
        # 2. Validate Data
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # 3. AI Generation via Service
        service = EmailGenerationService()
        try:
            # 4. Deduct credit safely
            user.credits -= 1
            user.save()
            
            result = service.generate_email_content(
                user=user,
                target_role=serializer.validated_data['target_role'],
                company_name=serializer.validated_data['company_name'],
                user_background=serializer.validated_data['user_background'],
                job_description=serializer.validated_data.get('job_description', '')
            )
            
            return Response({
                "message": "Email generated successfully.",
                "remaining_credits": user.credits,
                "data": result
            }, status=status.HTTP_201_CREATED)
            
        except Exception as e:
            # Rollback credit if generation failed (though in some scenarios we might still keep the credit)
            user.credits += 1
            user.save()
            return Response(
                {"error": str(e)}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
