
prompt = "What is your name?"
print(prompt)

name = input()
print("Hello {}".format(name))

print("What is your birth year?")
user_birth_year = int(input())
user_age = 2019 - user_birth_year
print("You are {}".format(user_age))
