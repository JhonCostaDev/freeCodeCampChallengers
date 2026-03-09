def number_pattern(n):
    if not isinstance(n, int):
        return 'Argument must be an integer value.'
    elif n < 1:
        return 'Argument must be an integer greater than 0.'
    num_pattern = ' '.join([str(x) for x in range(1, n + 1)])
    return num_pattern

print(number_pattern(5))

