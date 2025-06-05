from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from .serializers import CampanaSerializer
from .models import Campana

class CampanaCreateView(ListCreateAPIView):
    queryset = Campana.objects.all()
    serializer_class = CampanaSerializer
    
class CampanaRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Campana.objects.all()
    serializer_class = CampanaSerializer
    
    lookup_field = 'id'
    
class CampanaListApiView(ListAPIView):
    queryset = Campana.objects.all()
    serializer_class = CampanaSerializer
    
