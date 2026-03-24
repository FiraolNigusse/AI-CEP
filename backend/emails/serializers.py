from rest_framework import serializers

class EmailGenerateRequestSerializer(serializers.Serializer):
    target_role = serializers.CharField(max_length=255, required=True)
    company_name = serializers.CharField(max_length=255, required=True)
    user_background = serializers.CharField(max_length=1000, required=True)
    job_description = serializers.CharField(max_length=2000, required=False, allow_blank=True)
