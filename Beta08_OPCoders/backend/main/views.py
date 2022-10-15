from django.http.response import JsonResponse
from .ml import getData


def home(request, name):
    json_data = getData(name)
    print(json_data)
    return JsonResponse(json_data, safe=False)

def getProduction(request, crop, rainfall, state, dist):
    json_data = getData(crop)
    Data = []

    for data in json_data:
        if data[0] == state:
            if data[1] == dist:
                if (data[6] >= (rainfall-3)) or (data[6] <= (rainfall + 3)):
                    Data.append(data)


    return JsonResponse(
        Data, safe=False
    )
