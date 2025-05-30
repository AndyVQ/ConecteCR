from django.urls import path
from .views import CampanaCreateView, CampanaRetrieveUpdateDestroyAPIView

urlpatterns = [
    path("campanas/",CampanaCreateView.as_view()),
    path("campanas_rud/<int:id>",CampanaRetrieveUpdateDestroyAPIView.as_view())   
]   
