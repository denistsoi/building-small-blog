from django.contrib import admin
from blog.models import Blog, Category
# Register your models here.

register_app = [Blog, Category]

admin.site.register(register_app)

