from django.urls import path
from .views import PeticionesCreateView, PeticionesRetrieveUpdateDestroyAPIView

urlpatterns = [
    path("peticiones_create/",PeticionesCreateView.as_view()),
    path("peticiones_rud/<int:id>",PeticionesRetrieveUpdateDestroyAPIView.as_view())    
]   

