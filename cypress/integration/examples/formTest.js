const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const pepperInput = () => cy.get("input[name='peppers']")
const onionsInput = () => cy.get("input[name='onions']")
const buttonInput = () => cy.get(".form-button")
const sizeInput = () => cy.get(".size")
const submitButton = () => cy.get(".submit")

it('Index html loads', function() {
    cy.visit("localhost:3000");
})

it("Can open form", () => {
    buttonInput()
    .should("not.be.disabled")
    .click()
})

it("can type in input fields", () => {
    nameInput()
    .should("have.value", "")
    .type("Harry")
    .should("have.value", "Harry");

    emailInput()
    .should("have.value", "")
    .type("argy@bargy.com")
    .should("have.value", "argy@bargy.com");

})

it("can check two topping boxes", () => {
    pepperInput()
    .should("not.be.disabled")
    .check()
    .should("be.checked")
    onionsInput()
    .should("not.be.disabled")
    .check()
    .should("be.checked")
})

it("finish submitting form", () => {
    sizeInput()
    .select('Small (6" Diameter)')

    submitButton()
    .should("not.be.disabled")
    .click()
    
})