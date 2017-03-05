# Coding Challenge
### 1. Las capas de la aplicación hr_cube-summation (https://github.com/emibelli/hr_cube-summation) son las siguientes:
##### Vista/Presentación:
```
test/cube-summation-test.js
index.html
```
##### Control/Aplicación: 
```
cube-summation.js
```
##### Modelo/Persistencia:
```
test/testcases/*.txt
```

### 2. La responsabilidad de cada clase creada es la siguiente:
```
test/cube-summation-test.js:
```
Se encarga de capturar los comandos para los diferentes casos de prueba precargados y presentar los resultados de las pruebas mediante una interfaz CLI.
```
index.html
```
Se encarga de capturar los datos de entrada (input) y presentar la información de salida (output) mediante una interfaz Web.
```
cube-summation.js
```
Se encarga de procesar los datos de entrada (input) y generar los datos de salida (output) para dar solución al problema planteado en el Coding Challenge de HackerRank.
```
test/testcases/*.txt
```
Se encargan de almacenar los datos del caso de ejemplo y los casos de pruebas del Coding Challenge de HackerRank

# hr_cube-summation
Solución al Cube Summation Coding Challenge de HackerRank (https://www.hackerrank.com/challenges/cube-summation).

### Sample Input
```
2
4 5
UPDATE 2 2 2 4
QUERY 1 1 1 3 3 3
UPDATE 1 1 1 23
QUERY 2 2 2 4 4 4
QUERY 1 1 1 3 3 3
2 4
UPDATE 2 2 2 1
QUERY 1 1 1 1 1 1
QUERY 1 1 1 2 2 2
QUERY 2 2 2 2 2 2
```

### Sample Output 
```
4
4
27
0
1
1
```

### Testing
Los tests de la aplicación principal se deben realizar con node v6.10 o mejor.

Los tests implementados son los siguientes:

##### Sample Test
`
node cube-summation-test.js --hr_sample
`

##### HackerRank Test Cases
`
node cube-summation-test.js --hr_testcases
`

##### Custom Test Case
`
node cube-summation-test.js /path/to/test_input_file.txt /path/to/test_expected_output_file.txt
`
