import React from "react";
import "./Chefs.css";
import Card from "react-bootstrap/Card";
import chefs1 from "../../../Logo/chefs-1.jpg";
import chefs2 from "../../../Logo/chefs-2.jpg";
import chefs3 from "../../../Logo/chefs-3.jpg";

const Chefs = () => {
  return (
    <div className="container mt-5 mb-5 z-n1">
                <h1 className=" mb-5 text-center pro-head">Our Proffesional Chefs</h1>

      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex justify-content-center chef">
          <Card style={{ width: "21rem" }}>
            <div>
              <img src={chefs1} alt="" className=" w-100" />
            </div>

            <Card.Body className="card-textt table-li z-2">
              <Card.Title className=" text-center fw-bold ">Walter White</Card.Title>
                <div className="  text-center ">
                <p className="mb-2 fw-bold">Master Chef</p>
                
                  Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                  tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                  corporis et voluptate.
                </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 d-flex justify-content-center  mt-md-0 mt-lg-0 mt-4 chef">
          <Card style={{ width: "21rem" }}>
            <div>
              <img src={chefs2} alt="" className=" w-100" />
            </div>
            <Card.Body className="card-textt table-li z-2">
              <Card.Title className=" text-center">Sarah Jhonson</Card.Title>
                <div className="text-center">
                <p className=" mb-2 fw-bold  ">Patissier</p>
                <p>
                  Quo esse repellendus quia id. Est eum et accusantium pariatur
                  fugit nihil minima suscipit corporis. Voluptate sed quas
                  reiciendis animi neque sapiente.
                </p>
                </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 d-flex justify-content-center mt-lg-0 mt-4 chef">
          <Card style={{ width: "21rem" }}>
            <div>
              <img src={chefs3} alt="" className=" w-100" />
            </div>
            <Card.Body className="card-textt table-li z-2">
              <Card.Title className=" text-center">Walter White</Card.Title>
                <div className="text-center" >
                <p className=" mb-2 fw-bold  ">Master Chef</p>
                <p>
                  Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                  tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                  corporis et voluptate.
                </p>
                </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    
  );
};

export default Chefs;
