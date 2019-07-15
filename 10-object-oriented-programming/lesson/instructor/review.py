# One-Topping Pizza!!!
def order(dough, ingredient):
    cost = 10

    if dough == 'gluten_free':
        cost += 4

    if ingredient == 'pepperoni':
        cost += 3
    elif ingredient == 'cheese':
        cost += 2
    elif ingredient == 'sausage':
        cost += 6

    return cost


pepp_pizza_cost = order('regular', 'pepperoni')
print("The cost of a pepperoni pizza is {}".format(pepp_pizza_cost))

gf_pepp_pizza_cost = order('gluten_free', 'pepperoni')
print("The cost of a gf pepperoni pizza is {}".format(gf_pepp_pizza_cost))

print("The cost of a gf cheese pizza is {}".format(order('gluten_free', 'cheese')))
