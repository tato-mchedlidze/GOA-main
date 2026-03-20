list = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
for x in list:
    print(x)

list1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

numb1 = int(input("numbre1:"))
numb2 = int(input("numbre2:"))

if numb1 < numb2:
    print(list1[numb1 : numb2])

elif numb2 < numb1:
    print(list1[numb2 : numb1])

else:
    print(list1)

