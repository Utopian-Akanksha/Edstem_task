import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const [data,setData] = useState([])
    const params = useParams();

    useEffect(() => {
        fetch(`https://my-test-api-z4lk.onrender.com/emp/${params.id}`)
          .then((res) => res.json())
          .then((res) => {
            setData(res);
          });
      }, [params.id]);
  return (
    <div>
                <div>Name:{data.name}</div>
                <div>Education:{data.education}</div>
                <div>Skilss:{data.skills}</div>
                <div>Gender:{data.gender}</div>
                <div>Phone Number:{data.number}</div>
                <div>Email:{data.email}</div>
            </div>
  )
}

export default Details