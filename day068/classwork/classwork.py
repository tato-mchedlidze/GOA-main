#  cw1 Disemvowel Trolls
def disemvowel(string_):
    vowels = "aeiouAEIOU"
    res = ""
    
    for i in string_:
        if i not in vowels:
            res += i
    
    return res


# cw2 Square Every Digit
# v1
def square_digits(num):
    return int("".join([str(int(d)**2) for d in str(num)]))
# v2
def square_digits(num):
    st = []
    
    for i in str(num):
        int_i = int(i)
        sq_i = int_i**2
        st.append(str(sq_i))
    
    return int("".join(st))


# cw3 Highest and Lowest
def high_and_low(numbers):
    nums = list(map(int, numbers.split()))
    return f"{max(nums)} {min(nums)}"


# cw4 List Filtering
# v1
def filter_list(l):
    return [i for i in l if isinstance(i, int)]
# v2
def filter_list(l):
    return [i for i in l if type(i)!=str]


# cw5 Descending Order
def descending_order(num):
    num_str = str(num)
    sorted_digits = sorted(num_str)[::-1]
    sorted_str = ''.join(sorted_digits)
    return int(sorted_str)