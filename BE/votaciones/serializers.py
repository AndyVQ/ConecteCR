from rest_framework.serializers import ModelSerializer
from .models import Votaciones
from rest_framework import serializers

class VotacionesSerializer(ModelSerializer):
    nombre_comunidad = serializers.CharField(source="comunidad.nombre_comunidad", read_only=True)
    usuario = serializers.CharField(source="usuario.usuario", read_only=True)
    class Meta:
        model = Votaciones
        fields = ["id", "usuario", "comunidad", "nombre_votacion", "descripcion_votacion", "fecha_votacion", "imagen_votacion", "comentario_votacion", "nombre_comunidad"]