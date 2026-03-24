from django.urls import path
from .views import BuyCreditsView

urlpatterns = [
    path('buy-credits/', BuyCreditsView.as_view(), name='buy_credits'),
]
