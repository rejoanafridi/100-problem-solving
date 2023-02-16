def averageNumber(lst):
    sum = 0
    for num in lst:
        sum += num
    return sum / len(lst)


my_list = [4, 5, 6, 7, 8]
res = averageNumber(my_list)
print(res)
