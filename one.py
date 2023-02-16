# Write a program to find the sum of all numbers in a list


def sum_of_list(list):
     sum = 0
     for num in list:
          sum += num
     return sum


my_list = [2,34,54,56]
result = sum_of_list(my_list)
print(result)