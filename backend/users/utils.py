from django.db.models import F
from django.db import transaction

def deduct_user_credits(user_id, amount=1):
    """
    Safely deducts credits from a user using F() expressions to prevent race conditions.
    Must be called within a transaction if combined with other DB operations.
    """
    from django.contrib.auth import get_user_model
    User = get_user_model()
    
    with transaction.atomic():
        # Re-fetch user to ensure we are working with latest data in transaction
        user = User.objects.select_for_update().get(id=user_id)
        
        if user.credits >= amount:
            user.credits = F('credits') - amount
            user.save(update_fields=['credits'])
            user.refresh_from_db() # Get the actual new value
            return True, user.credits
        
        return False, user.credits
