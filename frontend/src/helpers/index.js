import React from "react";

export const ProductList = ({ data }) => {
  return (
    <React.Fragment>
      {data.map((item, index) => (
        <div key={index}>
          <h4>
            <b>Name:</b> {item.type}
          </h4>
          <p>
            <b>Price: </b>
            {item.price}
          </p>
          <p>
            <b>Kg: </b>
            {item.size}
          </p>
        </div>
      ))}
    </React.Fragment>
  );
};
