import React from 'react';
import './novels.css'

export function TitleSearch ({term, setter},{id, title, author}) {
    return (
        <div className='title'>
                <h1 className='title-name'> Great Novels</h1>
                 <form>
	<label for="search">Search</label>
	<input type="search" value={term} pattern=".*\S.*" 
    onChange={event => setter(event.target.value)} /> 
	<span class="caret"></span>
       </form>
       <div key={id} className="novel">{`${title} by ${author}`}</div> 
       </div> 

)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default  TitleSearch