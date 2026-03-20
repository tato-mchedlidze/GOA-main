corecctpass= "tuta"
count = 0
userpass = input("passcode?:")

while userpass != corecctpass:
    count +=1
    userpass = input("passcode?:")
print("corecct")
print("took you", count, "tries")