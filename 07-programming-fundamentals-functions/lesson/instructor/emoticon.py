
def display_emoticon(emotion = 'happy', style = 'western'):
    if emotion == 'happy':
        if style == 'japanese':
            return 'ツ'
        else:
            return ':)'
    elif emotion == 'sad':
        if style == 'japanese':
            return '⊙︿⊙'
        else:
            return ':('
    else:
        return '(shrug)'

print(display_emoticon('happy'))
print(display_emoticon('sad'))
print(display_emoticon('happy', 'japanese'))
print(display_emoticon('sad', 'japanese'))
print(display_emoticon())
