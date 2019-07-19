inventory = []

class Product:

    def __init__(self, name, price):
        self.name = name
        self.price = price
        self.tax = 0.10
        inventory.append(self)

    def total(self):
        return self.price + self.price * self.tax

    def __repr__(self):
        return f'Product({self.name})'

class Book(Product):

    def __init__(self, name, price):
        super().__init__(name, price)
        self.tax = 0


phone = Product('Mobile Phone', 100)
book = Book('Catcher In The Rye', 10)

print(inventory)

print("Total inventory value on hand:")
print(sum(item.price for item in inventory))

print()

cart = [phone, book]

print("Cart total:")
print(sum(item.total() for item in cart))

