let [node, path, oper, a, b] = process.argv

a = parseFloat(a)
b = parseFloat(b)

let res

switch(oper) {
    case 'sum':
        res = a + b
        break
    case 'mul':
        res = a * b
        break
    case 'div':
        res = a / b
}

console.log(res)