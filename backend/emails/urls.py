from django.urls import path
from .views import EmailGenerateView

urlpatterns = [
    path('generate/', EmailGenerateView.as_view(), name='email_generate'),
]
