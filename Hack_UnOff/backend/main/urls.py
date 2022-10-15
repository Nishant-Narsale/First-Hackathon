
from django.urls import path
from. import views
urlpatterns = [
    path('getData/<str:name>/',views.home,name="getData")
]