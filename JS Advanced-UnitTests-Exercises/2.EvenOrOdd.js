function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
const expect = require('chai').expect;

describe('IsOddOrEven',function () {
    //if the parameter is not string(number)
    it('test with number parameter, should return undefined',function () {
        let expected = isOddOrEven(100);
        expect(expected).to.equal(undefined,'function did not return he correct result');
    });
    it('test with object parameter,should return undefined',function () {
        let expected=isOddOrEven({name:'Ivo'});
        expect(expected).to.equal(undefined,'function did not return the correct result');
    });
    it('String parameter with even length,should return even', function () {
        let expected=isOddOrEven('JS4Ever!');
        expect(expected).to.equal('even', 'function return correct result with even string length');
    });
    it('String parameter with odd length, should return odd',function () {
        let expected=isOddOrEven('JS4Ever');
        expect(expected).to.equal('odd','function return correct result with odd string length');
    });
});