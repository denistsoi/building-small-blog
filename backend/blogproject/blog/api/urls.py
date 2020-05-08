from django.urls import path
from blog.api.views import (BlogListAPIView, BlogDetailAPIView, CategoryListAPIView)

urlpatterns = [
        
        path('api/blog_list', BlogListAPIView.as_view(), name='bloglist_api'),
        path('api/blog_detail/<slug:slug>', BlogDetailAPIView.as_view(), name='blogdetail_api'),
        path('api/category', CategoryListAPIView.as_view(), name='categorylist_api'),
 
            
    ]
