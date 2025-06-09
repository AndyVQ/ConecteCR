from rest_framework.serializers import ModelSerializer
from .models import Peticiones
from rest_framework import serializers


class PeticionesSerializer(ModelSerializer):
    nombre_comunidad = serializers.CharField(source="comunidad.nombre_comunidad", read_only=True)
    usuario = serializers.CharField(source="usuario.usuario", read_only=True)
    class Meta:
        model = Peticiones
        fields = ["id", "usuario", "comunidad", "nombre_peticion", "descripcion_peticion", "fecha_peticion", "imagen_peticion", "comentario_peticion", "nombre_comunidad"]