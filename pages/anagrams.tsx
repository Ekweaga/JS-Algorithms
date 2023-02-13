import React from 'react';

function Anagrams(){

    const anagrams = (a:string,b:string)=>{
        if(a.length !== b.length){
                console.log("Invalid input")
        }
       else{
        let firstString = a.split('').sort().join('');
        let secondString = b.split('').sort().join('')

        if(firstString === secondString){
            console.log("Strings are anagrams")
        }
       }
    }
    return(
        <>
        </>
    )
}