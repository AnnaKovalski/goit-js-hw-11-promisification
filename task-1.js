// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve("Промис выполнился успешно, с результатом(исполнен, fulfiied)");
//     }
//     reject("Промис выполнился с ошибкой (отклонен, rehected)");
//   }, 2000);
// });

// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

// Виклич функції для перевірки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
