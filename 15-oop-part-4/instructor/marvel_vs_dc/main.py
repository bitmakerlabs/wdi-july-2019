from hero import *

h1 = Hero('Mr. Generic')
h2 = Hero('Ms. Generic')


superman = Kryptonian('Clark Kent')

superman.fly()

h1.hit(superman)

superman.land()
superman.run()

h2.hit(superman)

supergirl = Kryptonian('Kara Danvers')
supergirl.run()
supergirl.hit(superman)
supergirl.hit(superman)

flash = Speedster('Barry Allen')
flash.run()
flash.hit(supergirl)

print(supergirl.health)

wolverine = XWeapon('Logan')
print(wolverine.power)
print(wolverine.__class__.__mro__)
