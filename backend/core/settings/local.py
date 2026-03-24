from .base import *

# Default database for local development
DATABASES = {
    'default': env.db('DATABASE_URL', default='sqlite:///db.sqlite3')
}

# Add any local-only settings or overrides here
# For example, django-debug-toolbar
