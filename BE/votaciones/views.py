from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from .serializers import VotacionesSerializer
from .models import Votaciones
from rest_framework.permissions import IsAuthenticated,BasePermission,SAFE_METHODS

"""
administrador
moderador
usuario
"""

class PermisosPersonalizados(BasePermission):
    def has_permission(self, request, view):
        usuario = request.user
        
        if not usuario.is_authenticated:
            return False
        
        grupos_usuario = usuario.groups.values_list("name", flat=True)  # Traemos todos los grupos de manera seguida: usuario, moderador, administrador
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

class VotacionesCreateView(ListCreateAPIView):
    permission_classes = [PermisosPersonalizados]
    queryset = Votaciones.objects.all()
    serializer_class = VotacionesSerializer 
    
class VotacionesRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    permission_classes = [PermisosPersonalizados]
    queryset = Votaciones.objects.all()
    serializer_class = VotacionesSerializer
    
    lookup_field = 'id'
    
class VotacionesListApiView(ListAPIView):
    permission_classes = [PermisosPersonalizados]
    queryset = Votaciones.objects.all()
    serializer_class = VotacionesSerializer


