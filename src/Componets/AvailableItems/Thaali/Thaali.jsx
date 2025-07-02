import React from 'react'
import './Thaali.css'
import { ThaaliData } from "./ThaaliData";
import { Card } from "react-bootstrap";
import Header from '../../Home/Navbar/Header';
import Footer from '../../Home/Footer/Footer';


const Thaali = () => {
    function ThaaliofList(props) {
  // console.log(props.details.title);
  return (
    <>
      <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center my-3">
        <div className='thaali'>
        <Card className=' rounded-4 shadow' style={{ width: "19rem"}}>
            <div className=' p-2'>
          <Card.Img className=' w-100 thali-img-s' variant="top" src={props.details.url} />
          </div>
          <Card.Body>
            <Card.Title> {props.details.title}</Card.Title>
            <div className=' d-flex justify-content-between'>
            <Card.Text className='main-adjust-fs'>
              {props.details.body}
            </Card.Text>
            <div>
            <p>{props.details.price}</p>

            </div>
            </div>
            <div className=' d-flex justify-content-between'>
                {props.details.DeliveryTime}
                                         <button className="btn bg-success text-light" type="button">Add</button>

            </div>
          </Card.Body>
        </Card>
        </div>
      </div>
    </>
  );
}
  return (
    <>
    <Header/>
     <div className="container mt-4 thaali-bkd">
            <h1 className=' shadow text-center p-2'>
             Thaali Delivery in Ahmedabad
 
            </h1>
            <div className="row d-flex align-items-center mt-3">
              {ThaaliData.map((v, i) => {
                return <ThaaliofList details={v} />;
              })}
            </div>
          </div>
          <Footer/>
    </>
  )
}


export default Thaali