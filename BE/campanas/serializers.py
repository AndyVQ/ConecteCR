from rest_framework.serializers import ModelSerializer
from .models import Campana

class CampanaSerializer(ModelSerializer):
    class Meta:
        model = Campana
        fields = "__all__"