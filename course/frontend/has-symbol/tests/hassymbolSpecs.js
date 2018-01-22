 describe('has symbol test', function () {
    
    it('The input type expected is STRING otherwise returns "ERROR: OUT of SPECS"', function(){
    
    var scenario = [
                        { toTest: '%' , mustBe : true  },
                        { toTest: 's' , mustBe : false },
                        { toTest:  1  , mustBe : 'ERROR: OUT of SPECS'  },
                        { toTest: ''   , mustBe : 'ERROR: OUT of SPECS' },
                        { toTest: '\n' , mustBe : 'ERROR: OUT of SPECS' },
                        { toTest: '\t' , mustBe : 'ERROR: OUT of SPECS' },
                        { toTest: []   , mustBe : 'ERROR: OUT of SPECS' },
                        { toTest: {}   , mustBe : 'ERROR: OUT of SPECS' },
                        { toTest: undefined , mustBe : 'ERROR: OUT of SPECS' },
                        { toTest: null , mustBe : 'ERROR: OUT of SPECS' },
                        { toTest: function(){ return true } , mustBe : 'ERROR: OUT of SPECS' },
                        { toTest: function(){ return false } , mustBe : 'ERROR: OUT of SPECS' }
                    ];
        
        for(var _input in scenario){
            sc = scenario[_input];
            expect(hasSymbol( sc.toTest )).toBe( sc.mustBe );
        }
            // This is out of object because empty pair key.name and key.value is not accepted
            //                               encapsulated key.value not allowed in object.  
            expect(hasSymbol( )).toBe('ERROR: OUT of SPECS');
            expect(hasSymbol( (function(){return true})() )).toBe('ERROR: OUT of SPECS');
      
    });

    it('The input length expected is 1 otherwise returns "ERROR: OUT of SPECS', function(){
        expect(hasSymbol('$'  )).toBe(true);
        expect(hasSymbol('$$'  )).toBe('ERROR: OUT of SPECS');
        expect(hasSymbol('$$$'  )).toBe('ERROR: OUT of SPECS');
    });
});