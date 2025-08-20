import { Children, createContext, useContext, useEffect, useState } from "react";
import axios from "axios"

 export const DataContext = createContext(null)

 export const DataProvider = ({children})=>{
    const [data,setData]=useState([])

    const  fetchAllProduct = async()=>{
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
             const updateData = res.data.map((item)=>({
                ...item,
                id:`fs-${item.id}`,
                source:"fakestore",
               

                  
             }))
              setData(updateData);
        } catch (error) {
          console.log("Error fatcching data",error ); 
        }
    }
    useEffect(()=>{
        fetchAllProduct();
    },[]); 

    const getUniqueCategories = (data,property)=>{
        const newVal = ["All", ...new Set(data?.map((cur) => cur[property]))];
        return newVal;
    }

    const categoryList=getUniqueCategories(data,"category");
    return(
        <DataContext.Provider
            value={{
                data,
                setData,
                fetchAllProduct,
                categoryList
            }}
        >
           {children } 
         </DataContext.Provider>
         
    )
 }

 export const getData = ()=>useContext(DataContext)