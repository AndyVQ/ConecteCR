from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView    
from .serializers import ReportesSerializer
from .models import Reportes

class ReportesCreateView(ListCreateAPIView):
    queryset = Reportes.objects.all()
    serializer_class = ReportesSerializer
    
    lookup_field = 'id'
    
class ReportesRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Reportes.objects.all()
    serializer_class = ReportesSerializer
    
    lookup_field = 'id'
    
class ReportesListApiView(ListAPIView):
    queryset = Reportes.objects.all()
    serializer_class = ReportesSerializer
