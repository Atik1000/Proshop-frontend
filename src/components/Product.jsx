import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product._id}`}>
        <CardImg top width="100%" src={product.image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardText>
              <Rating value={product.rating} text={product.numReviews} color={'yellow'}/>
          </CardText>
          <CardText>
            <strong> {product.price}</strong>
          </CardText>
        </CardBody>
      </Link>
    </Card>
  );
};

export default Product;
