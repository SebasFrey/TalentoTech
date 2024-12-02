print("\tRecibo De Luz")

lectura_actual= int(input("Ingrese Lectura Del Mes Actual: "))
lectura_anterior = int(input("Ingrese Lectura Del Mes Anterior: "))
kWh = 1.580

consumo = lectura_actual - lectura_anterior

total = consumo * kWh


print(f"El Valor A Pagar Es: {total} $")








