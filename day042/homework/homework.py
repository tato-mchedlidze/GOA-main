# hw 3 and 15
dict1 = {
    "name": "tato",
    "surname": "mchedlidze",
    "accademy": "GOA",
    "fav-color": "dark-green",
    "city": "axalcixe",
    "goa-student": True,
    "age": "16",
    "fav-programming-lang": "HTML",
    "cousin": True,
    "sister": False
}

print(dict1.keys())


# hw 4
print(dict1.values())


# hw 5
print(dict1.items())


# hw 6
for key, value in dict1.items():
    print(key, value)


# # hw 7
check = input("watcha wanna check?:")

if check in dict1:
    print(f"Key '{check}' exists")
else:
    print(f"Key '{check}' does not exist")


# # hw 8 
def get_item_in_dict(get):
    if get in dict1:
        print(dict1.get(get))
    else:
        print("the key does not exist")

get = input("weatcha wanna get from dect?:")

get_item_in_dict(get)


# hw 9
dict1["fav_animal"] = "owl"
print(dict1)


# hw 10
dict1.pop("fav_animal")
print(dict1)


# hw 11
dict = {
    "name1": "davit",
    "surname1": "lazarashvili",
    "accademy1": "none",
}

dict1.update(dict)
print(dict1)


# hw 12
print(len(dict1))


# hw 13
def sum_numeric_values(my_dict):
    return sum(i for i in my_dict.values() if type(i) in (int, float))


# hw 14
dict.clear()
print(dict)