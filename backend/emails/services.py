import json
from openai import OpenAI
from django.conf import settings
from .models import EmailGeneration

class EmailGenerationService:
    def __init__(self):
        self.client = OpenAI(api_key=settings.OPENAI_API_KEY)

    def generate_email_content(self, user, target_role, company_name, user_background, job_description=""):
        """
        Generates a subject line, main email, and 2 follow-ups using OpenAI.
        """
        prompt = f"""
        You are an expert at writing high-converting cold emails.
        Write a professional and personalized cold email sequence for the following scenario:
        
        - Target Role: {target_role}
        - Company Name: {company_name}
        - My Background: {user_background}
        - Job Description (Context): {job_description}
        
        Requirements:
        1. Create a catchy, relevant subject line.
        2. Create a concise, low-friction main email (under 150 words). Focus on solving a problem.
        3. Create Follow-up 1 (sent 3 days later): Short, referencing the first email.
        4. Create Follow-up 2 (sent 7 days later): Final 'break-up' email or value add.
        
        Output MUST be in valid JSON format with the following keys:
        {{
            "subject_line": "...",
            "main_email": "...",
            "follow_up_1": "...",
            "follow_up_2": "..."
        }}
        """

        try:
            response = self.client.chat.completions.create(
                model="gpt-4o-mini", # Cost effective for this task
                messages=[
                    {{"role": "system", "content": "You are a cold email copywriter. Always return JSON."}},
                    {{"role": "user", "content": prompt}}
                ],
                response_format={{ "type": "json_object" }}
            )
            
            content_json = json.loads(response.choices[0].message.content)
            
            # Save to database
            generation = EmailGeneration.objects.create(
                user=user,
                input_data={{
                    "target_role": target_role,
                    "company_name": company_name,
                    "user_background": user_background,
                    "job_description": job_description
                }},
                generated_email=json.dumps(content_json)
            )
            
            return content_json
            
        except Exception as e:
            # In production, log this with Sentry or similar
            raise Exception(f"AI Generation failed: {str(e)}")
