from django.shortcuts import render, redirect
from .utils import get_all_todos, add_todo, delete_todo

def todo_list(request):
    if request.method == 'POST':
        add_todo(request.POST['title'])
        return redirect('todo_list')
    return render(request, 'TodoApp/todo.html', {'todos': get_all_todos()})

def todo_delete(request, id):
    if request.method == 'POST':
        delete_todo(id)
    return redirect('todo_list')
