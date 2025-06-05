from rest_framework.serializers import ModelSerializer
from .models import Noticia

class NoticiaSerializer(ModelSerializer):
    class Meta:
        model = Noticia
        fields = "__all__"