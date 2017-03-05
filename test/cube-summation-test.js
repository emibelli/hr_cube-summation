const fs = require('fs');
let cube_summation = require('../cube-summation');

let input = [];
let expect = [];
let output = [];
console.log = function(e) {
    output.push(e);
}

function test(input, expect) {
    cube_summation.processData(input);

    if(output.toString() === expect.toString()) {
        process.stdout.write('Test passed!\n');
    } else {
        if(output.length <= 7 || expect.length <= 7) {
            process.stdout.write('Test failed! Expected [' + expect.toString() + '] to be equal to [' + output.toString() + '].\n');
        } else {
            process.stdout.write('Test failed! Expected [Array(' + expect.length + ')] to be equal to [Array(' + output.length + ')].\n');
        }
    }
}

process.argv.forEach(function(val, index, array) {
    try {
        if(array.length < 3) {
            process.stdout.write('USAGE: node cube-summation-test.js [ --help | --hr_sample | --hr_testcases | /path/to/test_input_file.txt /path/to/test_expected_output_file.txt ]');
            process.exit();
        }
        if(index == 2) {
            switch(val) {
                case '--help':
                    process.stdout.write('USAGE: node cube-summation-test.js [ --help | --hr_sample | --hr_testcases | /path/to/test_input_file.txt /path/to/test_expected_output_file.txt ]');
                    process.exit();
                    break;
                case '--hr_sample':
                    process.stdout.write('HackerRank Sample Test Case:\n');
                    input = fs.readFileSync('./testcases/hr_sample_input.txt').toString();
                    expect = fs.readFileSync('./testcases/hr_sample_expect.txt').toString().split('\r\n');
                    test(input, expect);
                    process.exit();
                    break;
                case '--hr_testcases':
                    for(var n = 1; n <= 8; n++) {
                        process.stdout.write('HackerRank Test Case #' + n + ':\n');
                        output = [];
                        input = fs.readFileSync('./testcases/hr_testcase' + n + '_input.txt').toString();
                        expect = fs.readFileSync('./testcases/hr_testcase' + n + '_expect.txt').toString().split('\r\n');
                        test(input, expect);
                    }
                    process.exit();
                    break;
                default:
                    process.stdout.write('Custom Test Case:\n');
                    input = fs.readFileSync(array[2]).toString();
                    expect = fs.readFileSync(array[3]).toString().split('\r\n');
                    test(input, expect);
                    process.exit();
                    break;
            }
        }
    } catch (error) {
        process.stdout.write(error + '\n' + error.stack);
        process.stdout.write('USAGE: node cube-summation-test.js [ --help | --hr_sample | --hr_testcases | /path/to/test_input_file.txt /path/to/test_expected_output_file.txt ]');
        process.exit();
    }
});