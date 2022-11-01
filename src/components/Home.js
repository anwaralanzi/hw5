import React,{useState} from 'react'
 import { Button, ButtonGroup,Input ,Text} from '@chakra-ui/react'

 function HomeW() {
    const [names,setNames] = useState ({fName:"",lName:""})

    const LogIn =()=>{
        if(names.fName.length=="" &&names.lName.length==""){
            alert("required")
        }else{
            alert( 'welcome' )
        }
    }

const Submit = ()=>{
    LogIn()

}

  return (
    <div>
        <Input w={40} m={3} value={names.fName} onChange={e=>{setNames({ ...names,fName:e.target.value})}}></Input><br />
        <Input w={40} m={3} value={names.lName} onChange={e=>{setNames({ ...names,lName:e.target.value})}}></Input><br />
        <Button m={3} onClick={Submit}>Sub</Button>

<Text> {names.fName}</Text>
<Text> {names.lName}</Text>
<p>{JSON.stringify(names)}</p>


    </div>
  )
}

export default HomeW