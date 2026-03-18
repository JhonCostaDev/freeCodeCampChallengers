def calc_square_root(number):
    assert number >= 0, 'Cannot calculate square root of negative number'
    return number ** 0.5

try:
    result = calc_square_root(-2)
except AssertionError as e:
    print(e)
else:
    print(result)
finally:
    print("End of the program")