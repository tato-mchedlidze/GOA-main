#  hw 2

# 1 Beginner Series #1 School Paperwork
def paperwork(n, m):
    if n<0 or m<0:
        return 0
    else:
        return n * m

# 2 MakeUpperCase
def make_upper_case(s):
    return s.upper()

# 3 Beginner Series #2 Clock
def past(h, m, s):
    return (h * 3600 * 1000) + (m * 60 * 1000) + (s * 1000)

# 4 Are You Playing Banjo?
def are_you_playing_banjo(name):
    if name[0].lower() == "r":  
        return name + " plays banjo"
    else:
        return name + " does not play banjo"

# 5 Abbreviate a Two Word Name
def abbrev_name(name):
    names = name.split()
    
    initials = names[0][0].upper() + '.' + names[1][0].upper()
    
    return initials