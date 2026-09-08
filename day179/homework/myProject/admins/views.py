from django.shortcuts import render

admins_database = [
    {'id': 0, 'admin_name': 'aleksandre', 'role': 'main_staff'},
    {'id': 1, 'admin_name': 'nino', 'role': 'support_staff'},
    {'id': 2, 'admin_name': 'giorgi', 'role': 'moderator'},
    {'id': 3, 'admin_name': 'mariam', 'role': 'content_manager'},
    {'id': 4, 'admin_name': 'luka', 'role': 'main_staff'},
]

def admin_list(request):
    return render(request, 'admins/list.html', {'admins_database': admins_database})

def admin_detail(request, admins_id):
    admin = None
    for item in admins_database:
        if item['id'] == admins_id:
            admin = item
    return render(request, 'admins/detail.html', {'admin': admin})
