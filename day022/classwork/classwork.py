list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

user = int(input("your numbre:"))

if 0 <= user < 10:
    print(list[user])

elif user >= -10 and user <= -1:
    print(list[user])

else:
    print("wrong")