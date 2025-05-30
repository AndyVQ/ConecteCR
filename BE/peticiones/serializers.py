from rest_framework.serializers import ModelSerializer
from .models import Peticiones

class PeticionesSerializer(ModelSerializer):
    class Meta:
        model = Peticiones
        fields = "__all__"