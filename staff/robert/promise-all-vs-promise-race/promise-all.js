//PROMISES ALL DEMO

const promises = [
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('one'))
      },
        2000)
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('two'))
      },
        4000, )
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(console.log('three'))
      },
        6000)
    })
  ]
  
  Promise.all(promises).then(() => console.log('All promises resolved'))