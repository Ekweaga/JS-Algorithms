import React,{useEffect} from 'react'


export default function Chunk(){

    const chunk = (arr:Array<any>,size:number)=>{
        let chunkedArr = [];
        let count = 0
        var i;

     /*   while(count < arr.length){
        chunkedarr.push(arr.slice(count,count + size));
        count += size
       }*/

       for(i=0; i<arr.length; i++){
        chunkedArr.push(arr.slice(i,size))
       }
       console.log(chunkedArr)

    }


    chunk([1,2,3,4,5,6,7,8,9],3)



    
    return(
        <>
       
        </>
    )
}