function processData(input) {
    let lines = input.split('\n');
    if(lines.length < 3)
        throw new Error('processData - Invalid input. Must have at least 1 test case, 1 matrix initialization vector and 1 command (lines.length = ' + lines.length +').');
    let c = 0;
    let T = parseInt(lines[c++]);
    if((T < 1) || (T > 50))
        throw new Error('processData - Number of test cases not within range (1 <= T <= 50; T = ' + t +').');
    while(T--) {
        let args = lines[c++].split(' ');
        if(args.length != 2)
            throw new Error('Invalid input. Matrix initalization vector must have 2 arguments (args.length =' + args.length + '; line = ' + (c-1) + ').');
        let N = parseInt(args[0]);
        let M = parseInt(args[1]);
        if((N < 1) || (N > 100))
            throw new Error('processData - Test case matrix size not within range (1 <= N <= 100; N = ' + n + ').');
        if((M < 1) || (M > 1000))
            throw new Error('processData - Number of lines in test case not within range (1 <= M <= 1000; M = ' + m + ').');
        let matrix = [];
        while(M--) {
            let command = lines[c++];
            processCommand(command, matrix, N);
        }
    }
}

function processCommand(command, matrix, N) {
    let args = command.split(' ');
    if((args.length != 5) && (args.length != 7))
        throw new Error('processCommand - Invalid command syntax. Usage: \'UPDATE x y z W\' or \'QUERY x1 y1 z1 x2 y2 z2\' (command = ' + command + ').');
    switch(args[0]) {
        case 'UPDATE':
            update(parseInt(args[1]), parseInt(args[2]), parseInt(args[3]), parseInt(args[4]), matrix, N);
            break;
        case 'QUERY':
            query(parseInt(args[1]), parseInt(args[2]), parseInt(args[3]), parseInt(args[4]), parseInt(args[5]), parseInt(args[6]), matrix, N);
            break;
        default:
            throw new Error('processCommand - Invalid command syntax. Usage: \'UPDATE x y z W\' or \'QUERY x1 y1 z1 x2 y2 z2\' (command = ' + command + ').');
    }
}

function update(x, y, z, W, matrix, N) {
    if((x < 1) || (y < 1) || (z < 1) || 
       (x > N) || (y > N) || (z > N))
        throw new Error('update - Vector coordinates not in range (1 <= [x, y, z] <= N; [x, y, z] = [' + x + ', ' + y + ', ' + z + ']).');
    if((W < -10e+9) || (W > 10e+9))
        throw new Error('update - W value not in range (-10^9 <= W <= 10^9; W = ' + W.toExponential() + ').');
    matrix[Math.pow((N + 1), 2) * z + (N + 1) * y + x] = W;
}

function query(x1, y1, z1, x2, y2, z2, matrix, N) {
    if((x1 < 1) || (y1 < 1) || (z1 < 1) ||
       (x2 < 1) || (y2 < 1) || (z2 < 1) ||
       (x2 < x1) || (y2 < y1) || (z2 < z1) ||
       (x1 > N) || (y1 > N) || (z1 > N) ||
       (x2 > N) || (y2 > N) || (z2 > N)) 
        throw new Error('update - Vector coordinates not in range (1 <= [x1, y1, z1] <= [x2, y2, z2] <= N; [x1, y1, z1] = [' + x1 + ', ' + y1 + ', ' + z1 + ']; [x2, y2, z2] = [' + x2 + ', ' + y2 + ', ' + z2 + ']).');
    let sum = 0;
    for(var i in matrix) {
        var z = Math.floor(i / Math.pow((N + 1), 2));
        var y = Math.floor((i - Math.pow((N + 1), 2) * z) / (N + 1));
        var x = Math.floor((i - Math.pow((N + 1), 2) * z) - (N + 1) * y);
        if((x >= x1) && (x <= x2) && (y >= y1) && (y <= y2) && (z >= z1) && (z <= z2)) sum+= matrix[i];
    }
    console.log(sum);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
