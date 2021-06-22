/* eslint-disable no-lone-blocks */
/* eslint-disable import/no-anonymous-default-export */
import React, {useState, useEffect } from 'react';
import AuthorsNovel from './AuthorsNovel';
import {fetchData, filtered} from '../utils/Novels';
import './novels.css'
import Title from './Title'
 

export default () =>{

  const [novelsData, setNovelsData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  
  useEffect(() => {
    async function pullData() {
      const  novels  = await fetchData()
      setNovelsData(novels)
      setFilteredData(novels)
    }
    pullData()
  }, [])

  useEffect(() => {
    const filteredNovels = filtered(novelsData, searchTerm)
    setFilteredData(filteredNovels)
    console.log(filteredNovels)
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]) 

  return (
    <>
   <Title />
   <form>
<label for="search">Search</label>
<input type="search" value={searchTerm} pattern=".*\S.*" 
onChange={event => setSearchTerm(event.target.value)} /> 
<span class="caret"></span>
{filteredData.map(novel => (
  <AuthorsNovel
     key={novel.id}
     id={novel.id}
     title={novel.title}
     author={`📖 ${novel.author.nameFirst} ${novel.author.nameLast}`}
    />
))}
</form>

</>

)}