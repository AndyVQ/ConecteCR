from rest_framework.serializers import ModelSerializer
from .models import Campana
from rest_framework import serializers

class CampanaSerializer(ModelSerializer):
    nombre_comunidad = serializers.CharField(source="comunidad.nombre_comunidad", read_only=True)
    class Meta:
        model = Campana
        fields = ["id", "usuario", "comunidad", "nombre_campana", "descripcion_campana", "direccion_campana", "fecha_campana", "imagen_campana", "comentario_campana", "nombre_comunidad"]