import React from "react";
import PropTypes from "prop-types";

function Inventory(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenInventoryClicked(props.id)}>
        <h3>{props.name} | {props.brand}</h3>
        <p>{props.description}</p>
        <p>Price per scoop: <sup>$</sup>{props.scoopPrice}</p>
        <p>Scoops remaining: {props.scoopsRemaining}</p>
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
  scoopsRemaining: PropTypes.number,
  id: PropTypes.string,
  whenInventoryClicked: PropTypes.func
};

export default Inventory;
