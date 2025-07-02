import { CakeData } from "./CakeData";
import React from "react";
import { Card } from "react-bootstrap";
import './Cake.css'

import Header from '../../Home/Navbar/Header';
import Footer from '../../Home/Footer/Footer';

const Cake = () => {
  function CakeList(props) {
    return (
      <>
       <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center my-3">
               <div className='cakke'>
               <Card className=' rounded-4 shadow' style={{ width: "19rem"}}>
                   <div className=' p-2'>
                 <Card.Img className=' w-100 card-img' variant="top" src={props.details.url} />
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
                   <div className='  d-flex justify-content-between'>
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
     <div className="container cak-bkd mt-4">
                <h1 className=' shadow text-center p-2'>
                 Cake Delivery in Ahmedabad
     
                </h1>
                <div className="row mt-3 d-flex align-items-center">
                  {CakeData.map((v, i) => {
                    return <CakeList key={v} details={v} />;
                  })}
                </div>
              </div>
              <Footer/>
    </>
  )
};

export default Cake;
