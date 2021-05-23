import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import Product from "../components/Product";
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../store/actions/productAction";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const { error, loading, products } = useSelector(
    (state) => state.productList
  );
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  console.log(products, "===p");
  return (
    <div>
      {loading ? <Loader/>
      :error?<Message varient='danger'>{error}</Message>:
     
      <Row>
        { products.map(pd=>(
          <Col key={pd._id} sm={12} md={6} lg={4}>
            <Product product={pd}/>
          </Col>
        ))}
        </Row>
         }
    </div>
  );
};

export default HomeScreen;
