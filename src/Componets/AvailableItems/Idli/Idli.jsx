import React from 'react'
import './idli.css'
import { IdliData } from './IdliData';
import Header from '../../Home/Navbar/Header';
import Footer from '../../Home/Footer/Footer';
import { Card } from 'react-bootstrap';
const Idli = () => {
 function IdliList(props) {
      return (
        <>
         <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center my-3">
                 <div className='idliii'>
                 <Card className=' rounded-4 shadow' style={{ width: "19rem"}}>
                     <div className=' p-2'>
                   <Card.Img className=' w-100 idli-img-s' variant="top" src={props.details.url} />
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
                     <div className='d-flex justify-content-between'>
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
     <div className="container idli-bkd mt-4">
                <h1 className=' text-light   shadow text-center p-2'>
                 Idli Delivery in Ahmedabad
     
                </h1>
                <div className="row d-flex align-items-center mt-3">
                  {IdliData.map((v, i) => {
                    return <IdliList details={v} />;
                  })}
                </div>
              </div>
              <Footer/>
    </>
  )

}

export default Idli