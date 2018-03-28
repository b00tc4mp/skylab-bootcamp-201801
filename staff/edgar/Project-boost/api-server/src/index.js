/** */
/*
/*   BASIC API REST WITHOUT UPDATE METHOD FOR 3Weeks Project demo
/*
/***** */
'use strict'

const app = require('./app');

const config = require('./config');

const mongoose = require('mongoose');

let server

mongoose.connect(config.db )
        .then( response => { 
            
           console.log( ' DB connection status OK') ;
           
           server = app.listen( config.port , () => console.log(`API REST 3Weeks project UP and running ${config.port}`));  
          
      
}).catch( error => {
    
            console.log(`ERROR: unable to connect with MONGO`)

})
process.on('SIGINT', ()=> { console.log('SIGNAL Kill fired, server closed ') ; server.close(()=> process.exit() ) })
