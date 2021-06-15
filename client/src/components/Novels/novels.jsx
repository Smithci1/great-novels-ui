import React from 'react';
import './novels.css'


const Collection = () => {
    return (
        <div className='title'>
                <h1 className='title-name'>
                Great Novels
                 </h1>
                 <form>
	<label for="search">Search</label>
	<input id="search" type="search" pattern=".*\S.*" required>
        </input>
	<span class="caret"></span>
       </form>
       </div>
            
            
    
      
     

    )
}
export default Collection