import {useEffect, createContext, useState} from 'react'
import axios from 'axios'
export const CityContext = createContext()





export default function CityContextProvider(props) {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const [allCities, setAllCities] = useState([])

    const [selectedCity, setSelectedCity] = useState ([1])


    useEffect(
        ()=>{
            axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
            .then(res=>{
                console.log(res.data.response)
                setAllCities(res.data.response)
                
            }

            )
            .catch(err=>console.log(err))
        },[]
    )



  return (
    <CityContext.Provider value={{allCities, setAllCities}} >
    {props.children}
    </CityContext.Provider>
  )
}
