import fetchApiData from '../actions/Novels';

export async function fetchData() {
    const data = await fetchApiData()

    return data
}

export const filtered = (novelsData, searchTerm) => novelsData.filter(novels => {
    return novels.title.toLowerCase().includes(searchTerm.toLowerCase)
})
//novlesData
//searchTerm