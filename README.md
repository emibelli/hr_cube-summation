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
