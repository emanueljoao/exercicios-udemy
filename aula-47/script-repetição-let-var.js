// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// console.log("i = ", i )

// let i = 0
// {
//     for (i; i < 10; i++) {
//         console.log(i)
//     }

// }

// console.log("i = ", i )

const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        // return i 
        console.log(i)
    })
}


// console.log(funcs[0])
// funcs[0]()
// funcs[1]()
// funcs[2]()
// funcs[2]()
// funcs[4]()


for (let p = 0; p < 10; p++) {
    funcs[p]()
}


