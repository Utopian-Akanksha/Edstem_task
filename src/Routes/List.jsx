import React, { useEffect, useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button
  } from '@chakra-ui/react'

const getData=()=>{
    return fetch("https://my-test-api-z4lk.onrender.com/emp").
    then(res=>res.json());
}



const List = () => {

    const [list,setList] = useState([]);

    const navigate=useNavigate();

    useEffect(()=>{
        getData()
        .then((res)=>{
            // console.log(res)
            setList(res)
        })
    },[])
  return (
    <div>
        <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Education Level</Th>
        <Th>Gender</Th>
        <Th>Skills</Th>
        <Th>Phone Number</Th>
        <Th>Email</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        list.map((item)=>(
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>{item.education}</Td>
              <Td >{item.gender}</Td>
              <Td >{item.skills}</Td>
              <Td >{item.number}</Td>
              <Td isumeric>{item.email}</Td>
              <Link to={`/detail/${item.id}`}><Button>View</Button></Link>
            </Tr>
        ))
      }
    </Tbody>
  </Table>
</TableContainer>
    </div>
  )
}

export default List