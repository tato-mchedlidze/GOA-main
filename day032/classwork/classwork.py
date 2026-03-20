def generate_big_sentence(name, surname, age):
    print("hallo, my name is {}, my surname is {}, my age is {}". format(name, surname, age))

name = str(input("your name:"))
surname = str(input("your surname:"))
age = str(input("your age:"))

generate_big_sentence(name, surname, age)