let a = 3, b = 4     

let o = {a, b}   // o是個物件，a欄位是3

let {a:x, b:y} = o   //a裡頭的x是3

console.log('a=', a, 'b=', b, 'o=', o, 'x=', x, 'y=', y)

let array = [a, b]

let [c, d] = array

console.log('c=', c, 'd=', d)

// [a, b] = [b, a]

let [ta, tb] = [a, b]

console.log('c=', c, 'd=', d)

console.log('ta=', ta, 'tb=', tb)
