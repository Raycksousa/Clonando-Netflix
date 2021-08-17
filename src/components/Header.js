import React from 'react';
import './Header.css';

export default () => {
      return (
       <header>
         <div className="header--logo">
             <a href="/">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix"/>
             </a>
           <div className="header--user">
               <a href="/">
                  <img src="https://pm1.narvii.com/6915/1428ffeb2c16d6b58cdd6f7ac4f11b05c8a7619er1-297-297v2_hq.jpg"alt="usuario"/>
               </a>    
         </div> 
         </div> 
       </header>
       

      )


}