from django.shortcuts import render

products_database = [
    {'id': 0, 'title': 'ზანგის ღიმილი', 'price': 5.99},
    {'id': 1, 'title': 'ნაპოლეონი', 'price': 6.50},
    {'id': 2, 'title': 'მედოვიკი', 'price': 7.20},
    {'id': 3, 'title': 'ეკლერი', 'price': 3.80},
    {'id': 4, 'title': 'ჩიზქეიქი', 'price': 8.00},
]

def product_list(request):
    return render(request, 'products/list.html', {'products_database': products_database})

def product_detail(request, product_id):
    product = None
    for item in products_database:
        if item['id'] == product_id:
            product = item
    return render(request, 'products/detail.html', {'product': product})
