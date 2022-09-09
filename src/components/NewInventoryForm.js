import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewInventoryForm(props){
  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    props.onNewInventoryCreation({
      name: event.target.name.value.charAt(0).toUpperCase() + event.target.name.value.slice(1), 
      brand: event.target.brand.value.charAt(0).toUpperCase() + event.target.brand.value.slice(1), 
      description: event.target.description.value.charAt(0).toUpperCase() + event.target.description.value.slice(1), 
      wholesaleCost: parseFloat(event.target.wholesaleCost.value),
      scoopPrice: ((event.target.wholesaleCost.value/130)*2).toFixed(2),
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewInventoryFormSubmission}
        buttonText="Add to inventory" />
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;