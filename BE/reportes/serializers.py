from rest_framework.serializers import ModelSerializer
from .models import Reportes

class ReportesSerializer(ModelSerializer):
    class Meta:
        model = Reportes
        fields = "__all__"