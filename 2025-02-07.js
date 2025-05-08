// 题目
/**
function sum(){}
var total = sum();

实现：
total[1][2][3] =6;
total[10][20][30] = 60;
total[20][30][50] = 100;
要适配所有数字，请问这个方法怎么实现
 */


// 方法一
function sum(value = 0) {
  let count = 0;
  function createProxy(value) {
    return new Proxy(
      {},
      {
        get(target, prop) {
          count++;
          if (count < 3) {
            return createProxy(value + Number(prop));
          } else {
            count = 0;
            return value + Number(prop);
          }
        },
      },
    );
  }
  return createProxy(value);
}

// 方法二
function sum1() {
  let count = 0;
  let value = 0
  return new Proxy(
    {},
    {
      get(target, prop, receiver) {
        count++;
        value += Number(prop);
        if (count < 3) {
          return receiver;
        } else {
          const res = value;
          count = 0;
          value = 0
          return res
        }
      },
    },
  );
}
// const total = sum();
// console.log(total[1][2][3]);
// console.log(total[10][20][30]);
// console.log(total[20][30][50]);






// 拓展
function createProxy(value = 0) {
  return new Proxy(
    {},
    {
      get(target, prop) {
        if (prop === Symbol.toPrimitive) {
          return () => value;
        }
        return createProxy(value + Number(prop));
      },
    },
  );
}
const total = createProxy();
const r1 = total[1][2][3] + 4  // 10
const r2 = total[10][20] + 30 // 60
const r3 = total[100][200][300] + 400 // 1000
console.log(r1)
console.log(r2)
console.log(r3)