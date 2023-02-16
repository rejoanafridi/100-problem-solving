# write a program to find the largest number in the list

def largest_number(list):
    max_number = list[0]
    for number in list:
        if number > max_number:
            max_number = number
    return max_number


list = [1, 3, 4, 5, 6]
res = largest_number(list)

print(res)
