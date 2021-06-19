import fetchApiData from '../actions/Novels';

export const filtered = (novelsData, searchTerm) => novelsData.filter(novel => (
    novel.title.toLowerCase().includes(searchTerm.toLowerCase())
  ))
  
  export const fetchData = async () => {
    const novels = await fetchApiData()
  
    return novels
  }
  
//novlesData
//searchTerm