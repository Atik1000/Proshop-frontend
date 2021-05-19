import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, ListGroup, ListGroupItem, Card, Button } from "reactstrap";
import products from "../products";
import Review from "../components/Rating";
import axios from "axios";
const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${match.params.id}`);
      setProduct(data)
    }
    fetchProduct()
  }, []);
  // const product = products.find((p) => p._id == match.params.id);
  return (
    <div>
      <Link to="/" className="btn btn-light my-3 ">
        Go Back
      </Link>

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
              <Review value={product.rating} text={`${product.numReviews} reviews` } color={'yellow'} />
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
    </div>
  );
};

export default ProductScreen;
