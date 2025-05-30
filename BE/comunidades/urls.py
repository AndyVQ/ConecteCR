from django.urls import path
from .views import ComunidadesCreateView, ComunidadesRetrieveUpdateDestroyAPIView

urlpatterns = [
    path("comunidades_create/",ComunidadesCreateView.as_view()),
    path("comunidades_rud/<int:id>",ComunidadesRetrieveUpdateDestroyAPIView.as_view())    
]   
