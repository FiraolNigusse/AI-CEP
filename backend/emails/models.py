from django.db import models
from django.conf import settings

class EmailGeneration(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE, 
        related_name='email_generations'
    )
    input_data = models.JSONField(help_text="Original prompts or structured data for AI")
    generated_email = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Gen by {self.user.email} on {self.created_at.strftime('%Y-%m-%d %H:%M')}"

    class Meta:
        ordering = ['-created_at']


# Keeping our previous models as they might be useful
class EmailTemplate(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='email_templates')
    name = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)
    body_content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} - {self.user.email}"
