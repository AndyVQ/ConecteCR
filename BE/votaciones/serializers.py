from rest_framework.serializers import ModelSerializer
from .models import Votaciones

class VotacionesSerializer(ModelSerializer):
    class Meta:
        model = Votaciones
        fields = "__all__"