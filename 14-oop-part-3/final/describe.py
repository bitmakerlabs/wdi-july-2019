class Life:

    def __init__(self, type):
        self.type = type

    def describe(self):
        print(f'{self.type} is okay')

class Animal(Life):

    def describe(self):
        print(f'{self.type} is cuddly')


class Plant(Life):

    def describe(self):
        print(f'{self.type} is nice to look at')

class Insect(Life):

    def describe(self):
        print(f'{self.type} is creepy')


cat = Animal('cat')
cat.describe()

oak = Plant('oak tree')
oak.describe()

spider = Insect('spider')
spider.describe()
