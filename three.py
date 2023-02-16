# find a smallest no in the list

def smallest_number(list):
    min_number = list[0]
    for number in list:
        if number < min_number:
            min_number = number
    return min_number


list = [11, 3, 4, 5, 6]
res = smallest_number(list)

print(res)