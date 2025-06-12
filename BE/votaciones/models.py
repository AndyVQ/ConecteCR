from django.db import models

# Create your models here.
class Votaciones(models.Model):
    usuario =  models.ForeignKey("usuarios.Perfil",on_delete=models.CASCADE)
    comunidad = models.ForeignKey("comunidades.Comunidades",on_delete=models.CASCADE)
    nombre_votacion = models.CharField(max_length=100,null=False,blank=False)
    descripcion_votacion = models.CharField(max_length=100,null=False,blank=False)
    fecha_votacion = models.DateField(null=False,blank=False)
    imagen_votacion = models.TextField()