import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditInventoryForm(props) {
  const { inventory } = props;

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();

    //Logic to pass in previous values if values were not updated in edit form. Could be DRY'd up
    //Is this the best place to put thi logic?
    let name = "";
    if (event.target.name.value === "") {
      name = inventory.name;
    }
    else { name = "name: event.target.name.value.charAt(0).toUpperCase() + event.target.name.value.slice(1)" }

    let brand = "";
    if (event.target.brand.value === "") {
      brand = inventory.brand;
    }
    else { brand = "brand: event.target.brand.value.charAt(0).toUpperCase() + event.target.brand.value.slice(1)" }

    let description = "";
    if (event.target.description.value === "") {
      description = inventory.description;
    }
    else { description = "description: event.target.description.value.charAt(0).toUpperCase() + event.target.description.value.slice(1)" }

    props.onEditInventory({
      name,
      brand,
      description,
      wholesaleCost: parseFloat(event.target.wholesaleCost.value),
      scoopPrice: inventory.scoopPrice,
      scoopsRemaining: inventory.scoopsRemaining,
      id: inventory.id
    });
// Original way of editing an inventory item
    // props.onEditInventory({
    //   name: event.target.name.value.charAt(0).toUpperCase() + event.target.name.value.slice(1),
    //   brand: event.target.brand.value.charAt(0).toUpperCase() + event.target.brand.value.slice(1), 
    //   description: event.target.description.value.charAt(0).toUpperCase() + event.target.description.value.slice(1),
    //   wholesaleCost: parseFloat(event.target.wholesaleCost.value),
    //   scoopPrice: inventory.scoopPrice,
    //   scoopsRemaining: inventory.scoopsRemaining,
    //   id: inventory.id
    // });
  }

  return (
    <React.Fragment>
      <h3>{inventory.name} | {inventory.brand}</h3>
      <h4><i>{inventory.description}</i></h4>
      <h4>Wholesale cost: <sup>$</sup>{inventory.wholesaleCost}</h4>
      <ReusableForm
        formSubmissionHandler={handleEditInventoryFormSubmission}
        buttonText="Update Inventory" />
    </React.Fragment>
  );
}

EditInventoryForm.propTypes = {
  inventory: PropTypes.object,
  onEditInventory: PropTypes.func
};

export default EditInventoryForm;   