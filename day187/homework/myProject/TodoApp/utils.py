from .models import Todo

def get_all_todos():
    return Todo.objects.all()

def add_todo(title):
    Todo.objects.create(title=title)

def delete_todo(id):
    Todo.objects.filter(id=id).delete()
