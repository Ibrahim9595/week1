// Callback hell
// setTimeout(() => {
//   console.log("Task1");
//   setTimeout(() => {
//     console.log("Task2");
//     setTimeout(() => {
//         console.log("Task3");
//     }, 1000)
//   }, 1000);
// }, 2000);

const setTimeoutPromise = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

// setTimeoutPromise(1000)
//   .then((time ) => {
//     console.log(`Done after ${time} milliseconds`)
//     return setTimeoutPromise(2000)
//   })
//   .then((time) => {
//     console.log(`Done after ${time} milliseconds`)
//     return setTimeoutPromise(1000)
//   }).then((time) => {
//     console.log(`Done after ${time} milliseconds`)
//     return 10;
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch(console.error);

const handlePromise = async () => {
  const t1 = await setTimeoutPromise(1000);
  console.log(`Done after ${t1} milliseconds`);
  const t2 = setTimeoutPromise(2000);
  console.log(`Done after ${t2} milliseconds`);
  const t3 = await setTimeoutPromise(3000);
  console.log(`Done after ${t3} milliseconds`);
  const [res1, res2] = await Promise.all([setTimeoutPromise(1000), setTimeoutPromise(5000)])
  //
};

