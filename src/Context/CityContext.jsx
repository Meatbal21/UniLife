import {useEffect, createContext, useState} from 'react'
import axios from 'axios'
export const CityContext = createContext()





export default function CityContextProvider(props) {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const [allCities, setAllCities] = useState([])

    const [selectedCity, setSelectedCity] = useState ([1])


    useEffect(
        ()=>{
            axios.get(`${baseUrl}/cities?limit=20`)
            .then(res=>{
                console.log(res.data.response)
                setAllCities(res.data.response)
                
            }

            )
            .catch(err=>console.log(err))
        },[]
    )

    const searchCity = (name) =>{
      const filterCity = allCities.filter(item=>item.name==name)
      setAllCities(filterCity)
    }
  

    const handleSelectChange = (e) =>{

      console.log('change', e.target.value)
      //store in state
      setSelectedCity(e.target.value)
    }

    useEffect(
      ()=>{
        console.log('get episode', selectedCity)
        //call function to get data
        searchCity()
    
      }, [selectedCity] //runs when select option change
    
    )

  return (
    <CityContext.Provider value={{allCities, setAllCities, handleSelectChange, searchCity}} >
    {props.children}
    </CityContext.Provider>
  )
}
