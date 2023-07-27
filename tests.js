
describe('MyFunctions', function() {
    describe('#dosomething', function() {
        function doSomething(x,y) {
            if (typeof x != 'string') {
                throw new Error('x must be a string');
            }
            return x + y;
        
        }
        it( 'should concatenate two parameters' , function() {
            var x = doSomething('hello', 5);
            expect(x).to.equal('hello5');
        });
    
        it(' should throw an error if first parameter is not a string', function(){
            expect(function(){
                doSomething(5,5);
            }).to.throw(Error);
        });
    });
});
