/* eslint-disable import/no-anonymous-default-export */
import React, {useState, useEffect } from 'react';
import './App.css';
import TitleSearch from './components/novels/search'
import {fetchData, filtered} from './utils/Novels';
import Novels from './actions/Novels';
export default () =>{
  //set state
  const [novelsData, setNovelsData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  //pull data with use effect.
  useEffect(() => {
    async function pullData() {
      const  data  = await fetchData()
      setNovelsData(data)
      setFilteredData(data)
    }
    pullData()

  }, [])
  useEffect(() => {
    const filteredNovels = filtered(novelsData, searchTerm)

    setFilteredData(filteredNovels)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchTerm])

  return (
    <div className="collection">
      <TitleSearch term={searchTerm} setter={setSearchTerm} />
      {
        filteredData.map(novel => (
          <authorsNovel 
          key={novel.id}
          id={novel.id}
          title={novel.title}
          author={`${novel.author.nameFirst} ${novel.author.nameLast}`}
          />
        ))
      }
    </div>
  );
}