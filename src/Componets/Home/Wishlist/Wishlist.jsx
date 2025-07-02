import React from "react";
import "./Wishlist.css";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
const Wishlist = () => {
  return (
    <>
    <Header/>
      <div className="container my-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="#!">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#!">Shop</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Wishlist
            </li>
          </ol>
        </nav>
      </div>

      {/* <!-- Wishlist Table --> */}
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-3">My Wishlist</h1>
            <p>There are 5 products in this wishlist.</p>

            <div className="table-responsive">
              <table className="table text-nowrap table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkAll"
                      />
                    </th>
                    <th className=" text-center">Image</th>
                    <th className="text-center">Product</th>
                    <th className="text-center">Amount</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Actions</th>
                    <th className="text-center">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- Product 1 --> */}
                  <tr>
                    <td className="text-center">
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td className="text-center">
                      <img
                        className=" icon-shape"
                        src="https://mcdloamenu.uk/wp-content/uploads/2024/11/Crispy-Veggie-Burger1.webp"
                        alt=""
                      />
                    </td>
                    <td className="text-center">
                      <h6 className="mb-0">
                        <a href="#" className="text-decoration-none text-dark">
                          Burger
                        </a>
                      </h6>
                    </td>
                    <td className="text-center">₹199</td>
                    <td className="text-center">
                      <span className="badge bg-success">In Stock</span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary">
                        Add to Cart
                      </button>
                    </td>
                    <td className="text-center">
                      <a href="#" className="text-danger" title="Remove">
                        <i className="fa-solid fa-trash"></i>
                      </a>
                    </td>
                  </tr>

                  {/* <!-- Product 2 --> */}
                  <tr>
                    <td className="text-center">
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td className="text-center">
                      <img
                        className=" icon-shape"
                        src="https://b.zmtcdn.com/data/pictures/4/21094124/9a9dd442dd38a7dbf02d365c76df183d_o2_featured_v2.jpg"
                        alt=""
                      />
                    </td>
                    <td className="text-center">
                      <h6 className="mb-0">
                        <a href="#" className="text-decoration-none text-dark">
                          Cake
                        </a>
                      </h6>
                      <small>1 cake</small>
                    </td>
                    <td className="text-center">₹199</td>
                    <td className="text-center">
                      <span className="badge bg-danger">Out of Stock</span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-dark">Contact us</button>
                    </td>
                    <td className="text-center">
                <a href="#" className="text-danger" title="Remove">
                  <i className="fa-solid fa-trash"></i>
                </a>
              </td>
                  </tr>

                  {/* <!-- Product 3 --> */}
                  <tr>
                    <td className="text-center">
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td className="text-center">
                      <img
                        className=" icon-shape"
                        src="https://b.zmtcdn.com/data/pictures/6/18462696/378ab4fec8d57ec65fa3427d0eb39288_o2_featured_v2.jpg"
                        alt=""
                      />
                    </td>
                    <td className="text-center">
                      <h6 className="mb-0">
                        <a href="#" className="text-decoration-none text-dark">
                          Dosa
                        </a>
                      </h6>
                      <small>1 plate</small>
                    </td>
                    <td className="text-center">₹399</td>
                    <td className="text-center">
                      <span className="badge bg-success">In Stock</span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary">
                        Add to Cart
                      </button>
                    </td>
                    <td className="text-center">
                <a href="#" className="text-danger" title="Remove">
                  <i className="fa-solid fa-trash"></i>
                </a>
              </td>
                  </tr>

                  {/* <!-- Product 4 --> */}
                  <tr>
                    <td className="text-center">
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td className="text-center">
                      <img
                        className=" icon-shape"
                        src="https://www.dominos.co.in//files/items/IndianTandooriPaneer.jpg"
                        alt=""
                      />
                    </td>
                    <td className="text-center">
                      <h6 className="mb-0">
                        <a href="#" className="text-decoration-none text-dark">
                          Indi Tandoori Paneer
                        </a>
                      </h6>
                      <small>1 Pizaa</small>
                    </td>
                    <td className="text-center">₹349</td>
                    <td className="text-center">
                      <span className="badge bg-success">In Stock</span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary">
                        Add to Cart
                      </button>
                    </td>
                    <td className="text-center">
                <a href="#" className="text-danger" title="Remove">
                  <i className="fa-solid fa-trash"></i>
                </a>
              </td>
                  </tr>

                  {/* <!-- Product 5 --> */}
                  <tr>
                    <td className="text-center">
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td className="text-center">
                      <img
                        className=" icon-shape"
                        src="https://b.zmtcdn.com/data/dish_photos/38a/bcad3346e4d3fb070c11597149e9b38a.jpg"
                        alt=""
                      />
                    </td>
                    <td className="text-center">
                      <h6 className="mb-0">
                        <a href="#" className="text-decoration-none text-dark">
                          Thali
                        </a>
                      </h6>
                      <small>1 dish</small>
                    </td>
                    <td className="text-center">₹299</td>
                    <td className="text-center">
                      <span className="badge bg-success">In Stock</span>
                    </td>
                    <td className="text-center">
                      <button className="btn btn-sm btn-primary">
                        Add to Cart
                      </button>
                    </td>
                    <td className="text-center">
                <a href="#" className="text-danger" title="Remove">
                  <i className="fa-solid fa-trash"></i>
                </a>
              </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Wishlist;

