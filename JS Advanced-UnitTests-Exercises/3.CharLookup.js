function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

const expect=require('chai').expect;

//check is first parameter string, should return undefined
//check is second parameter is not integer, should return undefined
//check the index (negative number or bigger number), should return incorrect index
//if all parameters are valid: character of the specified index is the string
describe('lookupChar', function () {
    it('should return undefined with a non-string first parameter', function () {
        let expected= lookupChar(1,1);
        expect(expected).to.be.equal(undefined,'first parameter should be string only');
    });
    it('should return undefined with a non-integer second parameter', function () {
        let expected=lookupChar('1','1');
        expect(expected).to.equal(undefined,'second parameter should be integer only');
    });
    it('should return undefined with a non-integer',function () {
        let expected=lookupChar('1',1.5);
        expect(expected).to.equal(undefined,'second parameter should be integer');
    });
    it('should return "Incorrect index" with native index', function () {
        let expected = lookupChar('Hello',-6);
        expect(expected).to.be.equal('Incorrect index','the function did not return the correct index(index is negative number)');
    });
    it('should return "Incorrect index" with bigger then length index', function () {
        let expected=lookupChar('Hello',16);
        expect(expected).to.be.equal('Incorrect index','the function did not return the correct index');
    });
    it('should return correct character', function () {
        let expected = lookupChar('Hello',1);
        expect(expected).to.be.equal('e','the function return correct result');
    });
});
