let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
let expect=require('chai').expect;

describe('MathEnforcerer Object',function () {
    //add five
    //two positive numbers
    //two negative numbers
    //floating point number
    //string

    it('AddFive with positive number should return the number +5',()=>{
        let expected=mathEnforcer.addFive(10);
        expect(expected).to.equal(15,'the function return result with positive number');
    });
    it('AddFive with negative number should return 5 minus number',()=>{
        let expected=mathEnforcer.addFive(-10);
        expect(expected).to.equal(-5,'the function return result with negative number');
    });
    it('AddFive with floating point number should return floating point number result',function () {
        let expected=mathEnforcer.addFive(10.5);
        expect(expected).to.be.closeTo(15.5,0.01,'the function return expected floating point result');
    });
    it('AddFive with string should return undefined',function () {
        let expected=mathEnforcer.addFive('10');
        expect(expected).to.equal(undefined,'the function return undefined');
    });
    //now we test the other function - subtractTen with same numbers
    it('SubtractTen with positive number should return the number 0',()=>{
        let expected=mathEnforcer.subtractTen(10);
        expect(expected).to.equal(0,'the function return correct result');
    });
    it('SubtractTen with negative number should return 20 minus number',()=>{
        let expected=mathEnforcer.subtractTen(-10);
        expect(expected).to.equal(-20,'the function return correct result with negative number');
    });
    it('SubtractTen with floating point number should return floating point number result',function () {
        let expected=mathEnforcer.subtractTen(10.5);
        expect(expected).to.be.closeTo(0.5,0.01,'the function return expected floating point result');
    });
    it('SubtractTen with string should return undefined',function () {
        let expected=mathEnforcer.subtractTen('10');
        expect(expected).to.equal(undefined,'the function return undefined');
    });
    // test sum
    it('Sum with two positive number should return their sum',()=>{
        let expected=mathEnforcer.sum(1,2);
        expect(expected).to.equal(3,'the function return correct result');
    });
    it('Sum with two negative number should return their sum',()=>{
        let expected=mathEnforcer.sum(-1,-2);
        expect(expected).to.equal(-3,'the function return correct result with negative number');
    });
    it('Sum  with two floating point number should return floating point number result',function () {
        let expected=mathEnforcer.sum(1.1,2.2);
        expect(expected).to.be.closeTo(3.3,0.01,'the function return expected floating point result');
    });
    it('Sum with number and a string  should return undefined',function () {
        let expected=mathEnforcer.sum(1,'2');
        expect(expected).to.equal(undefined,'the function return undefined');
    });
    it('Sum with string and a number should return undefined',function () {
        let expected=mathEnforcer.sum('1',2);
        expect(expected).to.equal(undefined,'the function return undefined');
    });
    it('Sum with two strings should return undefined',function () {
        let expected=mathEnforcer.sum('1','2');
        expect(expected).to.equal(undefined,'the function return undefined');
    });
});