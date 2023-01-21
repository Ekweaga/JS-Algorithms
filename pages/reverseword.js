import React,{useState} from 'react'



function Reverseword() {

const [value,setValue] = useState('')
const [returnedValue,setReturnedValue] = useState('')

    const reverseWord = (str) => {
        if(str === null || str === ""){
            console.log("Empty input")
        }
        if(isNaN(str)){
            const rev = str.split(" ");
            rev.reverse().join("")
            setReturnedValue(rev)
        }
       
    }

  return (
    <>
   <input type="text" placeholder='Enter a word' onChange={(e)=>setValue(e.target.value)}/>
   <button onClick={reverseWord(value)}>ChangeWord</button>

   <p>{returnedValue ? returnedValue : null}</p>

   </>
  )
}

export default Reverseword;

