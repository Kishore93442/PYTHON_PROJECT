from rest_framework import serializers
from .models import Teacher

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:     #must class name meta
        model = Teacher
        fields = '__all__'
