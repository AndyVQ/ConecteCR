from django.db import models

# Create your models here.

class Peticiones(models.Model):
    usuario = models.ForeignKey("usuarios.Perfil",on_delete=models.CASCADE, related_name= "usuario_peticiones")
    comunidad = models.ForeignKey("comunidades.Comunidades",on_delete=models.CASCADE)
    nombre_peticion = models.CharField(max_length=100,null=False,blank=False)
    descripcion_peticion = models.CharField(max_length=100,null=False,blank=False)
    fecha_peticion = models.DateField(null=False,blank=False)
    imagen_peticion = models.TextField()
    comentario_peticion = models.CharField(max_length=100)

