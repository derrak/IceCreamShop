import React from "react";
import PropTypes from "prop-types";

function Inventory(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenInventoryClicked(props.id)}>
        <h3>{props.name} | {props.brand}</h3>
        <p>{props.description}</p>
        <br />
        <p>Price per scoop: <sup>$</sup>{props.scoopPrice}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  description: PropTypes.string,
  wholesaleCost: PropTypes.number,
  scoopPrice: PropTypes.string,
  id: PropTypes.string,
  whenInventoryClicked: PropTypes.func
};

export default Inventory;
