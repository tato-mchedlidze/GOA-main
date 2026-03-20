name = str(input("your name:"))
choice = str(input("U or L:"))
if choice == "U":
    print(name.upper())
elif choice == "L":
    print(name.lower())
else:
    print("wrong information")