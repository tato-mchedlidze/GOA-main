from django.shortcuts import render

cars_database = [
    {'id': 0, 'brand': 'bmw', 'model': 'm3 competition', 'color': 'black', 'year': 2024, 'title': 'bmw-m3-competition'},
    {'id': 1, 'brand': 'audi', 'model': 'rs6 avant', 'color': 'grey', 'year': 2023, 'title': 'audi-rs6-avant'},
    {'id': 2, 'brand': 'mercedes', 'model': 'c63 amg', 'color': 'white', 'year': 2022, 'title': 'mercedes-c63-amg'},
    {'id': 3, 'brand': 'toyota', 'model': 'supra', 'color': 'red', 'year': 2021, 'title': 'toyota-supra'},
    {'id': 4, 'brand': 'ford', 'model': 'mustang gt', 'color': 'blue', 'year': 2020, 'title': 'ford-mustang-gt'},
]

def car_list(request):
    return render(request, 'cars/list.html', {'cars_database': cars_database})

def car_detail(request, car_title):
    car = None
    for item in cars_database:
        if item['title'] == car_title:
            car = item
    return render(request, 'cars/detail.html', {'car': car})
