// const helloWorld = require('./helloWorld');

// describe('Hello World', function() {
//   test('says "Hello, World!"', function() {
//     expect(helloWorld()).toEqual('Hello, World!');
//   });
// });

const helloWorld = require('./helloWorld');

describe('Hello World', () => { 
  test('says "Hello, World!"', () => { 
    expect(helloWorld()).toEqual('Hello, World!');
   })
 })