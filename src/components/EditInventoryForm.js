import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditInventoryForm(props) {
  const { inventory } = props;

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();
    props.onEditInventory({ names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: inventory.id });
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