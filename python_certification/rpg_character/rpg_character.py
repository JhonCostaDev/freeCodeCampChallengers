def create_character(name:str, strength:int, intelligence:int, charisma:int):
    if not isinstance(name, str):
        return 'The character name should be a string.'
    elif not name:
        return ' The character should have a name.'
    elif len(name) > 10:
        return 'The character name is too long.'
    elif ' ' in name:
        return 'The character name should not contain spaces.'
    
    if not isinstance(strength, int) or not isinstance(intelligence, int) or not isinstance(charisma, int):
        return 'return All stats should be integers.'
    elif strength < 1 or intelligence < 1 or charisma < 1:
        return ' All stats should be no less than 1'
    elif strength > 4 or intelligence > 4 or charisma > 4:
        return 'All stats should be no more than 4.'
    elif sum([strength, intelligence, charisma]) > 7:
        return 'The character should start with 7 points.'