/* eslint-disable import/no-anonymous-default-export */
import React, {useState, useEffect } from 'react';
import './App.css';
import Collection from './components/novels/Novels'
import axios from 'axios';

// import {fetchData, filtered} from './utils/Novels'
export default () => {
  //set state
   
  const [novelsData, setNovelsData] = useState([])
  const [fileredNovels, setFilteredData] = useState([])
  const [searchTerm, setSearchTerm] = useState([])

  //pull data with use effect.

  useEffect(() => {
    async function pullData() {
      const { data } = await axios.get('http://localhost:1337/api')
      setNovelsData(data)
      console.log(data)
    }
    pullData()

  }, [])
  return (
    <div className="collection">
      < Collection />
    </div>

      
   
  );
}


