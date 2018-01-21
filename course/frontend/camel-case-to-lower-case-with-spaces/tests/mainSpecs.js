 describe('camel case and numbers to lower case with spaces', function () {
            
    
    it('The input type expected is STRING otherwise returns "ERROR: OUT of SPECS"', function(){
    
        expect(camelCase( 'testOk'     )).toBe('test ok');
        
        expect(camelCase('testOk%orNOT')).toBe('ERROR: OUT of SPECS');
        expect(camelCase( 111111111111 )).toBe('ERROR: OUT of SPECS');
        expect(camelCase(              )).toBe('ERROR: OUT of SPECS');
        expect(camelCase( ' '          )).toBe('ERROR: OUT of SPECS');
        expect(camelCase( '\n'         )).toBe('ERROR: OUT of SPECS');
        expect(camelCase( '\t'         )).toBe('ERROR: OUT of SPECS');
        expect(camelCase( []           )).toBe('ERROR: OUT of SPECS');
        expect(camelCase( {}           )).toBe('ERROR: OUT of SPECS');
        expect(camelCase( undefined    )).toBe('ERROR: OUT of SPECS');
        expect(camelCase( null         )).toBe('ERROR: OUT of SPECS');
        expect(camelCase( function(){ return false } )).toBe('ERROR: OUT of SPECS');
    });

    it('Separate uppercase elements', function(){
    
        expect(camelCase( 'testOk'            )).toBe('test ok');
        expect(camelCase( 'testOkExtended'    )).toBe('test ok extended');
        expect(camelCase( 'test1Ok'           )).toBe('test 1 ok');
        expect(camelCase( 'test11Ok'          )).toBe('test 11 ok');
        expect(camelCase( 'test11stOk'        )).toBe('test 11st ok');
        expect(camelCase( 'test1stOkExtended' )).toBe('test 1st ok extended');
        
    });
});