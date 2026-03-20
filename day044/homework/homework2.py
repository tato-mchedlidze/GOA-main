# 1 Reversed sequence
def reverse_seq(n):
    return list(range(n, 0, -1))

# 2 Rock Paper Scissors!
def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    return "Player 1 won!" if (p1, p2) in [("rock", "scissors"), ("scissors", "paper"), ("paper", "rock")] else "Player 2 won!"

# 3 Is n divisible by x and y?
def is_divisible(n,x,y):
    return n % x == 0 and n % y == 0

# 4 If you can't sleep, just count sheep!!
def count_sheep(n):
    return ''.join(f"{i} sheep..." for i in range(1, n + 1))

# 5 Grasshopper - Grade book
def get_grade(s1, s2, s3):
    avg = (s1 + s2 + s3) / 3
    if avg >= 90:
        return 'A'
    elif avg >= 80:
        return 'B'
    elif avg >= 70:
        return 'C'
    elif avg >= 60:
        return 'D'
    else:
        return 'F'