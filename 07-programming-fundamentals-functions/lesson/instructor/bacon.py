
def product_to_price(product):
    lc_product = product.lower()

    if lc_product == 'bacon':
        return 10.0
    elif lc_product == 'beyond bacon':
        return 15.0
    elif lc_product == 'orange juice':
        return 3.0
    else:
        return 0.0

def make_bill(products = ['Glass of Water']):
    header = "B is for Bacon\n" \
        "\n" \
        "--------------\n"

    main = ''
    for product in products:
        main += "${:.2f} {}\n".format(
            product_to_price(product), 
            product
        )

    footer = "--------------\n" \
        "\n" \
        "Please Come Again!\n"

    return header + main + footer

#--------------
print(make_bill( ['Bacon', 'Orange Juice'] ))
print(make_bill( ['Beyond Bacon'] ))