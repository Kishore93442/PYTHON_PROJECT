from django.db import models

# Create your models here.
class Teacher(models.Model):
    name=models.CharField(max_length=100)
    age=models.IntegerField()
    address=models.CharField(max_length=200)
    id=models.IntegerField(primary_key=True)
    email=models.EmailField(unique=True)
    roll=models.CharField(max_length=50)