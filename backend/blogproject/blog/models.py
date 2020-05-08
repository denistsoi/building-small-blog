from django.db import models
import datetime
from django.utils import timezone

# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=80)
    slug = models.SlugField(max_length=80)
    image = models.ImageField(upload_to='category/')
    description = models.TextField(max_length=200,
            null=True, blank=True)
    created_on = models.DateTimeField(default=timezone.now)
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class Blog(models.Model):
    title = models.CharField(max_length=80)
    slug = models.SlugField(max_length=80)
    category = models.ManyToManyField('Category')
    image = models.ImageField(upload_to='blog/')
    description = models.TextField(max_length=200, null=True, blank=True)
    created_on = models.DateTimeField(default=timezone.now)
    status = models.BooleanField(default=True)

    
    def __str__(self):
        return self.title
