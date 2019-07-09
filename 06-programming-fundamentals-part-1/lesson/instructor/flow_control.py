# if statements

print('What day is it?')
day_of_week = input().lower()

# if (some condition is true)
#   then do something awesome
# (optionally) otherwise
#   then do something else

if day_of_week == 'monday':
    print('Blah')
elif day_of_week == 'tuesday':
    print('Happy Tuesday!')
elif day_of_week == 'friday':
    print('TGIF!')
    print("Let's go party!")
else:
    print('Have a good day.')

print('This always happens')

# Looping

# while loop
count = 3
while count < 0:
    print(count)
    count += 1
print('Go!')

# for loop
# for i in reversed(range(3)):
#     print(i+1)
# print('Go!')
