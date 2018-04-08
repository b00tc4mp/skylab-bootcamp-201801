/** */
/*  Api-client 'apiCountries' fetch data from Countries using restcountries APIRest
/*
/* More Info http://restcountries.eu/
/*
/** */
let apiCountries
(() => { 
    
    /** 
    /*  Call Handler or Callback
    /* 
    /*  @param {STRING} The full endpoint of the query
    /*  @returns {Promise} A promise that resolves if API call succeeds, otherwise fails
    /* 
    /* *** */
    function call ( path ) {
        return fetch( path.substr(-3).toLowerCase() === 'svg' ? path : api.base + path )
            .then( response => {
                return( response.status === 200 ) ? response.json() : response.messageText ;
            }) 
    }
    
    const api = {
                /** 
                 /* 
                 /*  {STRING} is the base endpoint for all the queries.
                 /* 
                 /* *** */
                base : 'https://restcountries.eu/rest/v2/',
                 /** 
                 /*  Search and retrieve all Countries 
                 /* 
                 /*  @param {} the endpoint is implemented by default in the APIRest
                 /*  @returns {Promise} A promise that resolves if API call succeeds, otherwise fails
                 /* 
                 /* *** */ 
                searchAllCountries : () => call( 'all')
                                           .then( result => result ),
                /** 
                 /*  Search and retrieve Country by name 
                 /* 
                 /*  @param {NAME/STRING} the endpoint is implemented by default in the APIRest
                 /*                       Only needs the name of the country.
                 /*  @returns {Promise} A promise that resolves if API call succeeds, otherwise fails
                 /* 
                 /* *** */
                searchByName       : query => call( `name/${query}`)
                                              .then( result => result ),
                /** 
                 /*  Search and retrieve flag in SVG format 
                 /* 
                 /*  @param {STRING} the URL is passed when searhAllCountries is invoked, chain call.  
                 /*  @returns {Promise} A promise that resolves if API call succeeds, otherwise fails
                 /* 
                 /* *** */
                getFlag            : urlFlag => call( `${urlFlag}` )
                                                .then( result => result )
        }       
 // It prevents variable spofing
 apiCountries = api
})()
export default apiCountries