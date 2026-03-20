my_num = 5
user= input("numb guess: ")
counter= 0

while my_num != user:
    my_num = input("numb guess: ")
counter += 1

print("corecct")
print("your guess counter", str(counter))