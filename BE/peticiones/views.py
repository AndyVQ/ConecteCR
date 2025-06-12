from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from .serializers import PeticionesSerializer
from .models import Peticiones

class PeticionesCreateView(ListCreateAPIView):
    queryset = Peticiones.objects.all()
    serializer_class = PeticionesSerializer
    
    lookup_field = 'id'
    
class PeticionesRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Peticiones.objects.all()
    serializer_class = PeticionesSerializer
    lookup_field = 'id'
    
class PeticionesListApiView(ListAPIView):
    queryset = Peticiones.objects.all()
    serializer_class = PeticionesSerializer
    