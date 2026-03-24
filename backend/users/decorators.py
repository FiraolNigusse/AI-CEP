from functools import wraps
from rest_framework.response import Response
from rest_framework import status

def check_credits(required_amount=1):
    """
    Decorator for DRF views to ensure authenticated user has enough credits.
    """
    def decorator(view_func):
        @wraps(view_func)
        def _wrapped_view(self, request, *args, **kwargs):
            if request.user.is_authenticated:
                if request.user.credits < required_amount:
                    return Response(
                        {"error": f"Insufficient credits. You need at least {required_amount} to perform this action."},
                        status=status.HTTP_402_PAYMENT_REQUIRED
                    )
            return view_func(self, request, *args, **kwargs)
        return _wrapped_view
    return decorator
