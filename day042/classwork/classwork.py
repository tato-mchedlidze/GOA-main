#  cw 1
dict1 = {
    "name": "tato",
    "surname": "mchedlidze",
    "accademy": "GOA",
    "fav-color": "dark-green",
    "city": "axalcixe",
    "goa-student": True,
    "age": "16",
    "fav-programming-lang": "HTML"
}

print(dict1["name"])
print(dict1["surname"])
print(dict1["accademy"])
print(dict1["fav-color"])
print(dict1["city"])
print(dict1["goa-student"])
print(dict1["age"])
print(dict1["fav-programming-lang"])

# cw 2

dict2 = {
    'name': 'tato',
    'age': "16",
    'city': 'axalcixe',
    'job': 'Goa-student',
    'country': 'Georgia'
}

print(dict2.keys())

print(dict2.values())

print(dict2.items())

for key, value in dict2.items():
    print(key, value)