from .base import *
import dj_database_url

DEBUG = False

# Make sure to set a secure secret key in the production environment
SECRET_KEY = env('SECRET_KEY')

ALLOWED_HOSTS = env.list('ALLOWED_HOSTS')

# Database configuration for production (e.g., PostgreSQL credentials)
DATABASES = {
    'default': env.db('DATABASE_URL')
}

# Use Redis or another fast cache backend in production
# CACHES = {
#     "default": {
#         "BACKEND": "django.core.cache.backends.redis.RedisCache",
#         "LOCATION": env("REDIS_URL"),
#     }
# }

# Static and media files in a robust storage (like S3/CloudFront) if needed
# AWS_ACCESS_KEY_ID = env('AWS_ACCESS_KEY_ID')
# AWS_SECRET_ACCESS_KEY = env('AWS_SECRET_ACCESS_KEY')
# AWS_STORAGE_BUCKET_NAME = env('AWS_STORAGE_BUCKET_NAME')

# Ensure API requests are HTTPS
SECURE_SSL_REDIRECT = env.bool('SECURE_SSL_REDIRECT', default=True)
SESSION_COOKIE_SECURE = env.bool('SESSION_COOKIE_SECURE', default=True)
CSRF_COOKIE_SECURE = env.bool('CSRF_COOKIE_SECURE', default=True)

# Additional security settings
SECURE_HSTS_SECONDS = 31536000 # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

CORS_ALLOWED_ORIGINS = env.list('CORS_ALLOWED_ORIGINS')
