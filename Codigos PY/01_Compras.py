# Solicitar la información de los productos
nombreProducto1 = input("Nombre del Producto 1: ")
c1 = int(input("Digite la cantidad del producto 1: "))
p1 = float(input("Digite el precio del producto 1: "))

nombreProducto2 = input("Nombre del Producto 2: ")
c2 = int(input("Digite la cantidad del producto 2: "))
p2 = float(input("Digite el precio del producto 2: "))

nombreProducto3 = input("Nombre del Producto 3: ")
c3 = int(input("Digite la cantidad del producto 3: "))
p3 = float(input("Digite el precio del producto 3: "))

sub1 = c1 * p1
sub2 = c2 * p2
sub3 = c3 * p3

total = sub1 + sub2 + sub3

cantidad_de_pago = float(input("Cuánto paga el cliente: "))

cambio = cantidad_de_pago - total

print(f"\nTotal de la compra: {total:.2f} $")
print(f"Cliente pagó: {cantidad_de_pago:.2f} $")
print(f"Cambio a devolver: {cambio:.2f} $")


