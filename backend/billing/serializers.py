from rest_framework import serializers

class BuyCreditsSerializer(serializers.Serializer):
    PACKAGE_CHOICES = (
        ('standard', '50 Credits - $5'),
        ('premium', '150 Credits - $10'),
    )
    
    package_id = serializers.ChoiceField(choices=PACKAGE_CHOICES, required=True)
