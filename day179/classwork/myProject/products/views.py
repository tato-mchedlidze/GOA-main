from django.shortcuts import render
from django.http import HttpResponse

product_database = [
    {"id": 0, "title": "ზანგის ღიმილი", "price": 5.99},
    {"id": 1, "title": "ქართული თაფლი", "price": 12.50},
    {"id": 2, "title": "მინერალური წყალი ბორჯომი", "price": 1.80},
    {"id": 3, "title": "სულგუნი", "price": 18.90},
    {"id": 4, "title": "შოთის პური", "price": 1.20},
    {"id": 5, "title": "ნაბეღლავი", "price": 1.50},
    {"id": 6, "title": "გოზინაყი", "price": 7.40},
    {"id": 7, "title": "ჩურჩხელა ნიგვზის", "price": 3.50},
    {"id": 8, "title": "მწვანე ჩაი გურიელი", "price": 4.20},
    {"id": 9, "title": "ქინძმარაული (0.75ლ)", "price": 22.00},
    {"id": 10, "title": "მაწონი", "price": 2.10},
    {"id": 11, "title": "იმერული ყველი", "price": 14.50},
    {"id": 12, "title": "ტყემალი კლასიკური", "price": 3.80},
    {"id": 13, "title": "აჯიკა ცხარე", "price": 2.50},
    {"id": 14, "title": "ყავა ნალექიანი", "price": 6.30},
    {"id": 15, "title": "კარაქი", "price": 8.70},
    {"id": 16, "title": "მზესუმზირის ზეთი", "price": 5.50},
    {"id": 17, "title": "შოკოლადი ბარამბო", "price": 3.99},
    {"id": 18, "title": "ლიმონათი ნატახტარი", "price": 2.20},
    {"id": 19, "title": "ხაჭო", "price": 3.40},
    {"id": 20, "title": "ლობიო (1კგ)", "price": 4.80},
    {"id": 21, "title": "წიწიბურა", "price": 3.10},
    {"id": 22, "title": "ბრინჯი გრძელი", "price": 3.90},
    {"id": 23, "title": "სარეცხი ფხვნილი", "price": 11.20},
    {"id": 24, "title": "ხელსახოცი", "price": 1.50}
]

def all_products(request):
    return HttpResponse(str(product_database))

def single_product(request, id):
    return HttpResponse(str(product_database[id]))