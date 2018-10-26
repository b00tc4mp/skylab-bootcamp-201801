import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';

const PreloaderComponent = () => { 
    
   return ( <CircularProgress size={73} thickness={5} style={{ position: 'absolute' , top: '40%', marginLeft: '45%'}} />  ) 
       

}
export default PreloaderComponent
