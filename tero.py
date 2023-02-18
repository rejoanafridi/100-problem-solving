my_list = [1, 2, 3, 4, 1, 2, 5, 6, 3, 4, 7, 8, 9, 5]

# create a new list to hold unique values
unique_list = []

# loop through the original list and add each element to the unique list if it doesn't already exist
for element in my_list:
    if element not in unique_list:
        unique_list.append(element)

# print the unique list
print(unique_list)