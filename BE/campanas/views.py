from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from .serializers import CampanaSerializer
from .models import Campana
from rest_framework.permissions import IsAuthenticated, BasePermission, SAFE_METHODS

class PermisosPersonalizados(BasePermission):  
    def has_permission(self, request, view):
        usuario = request.user
        
        if not usuario.is_authenticated:
            return False
        grupos_usuario = usuario.groups.values_list("name", flat=True)  
        metodo_peticion = request.method
        
        if "moderador" in grupos_usuario:
            if metodo_peticion in ["POST", "PATCH", "DELETE"]:
                return True
            return False
        
        if "administrador" in grupos_usuario:
            if metodo_peticion in ["POST", "PUT", "PATCH", "DELETE"]:
                return True
            if metodo_peticion in SAFE_METHODS:
                return True
            return False
        
        return False

class CampanaCreateView(ListCreateAPIView):
    permission_classes = [PermisosPersonalizados]
    queryset = Campana.objects.all()
    serializer_class = CampanaSerializer
    
class CampanaRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [PermisosPersonalizados]
    queryset = Campana.objects.all()
    serializer_class = CampanaSerializer
    
    lookup_field = 'id'
    
class CampanaListApiView(ListAPIView):
    permission_classes = [PermisosPersonalizados]
    queryset = Campana.objects.all()
    serializer_class = CampanaSerializer
    
