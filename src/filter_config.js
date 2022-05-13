import { useState } from "react";

export function useLocalStorage(key, initialValue){
  
  const [filt,setFilt] = useState(()=>{

    try{
      const it = window.localStorage.getItem(key)
      return it ? JSON.parse(it) : initialValue
    }
    
    catch(error){
      return initialValue
    }
  })

  const setValue= value => {

    try{
      setFilt(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    }
    catch(error){
      console.error(error)
    }
  }

  return [filt, setValue]
}
