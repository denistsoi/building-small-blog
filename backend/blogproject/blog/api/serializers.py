from rest_framework import serializers

from blog.models import (Blog, Category)


class BlogSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='blogdetail_api', lookup_field='slug')
    class Meta:
        model = Blog
        fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):
    blog_set = BlogSerializer(many=True)
    class Meta:
        model = Category
        fields = "__all__"


