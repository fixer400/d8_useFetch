import {useState, useEffect} from 'react'
export default function useJsonFetch(url, opts){
 const [data, setData] = useState()
 const [isLoading, setLoading] = useState(true)
 const [hasError, setError] = useState()
 useEffect(() => {
  const fetchData = async () =>{
    try{
      const response = await fetch(url)
      if (!response.ok){
        throw new Error(response.statusText)
      }
      else {
       const data = await response.json()
       setData(data)
      }
      setError(null)
    }
    catch (e){
      setError('Не удалось загрузить данные')
    }finally{
      setLoading(false)
    }
    
  }
  fetchData()
  console.log(hasError)
 }, [])
 
 return [{data, isLoading, hasError}]
}