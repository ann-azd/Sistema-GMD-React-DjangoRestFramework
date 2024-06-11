from django.urls import path
from . import views



urlpatterns = [
    # path('get/', views.getMateriales),
    # path('get/<int:pk>/',views.getSoloMaterial),
    path('post/',views.postEstudiante), 
    path('get/<int:pk>/materiales/',views.get_materiales_estudiante),
    
    # path('put/<int:pk>/',views.putMaterial), #le esta diciendo que lo trate como una vista
    # path('delete/<int:pk>/',views.deleteMaterial), 
 
]

