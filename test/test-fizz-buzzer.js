const expect = require('chai').expect

const fizzBuzzer = require('../fizzBuzzer.js')

describe('fizzBuzzer', function () {

    it('should return fizz if number is divisible by 3. Should return buzz if number is divisible by 5. Should return fizz-buzz if number is divisible by both 3 and 5' , function() {
        const normalCasesFizz = { testArray: [3,12,27] , expected : 'fizz'}
        const normalCasesBuzz = {testArray: [5,100,25], expected : 'buzz'}
        const normalCasesFizzBuzz = {testArray: [15,30,60], expected : 'fizz-buzz'}

        normalCasesFizz.testArray.forEach(function(input) {
            const answer = fizzBuzzer(input)
            expect(answer).to.equal(normalCasesFizz.expected)
        })

        normalCasesBuzz.testArray.forEach(function(input) {
            const answer = fizzBuzzer(input)
            expect(answer).to.equal(normalCasesBuzz.expected)
        })

        normalCasesFizzBuzz.testArray.forEach(function(input) {
            const answer = fizzBuzzer(input)
            expect(answer).to.equal(normalCasesFizzBuzz.expected)
        })
            
        });

        it('Should raise error if num is not a number', function() {
            const edgeCases = ['4',[],{}]
            
           /* edgeCases.forEach(function(input){
                const answer = fizzBuzzer(input)
                expect(answer).to.throw(Error)
        }) */

        edgeCases.forEach(function(input) {
            expect(function() {
              fizzBuzzer(input);
            }).to.throw(Error);
          });
            
        });

    })
    