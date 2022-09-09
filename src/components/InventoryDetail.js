import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const { inventory, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>{inventory.name} | {inventory.brand}</h3>
      <i>{inventory.description}</i>
      <p>Wholesale Cost (per tub): <sup>$</sup>{inventory.wholesaleCost.toFixed(2)}</p>
      <p>Price per scoop: <sup>$</sup>{inventory.scoopPrice}</p>
      <button onClick={props.onClickingEdit}>Update Item</button>
      <button onClick={() => onClickingDelete(inventory.id)}>Delete Item</button>
      <hr />
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  name: PropTypes.string,
  brand: PropTypes.string,
  description: PropTypes.string,
  wholesaleCost: PropTypes.number,
  scoopPrice: PropTypes.string,
  id: PropTypes.string,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default InventoryDetail;