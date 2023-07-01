import { useState, createContext, useEffect } from "react";
//create the context
export const ShortListContext = createContext()

export default function ShortListContextProvider(props){
    //create state to hold favorite property
    const [shortlist, setShortList ] = useState([])
    

    useEffect(
        ()=>{
            console.log('context load')
            //check localstorage to initialize state
            const storedShortlist = localStorage.getItem('Short List')
            console.log('value is ', storedShortlist)
            if(storedShortlist){
                //only set if there is something in localStorage
                setFavorites(JSON.parse(storedShortlist))
            }


        },[] //run once when page loads
    )

    useEffect(
        ()=>{
            console.log('shortlist is ', shortlist)
            //save new favorites when any changes to local
            localStorage.setItem('ShortList', JSON.stringify(shortlist))

        },[shortlist] //run when list change
    )


    //function to add prop to favorites
    const addProp = (propToAdd) =>{
        console.log('adding', propToAdd)
        //add prop to state
        let newShortlist =[...shortlist, propToAdd]
        console.log(newShortlist)
        //store in state
        setShortList(newShortlist)

    }

    //function to remove prop
    const removeProp = (propId)=>{
        console.log('removeId', propId)
        //remove propfrom state
        let newShortlist = shortlist.filter(item=> item._id !== propId)
        //set to store
        setShortList(newShortlist)

    }

    return(
        <ShortListContext.Provider value={{shortlist, addProp, removeProp}} >
            {props.children}
        </ShortListContext.Provider>
    )
}