import React,  {useState} from 'react';
import './novels.css'

export function authorsNovel ({id, title, author}) {
<div key={id} className="novel">{`${title} by ${author}`}</div>
}
export function Collection (properties) {
    return (
        <div className='title'>
                <h1 className='title-name'>
                Great Novels
                 </h1>
                 <form>
	<label for="search">Search</label>
	<input id="search" type="search" pattern=".*\S.*" required
    onChange={(event) => properties.setSearchTerm(event.target.value)}>
        </input>
	<span class="caret"></span>
       </form>
       </div>
       
            
            
    
      
     

    )
}
export default Collection