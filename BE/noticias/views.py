from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from .serializers import NoticiaSerializer
from .models import Noticia

class NoticiaCreateView(ListCreateAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    
    lookup_field = 'id'
    
class NoticiaRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    
    lookup_field = 'id'

class NoticiaListApiView(ListAPIView):
    queryset = Noticia.objects.all()
    serializer_class = NoticiaSerializer
    