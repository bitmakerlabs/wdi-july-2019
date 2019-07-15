
#
# Object     State                    Behaviour (Method)
# -------------------------------------------------------
# Instance   Instance Variables       Instance Method


class Position:
    '''
    A class representing latitude and longitude coordinates
    '''

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"({self.x},{self.y})"

    def move_north(self, num):
        self.y += num

    def move_south(self, num):
        self.y -= num

    def move_east(self, num):
        self.x += num
    
    def move_west(self, num):
        self.x -= num

class Cat:
    '''
    A class representing Cats
    '''

    # Constructor
    def __init__(self, first_name, last_name, x, y, hunger_level=0):
        self.first_name = first_name
        self.last_name = last_name
        self.position = Position(x,y)
        self.hunger_level = hunger_level
   
    def __str__(self):
        return "Cat instance: first_name={} last_name={} hunger_level={} position={}".format(
                self.first_name, 
                self.last_name, 
                self.hunger_level, 
                self.position
            )

    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)

    def eat(self):
        self.hunger_level += 25

    def meow(self):
        if self.hunger_level <= 50:
            return "{}: Meeeeooooow".format(self.full_name())
        else:
            return "{}: Meow".format(self.full_name())

    def move(self, direction):
        if direction == 'N':
            self.position.move_north(1)
        elif direction == 'S':
            self.position.move_south(1)
        elif direction == 'E':
            self.position.move_east(1)
        elif direction == 'W':
            self.position.move_west(1)

#print(Cat.__doc__)

cora = Cat('Cora', 'Ngo', 3, 4)
print(cora)
cora.move('N')
cora.move('W')
print(cora)

# print(cora.full_name())
# print(cora.meow())
# cora.eat()
# cora.eat()
# cora.eat()
# print(cora.meow())

grumpy = Cat('Tartar', 'Sauce', 10, -20)
print(grumpy)
# print(grumpy.meow())