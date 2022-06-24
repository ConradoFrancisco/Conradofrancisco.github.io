import sqlite3
# Mensaje Bienvenida
print("Bienvenido al sistema de Calificaciones de la Institución \nporfavor ingrese un numero para la opción que desea realizar:\n")
print(
    "1-Ingresar calificaciones al sistema\n"
    "2-Visualizar calificaciones de los alumnos\n"
    "3-Salir del sistema"
)
opcion = input()

while len(opcion) != 1 or not opcion.isdecimal() or opcion not in ("1","2","3"):
    opcion = input("solo tienes las opciones 1, 2 y 3 porfavor intente de nuevo")
#conección con la base de datos
opcion = int(opcion)
conn = sqlite3.connect("AlumnosDataBase.db")
cursor = conn.cursor()
while opcion != 3:
    if opcion == 1:
        materia = input("ingrese la asignatura que desea calificar: ")
        clase = input("ingrese la clase a la que desea evaluar con el siguiente formato ('5º-C'): ")
        try:
            cursor.execute(f"CREATE TABLE '{materia + clase}' (nombre TEXT,'1º Trimestre' NUMERIC,'2º Trimestre' NUMERIC,'3º Trimestre' NUMERIC ,'Promedio' NUMERIC)")
        except:
            pass
        while True:
            nombre = input("ingrese el nombre y el apellido del alumno al cual quiera evaluar: ")
            nota = input("ingrese la nota del primer trimestre: ")
            nota1 = input("ingrese la nota del segundo trimestre: ")
            nota2 = input("ingrese la nota del tercer trimestre: ")
            promedio = (int(nota) + int(nota1) + int(nota2)) / 3
            cursor.execute(f"INSERT INTO '{materia + clase}' VALUES(?,?,?,?,?)",(nombre,nota,nota1,nota2,promedio))
            conn.commit()
            opcion = int(input("desea agregar otro alumno?\n1-Si\n0-No\n"))
            if opcion == 0:
              break  
        print(
        "1-Ingresar calificaciones al sistema\n"
        "2-Visualizar calificaciones de los alumnos\n"
        "3-Salir del sistema")
        opcion = int(input())
    elif opcion == 2:
        materia = input("ingrese la asignatura que desea observar: ")
        clase = input("ingrese la clase que quiera ver con el siguiente formato ('5º-C'): ")
        while True:
            try:
                cursor.execute(f"SELECT * FROM '{materia + clase}'")
                break
            except:
                print("no existe esa materia o ese curso, intente nuevamente")
                materia = input("ingrese la asignatura que desea observar: ")
                clase = input("ingrese la clase que quiera ver con el siguiente formato ('5º-C'): ")
        resultado = cursor.fetchall()
        cadena = ""
        for alumno in resultado:
            alumni = alumno[0]
            while len(alumni) < 30:
                alumni += " "
            cadena += str((f"{alumni}     -----     1º:{alumno[1]} 2º:{alumno[2]} 3º:{alumno[3]} Promedio: {alumno[4]} \n"))
        f = open(f"{materia}{clase}.txt","w" ,encoding="utf8")
        f.write(cadena)
        f.close()
        print(f"se ha creado un archivo de texto en el directorio actual donde podra visualizar todas las notas de los alumnos del curso: {clase} en la asignatura: {materia}")
        optar = (input("desea checkear otro curso o materia?\n1-Si\n0-No\n"))
        while optar != "1" and optar != "0":
            print("opcion no valida checkear otro curso o materia?\n1-Si\n0-No\n")
            optar = input()
        optar = int(optar)
        if optar == 1:
            opcion = 2
        else:
            print(
            "1-Ingresar calificaciones al sistema\n"
            "2-Visualizar calificaciones de los alumnos\n"
            "3-Salir del sistema")
            opcion = input()
            while len(opcion) != 1 or not opcion.isdecimal() or opcion not in ("1","2","3"):
                opcion = input("solo tienes las opciones 1, 2 y 3 porfavor intente de nuevo")
            opcion = int(opcion)
            
conn.close()       
print("gracias por haber utilizado el programa!")    
    



