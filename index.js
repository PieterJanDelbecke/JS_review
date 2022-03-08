// Promise.all()

const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise ((resolve, reject) => {
    setTimeout(resolve,1000,'foo')
})

Promise.all([promise3, promise1, promise2]).then((values) => {
    console.log(values)
})