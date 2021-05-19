import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
// import products from "../products";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/products/");
      setProducts(data)
    }
    fetchProduct()
  }, []);
  return (
    <div>
      <Row>
        {products.map((pd) => (
          <Col key={pd._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={pd} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
