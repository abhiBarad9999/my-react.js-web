import React from 'react'
import './Sweet.css'
import { SweetData } from './SweetData';
import { Card } from 'react-bootstrap';
import Header from '../../Home/Navbar/Header';
import Footer from '../../Home/Footer/Footer';
const Sweet = () => {
    function SweetList(props) {
    return (
      <>
       <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center my-3">
               <div className='sweetu'>
               <Card className=' rounded-4 shadow' style={{ width: "19rem"}}>
                   <div className=' p-2'>
                 <Card.Img className=' w-100 swet-img-s' variant="top" src={props.details.url} />
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
     <div className="container sweett-bkd mt-4">
                <h1 className=' shadow text-center p-2'>
                 Sweet's Delivery in Ahmedabad
     
                </h1>
                <div className="row d-flex align-items-center mt-3">
                  {SweetData.map((v, i) => {
                    return <SweetList details={v} />;
                  })}
                </div>
              </div>
              <Footer/>
    </>
  )
}

export default Sweet