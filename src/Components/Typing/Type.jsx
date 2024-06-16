import './Type.css';
 
import React from 'react';

import Typed from 'typed.js';

function Type(){
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [' Coder', ' Developer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
    return (
      
      <div className="App">
        a <span ref={el} className='App'/>
    </div>
      
    );
    
}
export default Type;
