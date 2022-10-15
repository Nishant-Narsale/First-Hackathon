from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .ml import getData

# Create your views here.
@api_view(["GET"])
def home(request, name):
    json_data = getData(name)
    print(json_data)
    return Response(request,json_data['Production'])