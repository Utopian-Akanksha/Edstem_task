import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import {
    FormControl,
    FormLabel,
    Select,Input,HStack,Radio,RadioGroup,Button
  } from '@chakra-ui/react'

  const initData={
    id:Math.random(),
    name:"",
    education:"",
    skills:"",
    gender:"",
    number:"",
    email:""
}


const Home = () => {
    const [file,setFile] = useState() 
    const [list,setList] = useState([])
    const [data,setData] = useState(initData)
 

    function handleChange(e) {
        const { value, name, type, checked } = e.target;
    
        const updatedValue = type === "checkbox" ? checked : value;
    
        setData({ ...data, [name]: updatedValue });
        // console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
      }


      const handleSubmit=(e)=> {
        e.preventDefault();
    
        console.log(data);

        const checkEmptyInput = !Object.values(data).every(res=>res==="")
        if(checkEmptyInput)
        {
         const newData = (input)=>([...input, data])
         fetch("https://my-test-api-z4lk.onrender.com/emp",{
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
        })
        .then(res=>{
            setList(res);
        })
         setData(initData)
        }

      }


  return (
    <FormControl as='fieldset'>
      <FormLabel>Name</FormLabel>
      <Input name="name" placeholder="Enter name" value={data.name} type="text" onChange={handleChange} />
      <FormLabel>Select Education Level</FormLabel>
   <Select name="education" placeholder='Education Level' value={data.gender} onChange={handleChange} >
    <option>Graduate</option>
    <option>Post Graduate</option>
   </Select>
   <FormLabel>Skills</FormLabel>
   <Input name="skills" type="text" value={data.skills} onChange={handleChange} />
  <FormLabel>Select Gender</FormLabel>
  <RadioGroup name="gender"  defaultValue='Itachi' value={data.gender} onChange={handleChange} >
    <HStack spacing='24px'>
      <Radio value='male'>Male</Radio>
      <Radio value='female'>Female</Radio>
    </HStack>
  </RadioGroup>
  <FormLabel >Phone Number</FormLabel>
  <Input name="number" placeholder='Enter your phone number' type="number" value={data.number} onChange={handleChange} />
  <FormLabel>Email</FormLabel>
  <Input name="email" placeholder="Enter Email" type="email" value={data.email} onChange={handleChange} />  
  <Button onClick={handleSubmit}>Submit</Button>

</FormControl>
  )
}

export default Home