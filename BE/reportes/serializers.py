from rest_framework.serializers import ModelSerializer
from .models import Reportes
from rest_framework import serializers



class ReportesSerializer(ModelSerializer):
    nombre_comunidad = serializers.CharField(source="comunidad.nombre_comunidad", read_only=True)
    usuario = serializers.CharField(source="usuario.usuario", read_only=True)
    class Meta:
        model = Reportes
        fields = [
        "id",
        "usuario",
        "comunidad",
        "nombre_reporte",
        "descripcion_reporte",
        "fecha_reporte",
        "direccion_reportes",
        "imagen_reporte",
        "gravedad_reporte",
        "comentario_reporte",
        "nombre_comunidad"
        ]