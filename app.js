let a = 0
let b = 1
let c = 0
let largo_ciclo = prompt('cuantos números deseas mostrar: ')

for (let i = 0; i <= largo_ciclo; i++) {
    if (i < largo_ciclo) {
    document.write(a + ', ')
    } else {
        document.write(a)
    }
    c=a+b
    a=b
    b=c
}