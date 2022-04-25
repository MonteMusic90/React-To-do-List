import React, {useState} from 'react'




var datetime = ()=> 
{  
       return(
         <div>
             <input type="date" onChange={e=>setDate(e.target.value)}/>
         </div>
     );
 }

 export default datetime;