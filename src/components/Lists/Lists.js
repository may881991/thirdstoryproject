import React from 'react';
import { ListGroup } from "react-bootstrap";
import { BsTrash, BsPlus, BsD, BsDash } from "react-icons/bs";
import "./Lists.css";

function ListsView(props){
  
  console.log(props)
  function removeBook(){
    console.log(props)
  }

  return (
      <ListGroup.Item>
        <span className='addNum'>{props.num + 1}</span>
        <label className='addTitle'>{props.title} </label>
        <label className='price'>
          <span>{props.price}</span>
          <span><BsPlus /> {props.count} <BsDash /> </span>
        </label>
        <BsTrash onClick={removeBook}/>
      </ListGroup.Item>
  );
}

export default ListsView;