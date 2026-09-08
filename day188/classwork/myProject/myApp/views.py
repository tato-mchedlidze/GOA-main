from django.shortcuts import redirect, render
from .models import Todo

# Create your views here.
def all_todos(request):
    if request.method == 'POST':
        title = request.POST.get('title')

        new_todo = Todo(title=title)
        new_todo.save()

        return redirect('all_todos')

    context = {
        'all_todos' : Todo.objects.all()
    }
    return render(request, 'myApp_index.html', context)

def delete_todo(request, id):
    todo_delete = Todo.objects.get(id=id)
    todo_delete.delete()
    return redirect('all_todos')

