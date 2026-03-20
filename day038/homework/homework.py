# hw 2

my_tuple = (10, 20, 30, 40, 50)

second_element = my_tuple[1]

last_element = my_tuple[-1]

middle_three = my_tuple[1:4]

print(second_element)
print(last_element)
print(middle_three)


#  hw 3

my_tuple = (10, 20, 30, 40, 50)

# my_tuple[1] = 100


#  hw 4

my_tuple = (10, 20, 30, 40, 50)

a, b, c, d, e = my_tuple

print(a)
print(b)
print(c)
print(d)
print(e)

# hw 5

my_tuple = (10, 20, 30, 20, 40, 20)

count_20 = my_tuple.count(20)

index_20 = my_tuple.index(20)

print(count_20)
print(index_20)


# hw 6

my_set = {10, 20, 30, 40, 50}

my_set.add(60)

my_set.remove(30)

is_20_in_set = 20 in my_set

print(my_set)
print(is_20_in_set)

#  hw 7

set_1 = {10, 20, 30, 40, 50}
set_2 = {30, 40, 50, 60, 70}

union_set = set_1 | set_2

intersection_set = set_1 & set_2

difference_set = set_1 - set_2

print(union_set)
print(intersection_set)
print(difference_set)

#  hw 8

my_list = [10, 20, 20, 30, 40, 10, 50, 50]

unique_list = list(set(my_list))

print(unique_list)