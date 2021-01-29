import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
text-align: center;
`

export default function Form(props) {
    // Form component inherits values from state.
    const {
        values,
        submit,
        change,
        errors,
        disabled
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
        //add submit function her that will post the information to the DB and return an order id.

    }

    const onChange = event => {

        const { name, value, type, checked } = event.target
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
          
    
    }

    return (
        <FormWrapper>
        <div className="form">
            <form onSubmit={onSubmit}>
                <h1> Build a Pizza! </h1>
                <button disabled={disabled}> Submit Order </button>

                <div className="errors">
                    <div className="error">{errors.name}</div>
                    <div className="error">{errors.size}</div>
                    <div className="error">{errors.email}</div>
                </div>

                <h2> Order Details </h2>

                <label className="label"> Name
                    <input
                    type="text"
                    onChange={onChange}
                    name="name"
                    value={values.name}
                    />
                </label>

                <label className="label"> Email
                    <input
                    type="email"
                    onChange={onChange}
                    name="email"
                    value={values.email}
                    />
                </label>

                <h4> Next Up: Pick a Size! </h4>

                <label className="label"> Choose Size
                    <select onChange={onChange}
                    value={values.size}
                    name="size"
                    >
                        <option value=""> -----CHOOSE SIZE----- </option>
                        <option value="small"> Small (6" Diameter)</option>
                        <option value="medium"> Medium (11" Diameter)</option>
                        <option value="large"> Large (15" Diameter)</option>
                        <option value="extralarge"> Xtra Large (20" Diameter)</option>
                    </select>

                </label>

                <h4> Add Toppings! (optional) </h4>
                <label> Peppers
                    <input 
                    type="checkbox"
                    onChange={onChange}
                    name="peppers"
                    checked={values.peppers}
                    />
                </label>
                <label> Onions
                    <input 
                    type="checkbox"
                    onChange={onChange}
                    name="onions"
                    checked={values.onions}
                    />
                </label>
                <label> Pepperoni
                    <input 
                    type="checkbox"
                    onChange={onChange}
                    name="pepperoni"
                    checked={values.pepperoni}
                    />
                </label>
                <label> Olives
                    <input 
                    type="checkbox"
                    onChange={onChange}
                    name="olives"
                    checked={values.olives}
                    />
                </label>

                <h4> Special Instructions? </h4>
                <p> Write 'em below, maestro. </p>
                <label className="label"> Special Instructions
                    <input
                    type="text"
                    onChange={onChange}
                    name="specialInstructions"
                    value={values.specialInstructions}
                    />
                </label>

            </form>
        </div>
        </FormWrapper>
    )
}
