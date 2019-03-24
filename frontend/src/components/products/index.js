import React from "react";
import { product } from "../../services/backend";
import { ProductList } from "../../helpers";

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      product: []
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    try {
      await product().then(res => {
        this.setState({ product: res.data });
      });
    } catch (error) {
      throw error;
    }
  }

  render() {
    const { product } = this.state;
    return <ProductList data={product} />;
  }
}

export default Product;
