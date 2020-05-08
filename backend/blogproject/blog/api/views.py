from rest_framework.views import APIView
from rest_framework import generics
from blog.models import (Blog, Category)
from blog.api.serializers import (BlogSerializer, CategorySerializer)

class BlogListAPIView(generics.ListAPIView):
    model = Blog
    queryset = Blog.objects.filter(status=1)
    serializer_class = BlogSerializer

class BlogDetailAPIView(generics.RetrieveAPIView):
    model = Blog
    queryset = Blog.objects.filter(status=1)
    serializer_class = BlogSerializer
    lookup_field = 'slug'

class CategoryListAPIView(generics.ListAPIView):
    model = Category
    queryset = Category.objects.filter(status=1)
    serializer_class = CategorySerializer