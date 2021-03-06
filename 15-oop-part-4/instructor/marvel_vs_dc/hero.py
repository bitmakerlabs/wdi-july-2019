from powers import *

class Hero:

    MAX_HEALTH = 100
    DEFAULT_POWER = 10
    DEFAULT_HEALING_FACTOR = 10
    DEFAULT_SPEED = 0
    DEFAULT_ALTITUDE = 0

    def __init__(self, name):
        self.name = name

        self.health = self.MAX_HEALTH
        self.power = self.DEFAULT_POWER
        self.healing_factor = self.DEFAULT_HEALING_FACTOR
        self.speed = self.DEFAULT_SPEED
        self.altitude =  self.DEFAULT_ALTITUDE

    def is_conscious(self):
        return self.health > 0

    def hit(self, opponent):
        if (self.is_conscious() and
            self.speed >= opponent.speed and
            self.altitude >= opponent.altitude):
          opponent.take_hit(self.power)

    def take_hit(self, damage):
        self.health -= damage
        if self.health < 0:
            self.health = 0

    def rest(self):
        self.health += self.healing_factor
        if self.health > self.MAX_HEALTH:
            self.health = self.MAX_HEALTH

class Kryptonian(Strength, Speed, Flight, Hero):
    pass

class Speedster(Speed, Hero):
    pass

class BatPerson(MartialArts, Genius, Hero):
    pass

class XWeapon(MartialArts, Claws, Hero):
    pass

class Amazonian(Flight, MartialArts, Strength, Hero):
    pass

class IronPerson(Flight, Genius, Rich, Hero):
    pass
