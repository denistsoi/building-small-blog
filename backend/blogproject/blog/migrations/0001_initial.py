# Generated by Django 3.0 on 2020-05-08 15:19

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=80)),
                ('slug', models.SlugField(max_length=80)),
                ('image', models.ImageField(upload_to='category/')),
                ('description', models.TextField(blank=True, max_length=200, null=True)),
                ('created_on', models.DateTimeField(default=django.utils.timezone.now)),
                ('status', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=80)),
                ('slug', models.SlugField(max_length=80)),
                ('image', models.ImageField(upload_to='blog/')),
                ('description', models.TextField(blank=True, max_length=200, null=True)),
                ('created_on', models.DateTimeField(default=django.utils.timezone.now)),
                ('status', models.BooleanField(default=True)),
                ('category', models.ManyToManyField(to='blog.Category')),
            ],
        ),
    ]
