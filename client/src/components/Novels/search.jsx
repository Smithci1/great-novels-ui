import React,  {useState} from 'react';
import './novels.css'

export function authorsNovel ({id, title, author}) {
<div key={id} className="novel">{`${title} by ${author}`}</div>
}
export function TitleSearch ({term, setter}) {
    return (
        <div className='title'>
                <h1 className='title-name'> Great Novels</h1>
                 <form>
	<label for="search">Search</label>
	<input id="search" type="search" pattern=".*\S.*" required
    onChange={(event) => setter(event.target.value)}/> 
	<span class="caret"></span>
       </form>
       </div>  

    )
}
export default TitleSearch