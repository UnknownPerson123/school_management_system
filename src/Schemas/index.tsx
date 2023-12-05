import * as Yup from "yup";

export const productSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  packing: Yup.string().min(2).max(25).required("Please enter your packing"),
  units: Yup.string().min(2).max(25).required("Please enter units"),
  pPrice: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your purchase price"),
  sPrice: Yup.string().min(2).max(25).required("Please enter your sales price"),
  discount: Yup.string().min(2).max(25).required("Please enter discount"),
});