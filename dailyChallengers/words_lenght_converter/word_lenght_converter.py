def convert_words(string):
    list_words = string.split(' ')
    words_length = ' '.join([str(len(x)) for x in list_words])
    
    return words_length


example = 'hello world'
convert_words(example)