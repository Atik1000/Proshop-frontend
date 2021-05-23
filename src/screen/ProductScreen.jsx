import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, ListGroup, ListGroupItem, Card, Button } from "reactstrap";
import Review from "../components/Rating";
import Loader from '../components/Loader';
import Message from '../components/Message';
import {useSelector,useDispatch} from "react-redux"
import {listProductDetails} from '../store/actions/productAction'

const ProductScreen = ({ match }) => {
  
  const dispatch=useDispatch()
  const productDetails=useSelector(state=>state.productDetails)
  console.log(productDetails);
  const {product,loading,error}=productDetails;
 
  useEffect(()=>{
    dispatch(listProductDetails(match.params.id))
  },[dispatch,match])
 
  return (
    <div>
      <Link to="/" className="btn btn-light my-3 ">
        Go Back
      </Link>
      {loading ? <Loader/>
      :error?<Message varient='danger'>{error}</Message>:

      <Row>
        <Col md={6}>
          <img src={product.image} alt="" />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              {" "}
              <h3>{product.name}</h3>{" "}
            </ListGroupItem>
            <ListGroupItem>
              <Review value={product.rating} text={product.numReviews}   color={'yellow'} />
            </ListGroupItem>
            <ListGroupItem>price:${product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup>
                    <ListGroupItem>
                        <Row>
                            <Col>price</Col>
                            <Col><strong>{product.price}</strong></Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem>
                        <Row>
                            <Col>Status</Col>
                            <Col>{product.countInStock>0 ?"IN stock":"Out stock"}</Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Button className='btn-block' disabled={product.countInStock==0} type='button'>ADD to cart</Button>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
      </Row>
}
    </div>
  );
};

export default ProductScreen;
