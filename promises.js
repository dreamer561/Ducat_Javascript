let aPromise = new Promise(function (resolve, reject) {
    resolve();
    reject();

    if (2 != 2) {
        resolve('True');
    } else {
        reject('Rejected');
    }
});
aPromise
    .then(
        fullfilled, rejected
    )

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });
  
  console.log(myPromise);
let items=['pen','paper','pencil']
let myPromise = new Promise((resolve,reject)=>{
    if (items.includes('pen')) {
        resolve("Avilable")
        
    } else {
        reject('not Avilable')
        
    }

 });
 console.log(myPromise);
myPromise
.then((result)=>{console.log(result);})
.catch((error)=>{console.log(error);})

let promise1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise1')
    }, 6000)
})
let promise2=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise2')
    }, 5000)
})
let promise3=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise3')
    }, 2000)
})
let promise4=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise4')
    }, 1000)
})
promise1
.then((data)=>{console.log(data);})
promise2
.then((data)=>{console.log(data);})
promise3
.then((data)=>{console.log(data);})
promise4
.then((data)=>{console.log(data);})

Fetch API
let images=fetch("https://jsonplaceholder.typicode.com/photos");
images
.then((response,reject)=>{response.json();
reject(console.log('Rejected'))
})
.then((data)=>{console.log(data)});

Async And Await
async function getocuntries(){
    let response=await fetch("https://jsonplaceholder.typicode.com/photos");
    let data=await response.json();
    return data
}
getocuntries()
.then((data)=>{console.log(data);})
.catch((error)=>{console.log(error);})



