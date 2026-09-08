from django.shortcuts import render

movies_database = [
    {"id": 0, "title": "Inception", "director": "Christopher Nolan", "year": 2010},
    {"id": 1, "title": "The Matrix", "director": "The Wachowskis", "year": 1999},
    {"id": 2, "title": "Interstellar", "director": "Christopher Nolan", "year": 2014},
    {"id": 3, "title": "Pulp Fiction", "director": "Quentin Tarantino", "year": 1994},
    {"id": 4, "title": "Fight Club", "director": "David Fincher", "year": 1999},
]

def movie_list(request):
    return render(request, 'movies/list.html', {'movies_database': movies_database})

def movie_detail(request, movie_id):
    movie = None
    for item in movies_database:
        if item['id'] == movie_id:
            movie = item
    return render(request, 'movies/detail.html', {'movie': movie})

def movie_year(request, movie_id):
    movie = None
    for item in movies_database:
        if item['id'] == movie_id:
            movie = item
    if movie:
        return render(request, 'movies/year.html', {'year': movie['year']})
    return render(request, 'movies/year.html', {'year': None})
