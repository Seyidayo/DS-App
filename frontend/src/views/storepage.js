import React from "react";
import Product from "../components/products";

import HeaderBar from "../layouts/Header";

class StorePage extends React.Component {
  render() {
    return(
      <React.Fragment>
      <HeaderBar/>
         <Product />
      </React.Fragment>
    )
  }
}

export default StorePage;
