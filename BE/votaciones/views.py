from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from .serializers import VotacionesSerializer
from .models import Votaciones

class VotacionesCreateView(ListCreateAPIView):
    queryset = Votaciones.objects.all()
    serializer_class = VotacionesSerializer 
    
class VotacionesRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Votaciones.objects.all()
    serializer_class = VotacionesSerializer
    
    lookup_field = 'id'
    
class VotacionesListApiView(ListAPIView):
    queryset = Votaciones.objects.all()
    serializer_class = VotacionesSerializer


