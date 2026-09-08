from django.shortcuts import render
from django.http import HttpResponse

books_database = [
    {"id": 0, "title": "Harry Potter and the Philosopher's Stone", "author": "J. K. Rowling", "pages": 320},
    {"id": 1, "title": "1984", "author": "George Orwell", "pages": 328},
    {"id": 2, "title": "To Kill a Mockingbird", "author": "Harper Lee", "pages": 281},
    {"id": 3, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "pages": 180},
    {"id": 4, "title": "The Hobbit", "author": "J. R. R. Tolkien", "pages": 310},
    {"id": 5, "title": "The Catcher in the Rye", "author": "J. D. Salinger", "pages": 234},
    {"id": 6, "title": "Pride and Prejudice", "author": "Jane Austen", "pages": 432},
    {"id": 7, "title": "The Alchemist", "author": "Paulo Coelho", "pages": 208},
    {"id": 8, "title": "Crime and Punishment", "author": "Fyodor Dostoevsky", "pages": 671},
    {"id": 9, "title": "One Hundred Years of Solitude", "author": "Gabriel García Márquez", "pages": 417},
    {"id": 10, "title": "The Little Prince", "author": "Antoine de Saint-Exupéry", "pages": 96},
    {"id": 11, "title": "Brave New World", "author": "Aldous Huxley", "pages": 268},
    {"id": 12, "title": "Fahrenheit 451", "author": "Ray Bradbury", "pages": 158},
    {"id": 13, "title": "The Lord of the Rings: The Fellowship of the Ring", "author": "J. R. R. Tolkien", "pages": 423},
    {"id": 14, "title": "The Picture of Dorian Gray", "author": "Oscar Wilde", "pages": 250}
]

def all_books(request):
    result=''
    for i in books_database:
        result += f'<p><a href="/students?{i["id"]}/> {i["title"]}</a></p>'
    return HttpResponse(result)

def single_book(request, id):
    i = books_database[id]
    return HttpResponse(f'<p>ID: {i["id"]}, Title: {i["title"]}, Author: {i["author"]}, Pages: {i["pages"]}</p>')

def book_title(request, id):
    i = books_database[id]
    return HttpResponse(f'<p>{i["title"]}</p>')
