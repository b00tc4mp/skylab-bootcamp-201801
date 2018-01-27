describe('Function has-symbol', function () {
    
    var scenario = [
                        { toTest: '%'          , mustBe : true  },
                        { toTest: 's'          , mustBe : false },
                        { toTest: 'say hello'  , mustBe : false },
                        { toTest: 'say% hello' , mustBe : true  },
                        { toTest: 'sayñçhello' , mustBe : false },
                        { toTest: 'sayÑÇhello' , mustBe : false },
                        { toTest: 'sayÑ hello' , mustBe : false },
                        { toTest: ' '          , mustBe : false }
                    ],
        badData =   [ 
                        { toTest: ''                        , mustBe: 0 },
                        { toTest: undefined                 , mustBe: 0 },
                        { toTest: null                      , mustBe: 0 },
                        { toTest: []                        , mustBe: 0 },
                        { toTest: function(){ return true;} , mustBe: 0 },
                        { toTest: function(){ return false;}, mustBe: 0 },
                        { toTest:  1                        , mustBe: 2 },
                        { toTest: {}                        , mustBe: 2 },
                        { toTest: '\n'                      , mustBe: 3 },
                        { toTest: '\t'                      , mustBe: 3 }
                    ],
        errors =    [
                     'No arguments provided.',
                     'Only provide ONE argument.',
                     'Argument provided must be a STRING primitive.',
                     'New line, carriage return or tab not allowed.'
                    ],        
        sc;
    
        

    it( 'Basic test only, expects true or false', function(){
        for( var _input in scenario ){
            sc = scenario[ _input ];
            expect( hasSymbol( sc.toTest )).toBe( sc.mustBe );
        }
    });
    
    it( 'Error test, expects error message on bad arguments', function(){
        
        for( var _input in badData ){
            sc = badData[ _input ];
            expect( function(){ throw hasSymbol( sc.toTest ); } ).toThrow( new Error( errors[ sc.mustBe ] ));
        }
    });        
});
