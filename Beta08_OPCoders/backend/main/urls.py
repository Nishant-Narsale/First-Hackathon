
from django.urls import path
from. import views
urlpatterns = [
    path('getData/<str:name>/',views.home,name="getData"),
    path('getProduction/<str:crop>/<str:state>/<str:dist>/<int:rainfall>/',views.getProduction, name="getProduction")
]