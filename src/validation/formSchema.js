import * as Yup from "yup";

export default Yup.object().shape({
    name: Yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),
    email: Yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
    size: Yup
    .string()
    .required("Size is required"),
    peppers: Yup.boolean(),
    onions: Yup.boolean(),
    olives: Yup.boolean(),
    pepperoni: Yup.boolean(),
    specialInstructions: Yup.string()
})