function _largerInteger(num1, num2) {
    if (num1 > num2)
        return num1;

    return num2;
}

function largerInteger(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log('largerInteger should result 56 for inputs -34 and 56 =>', largerInteger(-34, 56));
console.log('largerInteger should result -34 for inputs -34 and -56 =>', largerInteger(-34, -56));

function _signProduct() {
    var isPositive = true;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < 0) {
            isPositive = !isPositive;
        };
    };
    return "The sign is " + (isPositive ? "+" : "-");
};

function _signProduct(...numArgs) {
    var nums = numArgs
    var boo = true
    for (let i = 0; i < numArgs.length; i++) {
        numArgs[i] < 0 ? boo = !boo : boo
    }
    return `The sign is ${boo ? ` +` : ` -`}`
}

function signProduct(a, b, c) {
    if (a * b * c > 0) {
        return ('The sign is +');
    } else {
        return ('The sign is -');
    }
}

console.log('signProduct should result "-" for 1, -2, 3 =>', signProduct(1, -2, 3));
console.log('signProduct should result "+" for 1, -2, -3 =>', signProduct(1, -2, -3));
console.log('signProduct should result "-" for -1, -2, -3 =>', signProduct(-1, -2, -3));
//console.log('signProduct should result "+" for -1, -2, -3, -4, 5 =>', signProduct(-1, -2, -3, -4, 5));

function sortNumbers(v1, v2, v3) {
    var num1 = v1;
    var num2 = v2;
    var num3 = v3;
    if (v1 < v2) {
        num1 = v1;
        num2 = v2;
    } else if (v1 > v2) {
        num1 = v2;
        num2 = v1;
    }
    var num21, num22, num23;
    if (v3 > num2) {
        num21 = num1;
        num22 = num2;
        num23 = v3;
    } else if (v3 < num2 && v3 > num1) {
        num21 = num1;
        num22 = v3;
        num23 = num2;
    } else if (v3 < num1) {
        num21 = v3;
        num22 = num1;
        num23 = num2;
    }
    var message = num23 + ', ' + num22 + ', ' + num21;
    return message;
}

function _sortNumbers(a, b, c) {
    var array = [];
    switch (true) {
      case a > b && b > c: //FIX: correct expressions! ex: a > b && b > c
        array.push(a, b, c);
        break;
      case b > c && c > a:
        array.push(b, c, a);
        break;
      case c > a && a > b:
        array.push(c, a, b);
        break;
      case a > c && c > b:
        array.push(a, c, b);
        break;
      case b > a && a > c:
        array.push(b, a, c); //FIX: This push array
        break;
      case c > b && b > a: //FIX: This push array
        array.push(c, b, a);
        break;
      default:
        console.error("unpredicted case!");
      /*
                sortNumbers should result 2, 15, -13 for input 15, 2, -13 => Output: 2, 15, -13, 
                sortNumbers should result -2, -15, -13 for input -13, -15, -2 => Output: -13, -15, -2, 
            */
    }
    var string = '';
    for (var i = 0; i <= array.length - 1; i++) {
        string = string + array[i] + ', '
    }
    return "Output: " + string;
}

function _sortNumbers(num1, num2, num3) {
    if (num1 > num2 && num2 > num3) {
        return [num1, num2, num3];
    } else if (num2 > num1 && num1 > num3) {
        return [num2, num1, num3];
    } else if (num3 > num1 && num1 > num2) {
        return [num3, num1, num2];
    } else if (num1 > num3 && num3 > num2) {
        return [num1, num3, num2];
    } else if (num2 > num3 && num3 > num1) {
        return [num2, num3, num1];
    } else if (num3 > num2 && num2 > num1) {
        return [num3, num2, num1];
    }
}

function _sortNumbers(num1, num2, num3) {
    if (num1 > num2 && num1 > num3 && num2 > num3)
        return num1 + " " + num2 + " " + num3;
    else if (num2 > num1 && num2 > num3 && num1 > num3)
        return num2 + " " + num1 + " " + num3;
    else if (num3 > num1 && num3 > num2 && num1 > num2)
        return num3 + " " + num1 + " " + num2;
    else if (num1 > num2 && num1 > num3 && num2 < num3)
        return num1 + " " + num3 + " " + num2;
}


console.log("sortNumbers should result 4, 0, -1 for input 0, -1, 4 =>", sortNumbers(0, -1, 4));
console.log("sortNumbers should result 2, 15, -13 for input 15, 2, -13 =>", sortNumbers(2, 15, -13));
console.log("sortNumbers should result -2, -15, -13 for input -13, -15, -2 =>", sortNumbers(-13, -15, -2));

function _oddOrEven() {
    var response = "";
    for (var i = 0; i <= 15; i++) {
        response += i + " is " + (i % 2 ? "odd" : "even") + "\n"
    };
    return response;
}

function oddOrEven(a) {
    var res = '';
    var b = -1;
    while (++b <= a) {
        if (b % 2 == 0) {
            res += b + " is even\n";
        } else {
            res += b + " is odd\n";
        }
    }
    return res;
}

console.log("oddOrEvent should return odd and even values of 15 (separated) =>", oddOrEven(15));

function largestNumber(v1, v2, v3, v4, v5) {
    var largest;
    if (v1 > v2) {
        largest = v1;
    } else {
        largest = v2;
    }
    if (v3 > largest) {
        largest = v3;
    }
    if (v4 > largest) {
        largest = v4;
    }
    if (v5 > largest) {
        largest = v5;
    }
    return largest;
}

function largestNumber(a) {
    var swapp;
    var n = a.length - 1;
    var x = a;
    do {
        swapp = false;
        for (var i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                var temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swapp = true;
            }
        }
        n--;
    } while (swapp);
    return x[0];
}


//console.log("largestNumber(-5, -2, -6, 0, -1) should return the largest of input numbers =>", largestNumber(-5, -2, -6, 0, -1));
//console.log("largestNumber(5, -2, 6, 100, -1) should return the largest of input numbers =>", largestNumber(5, -2, 6, 100, -1));
console.log("largestNumber([-5, -2, -6, 0, -1]) should return the largest of input numbers =>", largestNumber([-5, -2, -6, 0, -1]));
console.log("largestNumber([5, -2, 6, 100, -1]) should return the largest of input numbers =>", largestNumber([5, -2, 6, 100, -1]));