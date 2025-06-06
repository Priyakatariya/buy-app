import React ,{useState}from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {useFirebase}from '../context/Firebase';
const ListingPage=()=>{
const firebase = useFirebase();
const [name,setName]=useState("");
const[isbnNumber,setIsbnNumber]=useState("");
const[price,setPrice]=useState("");
const[coverPic,setCoverPic]=useState("");

  const  handleSummit=(e)=>{
e.preventDefault();
firebase.handleCreateNewListing(name,isbn,price, cover)
  }

     return (
<div className='container mt-5'> 
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
         onChange={(e) => setName(e.target.value)} 
         value={name}
          type="text" placeholder="Book Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ISBN</Form.Label>
        <Form.Control 
        onChange={(e) => setIsbnNumber(e.target.value)} 
        value={isbnNumber} 
        type="text" 
        placeholder="ISBN  Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control 
        onChange={(e) => setPrice(e.target.value)} 
        value={isbnNumber} 
        type="text" 
        placeholder=" Enter Price" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control 
        onChange={(e) => setCoverPrice(e.target.files[0])} 
        value={Price} 
        type="file" 
       />
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
      Create
      </Button>
    </Form>


     </div>
     
     );
};
 export  default ListingPage;