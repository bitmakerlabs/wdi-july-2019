class Product:

  def __init__(self, name, price):
    self.name = name
    self.price = price
    self.tax = 0.10

  def total_price(self):
    return self.price * self.tax + self.price

  def __str__(self):
    return f'{self.name}'

  def __repr__(self):
    return self.__str__()

class Book(Product):
  def __init__(self, name, price):
    super().__init__(name, price)
    self.tax = 0.0

fish = Product('Gold Fish', 10)
pizza = Product('Pizza', 20)
book = Book('Catcher in the Rye', 10)

shopping_cart = []
shopping_cart.append(fish)
shopping_cart.append(pizza)
shopping_cart.append(book)

total = 0
for product in shopping_cart:
  total += product.total_price()

print(total)


print(shopping_cart)
