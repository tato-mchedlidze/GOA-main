from django.shortcuts import render
from django.http import HttpResponse

movies_database = [
    {"id": 0, "title": "Interstellar", "year": 2014, "rating": 8.7},
    {"id": 1, "title": "Inception", "year": 2010, "rating": 8.8},
    {"id": 2, "title": "The Dark Knight", "year": 2008, "rating": 9.0},
    {"id": 3, "title": "Pulp Fiction", "year": 1994, "rating": 8.9},
    {"id": 4, "title": "The Shawshank Redemption", "year": 1994, "rating": 9.3},
    {"id": 5, "title": "The Matrix", "year": 1999, "rating": 8.7},
    {"id": 6, "title": "Fight Club", "year": 1999, "rating": 8.8},
    {"id": 7, "title": "Forrest Gump", "year": 1994, "rating": 8.8},
    {"id": 8, "title": "Spirited Away", "year": 2001, "rating": 8.6},
    {"id": 9, "title": "The Lord of the Rings: The Fellowship of the Ring", "year": 2001, "rating": 8.9},
    {"id": 10, "title": "Gladiator", "year": 2000, "rating": 8.5},
    {"id": 11, "title": "The Godfather", "year": 1972, "rating": 9.2},
    {"id": 12, "title": "Parasite", "year": 2019, "rating": 8.5},
    {"id": 13, "title": "Whiplash", "year": 2014, "rating": 8.5},
    {"id": 14, "title": "Dune: Part Two", "year": 2024, "rating": 8.6}
]

def all_movies(request):
    result=''
    for i in movies_database:
        result += f'<p><a href="/students?{i["id"]}/> {i["title"]}</a></p>'
    return HttpResponse(result)

def single_movie(request, id):
    i = movies_database[id]
    return HttpResponse(f'<p>ID: {i["id"]}, Title: {i["title"]}, Year: {i["year"]}, Rating: {i["rating"]}</p>')
