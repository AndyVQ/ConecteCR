from django.urls import path
from .views import NoticiaCreateView, NoticiaRetrieveUpdateDestroyAPIView

urlpatterns = [
    path("noticia_create/",NoticiaCreateView.as_view()),
    path("noticia_rud/<int:id>",NoticiaRetrieveUpdateDestroyAPIView.as_view())    
]   
