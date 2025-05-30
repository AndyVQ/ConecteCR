from django.urls import path
from .views import VotacionesCreateView, VotacionesRetrieveUpdateDestroyAPIView

urlpatterns = [
    path("votaciones/",VotacionesCreateView.as_view()),
    path("votaciones_rud/<int:id>",VotacionesRetrieveUpdateDestroyAPIView.as_view())   
]   
