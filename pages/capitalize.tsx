import React,{useEffect} from "react"


function Capitalization(){

    const cap= (word:string)=>{
        let i:number;
        const arr = word.split(" ")
        for(i=0;i<arr.length; i++){
            arr[i].charAt(0).toUpperCase() + arr.slice(1)
        }
        const str2 = arr.join(" ")
        console.log(str2)
    }

    useEffect(()=>{
        cap("How are you doing")
    })
  
    return(
        <>
        </>
    )
}

export default Capitalization;