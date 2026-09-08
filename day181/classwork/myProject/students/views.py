from django.shortcuts import render
from django.http import HttpResponse

students_database = [
    {"id": 0, "name": "ნიკა", "age": 15, "grade": 9},
    {"id": 1, "name": "ანა", "age": 14, "grade": 8},
    {"id": 2, "name": "გიორგი", "age": 16, "grade": 10},
    {"id": 3, "name": "მარიამი", "age": 13, "grade": 7},
    {"id": 4, "name": "ლუკა", "age": 17, "grade": 11},
    {"id": 5, "name": "ელენე", "age": 15, "grade": 9},
    {"id": 6, "name": "დავითი", "age": 14, "grade": 8},
    {"id": 7, "name": "ნინო", "age": 16, "grade": 10},
    {"id": 8, "name": "ალექსანდრე", "age": 17, "grade": 12},
    {"id": 9, "name": "ლიზა", "age": 13, "grade": 7},
    {"id": 10, "name": "ირაკლი", "age": 15, "grade": 9},
    {"id": 11, "name": "სალომე", "age": 16, "grade": 10},
    {"id": 12, "name": "საბა", "age": 14, "grade": 8},
    {"id": 13, "name": "თამარი", "age": 17, "grade": 11},
    {"id": 14, "name": "ლაშა", "age": 15, "grade": 9}
]

def all_students(request):
    result=''
    for i in students_database:
        result += f'<p><a href="/students?{i["id"]}/> {i["name"]}</a></p>'
    return HttpResponse(result)

def single_student(request, id):
    i = students_database[id]
    return HttpResponse(f'<p>ID: {i["id"]}, Name: {i["name"]}, Age: {i["age"]}, Grade: {i["grade"]}</p>')
