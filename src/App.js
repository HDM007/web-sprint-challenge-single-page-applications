import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Switch, Route} from "react-router-dom";
import Header from "./components/Header"
import Form from "./components/Form"
import schema from "./validation/formSchema"
import styled from "styled-components"
import * as yup from "yup"

//TO DO:
// Build Axios Post request into "postPizzaOrder()"
// Set up Cypress tests for adding text to box, for adding multiple toppings, and for submission. Cypress already installed.
// Commit changes to Sprint near end, and upload to Codegrade.
// Submit.

const initialFormValues = {
  name: "",
  email: "",
  size: "",
  peppers: false,
  onions: false,
  pepperoni: false,
  olives: false,
  specialInstructions: ""
}

const initialErrorValues = {
  name: "",
  email: "",
  size: ""
};

const initialDisabled = true

const HeaderWrapper = styled.header`
text-align: center;
border: 2px solid gold;

`


const App = () => {
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ errorValues, setErrorValues ] = useState(initialErrorValues)
  const [ disabled, setDisabled ] = useState(initialDisabled)

  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setErrorValues({
        ...errorValues,
        [name]: "",
      })
    })
    .catch(err => {
      setErrorValues({
        ...errorValues,
        [name]: err.errors[0],
      })
    })

    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const postPizzaOrder = (newPizza) => {
    console.log(newPizza)
    setFormValues(initialFormValues)
    //should post newPizza to server with axios, and returns a database record.
  }

  const formSubmit = () => {
    const newPizza={
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      size: formValues.size.trim(),
      toppings: ['peppers', 'onions', 'pepperoni', 'olives'].filter((topping) => formValues[topping]
      ),
      specialInstructions: formValues.specialInstructions.trim()
    }
    postPizzaOrder(newPizza)
  }

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then(valid => setDisabled((!valid)))
  }, [formValues])


  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
        </Route>
        <Route exact path="/pizza">
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <Form values={formValues} errors={errorValues} disabled={disabled} change={inputChange} submit={formSubmit}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
