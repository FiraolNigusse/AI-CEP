from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .serializers import BuyCreditsSerializer
from .models import Payment
from django.db import transaction
from django.db.models import F

class BuyCreditsView(generics.CreateAPIView):
    """
    Simulated payment endpoint for buying credits.
    In production, this would be replaced with a real Stripe webhook or success redirect.
    """
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = BuyCreditsSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        package_id = serializer.validated_data['package_id']
        
        # Package mappings
        PACKAGES = {
            'standard': {'price': 5.00, 'credits': 50},
            'premium': {'price': 10.00, 'credits': 150},
        }
        
        package = PACKAGES[package_id]
        user = request.user
        
        try:
            with transaction.atomic():
                # 1. Store Payment record (simulated success)
                payment = Payment.objects.create(
                    user=user,
                    amount=package['price'],
                    credits_added=package['credits'],
                    status='completed'
                )
                
                # 2. Add credits to user safely using F() expression
                user.credits = F('credits') + package['credits']
                user.save(update_fields=['credits'])
                
                # Refresh to get actual integer for the response
                user.refresh_from_db()
                
                return Response({
                    "message": f"Successfully purchased {package['credits']} credits.",
                    "new_balance": user.credits,
                    "payment_id": payment.id
                }, status=status.HTTP_201_CREATED)
                
        except Exception as e:
            return Response(
                {"error": "Failed to process payment simulation."}, 
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
