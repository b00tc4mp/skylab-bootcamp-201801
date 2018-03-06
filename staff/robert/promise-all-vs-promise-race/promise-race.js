//PROMISE RACE DEMO

const promises = [
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('one'))
      },
        Math.floor(Math.random() * 10000))
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('two'))
      },
      Math.floor(Math.random() * 10000))
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('three'))
      },
      Math.floor(Math.random() * 10000))
    })
  ]
  
  Promise.race(promises).then(() => console.log('THEN executed after first promise resolved.'))