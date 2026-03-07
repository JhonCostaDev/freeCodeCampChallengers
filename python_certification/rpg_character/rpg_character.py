def create_character(name, strength, intelligence, charisma):
    if not isinstance(name, str):
        return 'The character name should be a string.'
    elif not name:
        return ' The character should have a name.'
    elif len(name) > 10:
        return 'The character name is too long.'
    elif ' ' in name:
        return 'The character name should not contain spaces.'