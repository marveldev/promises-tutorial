// Define a Promise- A promise is used to run asynchronous data.

// A Promise can be in one of three states:
// - Pending     | hasn't settled to a value yet
// - Fulfilled   | settled successfully  (calling resolve())
// - Rejected    | settled unsuccessfully (calling reject())

// A promise when successfull, will return the result to that promise.
// that returned result can then be used directly. 
// or its result can be further modified with a series of .then() methods.

//example one- promise is inside a function, and its resolved data is accessed immediately.

let allGood = true;

function fetchSomeData() {
  let data = new Promise((resolve, reject) => { //takes two arguments resolve and reject.
    if (!allGood) {
      reject("error fetching data!") //reject is called if the promise fails
    } else {
      resolve({  //resolve is called if the promise suceeds.
        id: 1,
        message: 'nice work!'
      })
    }
  })
  console.log(Promise.resolve(data));
  return data;  //returns the resolved/rejected data.
}

fetchSomeData().then(data => {
  console.log(data);
});

//example two - promise resolved data is further accessed using .then() method.

let data = new Promise((resolve, reject) => { //takes two arguments resolve and reject.
  if (!allGood) {
    reject("error fetching data!") //reject is called if the promise fails
  } else {
    resolve({  //resolve is called if the promise suceeds.
      id: 2,
      message: 'great work!'
    })
  }
})

data.then(data => {
  console.log(data);
  document.querySelector('#promise-output').innerHTML = data.id + ' ' + data.message;
})
.catch(error => {
    console.error('catch:', error); // this is called if the promise is rejected.
})

// Let's create several functions that return Promises and look at Promise chaining

// Simulate fetching some data
let fetchData = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Fetching Data Complete');
      resolve({id: 1, message: 'Nice work'});
    }, 2000);
  });
};

// Parse the data
let parseData = function(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let parsedOutput = `Parsed the data for id: ${data.id} with message: ${data.message}`;
      resolve({ parsed: parsedOutput });
      console.log(parsedOutput);
    }, 2000);
  });
};

// Chaining the Promises!
fetchData()
.then(parseData)
.catch(error => {
  console.error(error);
});
