def is_present(arr, element):

    for item in my_arr:
        if item == element:
            return True
    return False


my_arr = [2,3,4,5,6,7,8,9]
target_element = 10
if is_present(my_arr, target_element):
    print(f"The element {target_element} exists in the array.")
else:
    print(f"The element {target_element} does not exist in the array.")