def manual_range(start, end, step):
    range1 = range(start, end, step)

    for i in range1:
        if i %2 ==0: print(i)

manual_range(2, 20, 2)
manual_range(20, 10, 4)
manual_range(4, 2, 1)
manual_range(30, 20, 5)
manual_range(10, 5, 2)