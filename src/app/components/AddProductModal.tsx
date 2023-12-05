"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  makeStyles,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import { useFormik } from "formik";
import { productSchema } from "@/Schemas";
import TextFields from "@/app/components/TextField";

interface Product {
  name: string;
  quantity: string;
  price: string;
}

interface Props {
  // Add any props if needed
}

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "auto",
    width: "100%",
    maxWidth: "80%",
    padding: "4rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const initialValues = {
  name: "",
  packing: "",
  units: "",
  pPrice: "",
  sPrice: "",
  discount: "",
  // supplierId: "",
  // compnanyId: "",
};

const AddProductModal: React.FC<Props> = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<Product>({
    name: "",
    quantity: "",
    price: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: productSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add new Product
      </Button>
      <Modal
        className="flex justify-center align-middle w-full"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Add a Product
            </Typography>

            <form className={classes.form} onSubmit={handleSubmit}>
              <TextFields
                label="Name"
                name="name"
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched.name}
                errors={errors.name}
              />
              <TextFields
                label="Packing"
                name="packing"
                value={values.packing}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched.packing}
                errors={errors.packing}
              />
              <TextFields
                label="Units"
                name="units"
                value={values.units}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched.units}
                errors={errors.units}
              />
              <TextFields
                label="Sale Price"
                name="sPrice"
                value={values.sPrice}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched.sPrice}
                errors={errors.sPrice}
              />
              <TextFields
                label="Purchase Price"
                name="pPrice"
                value={values.pPrice}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched.pPrice}
                errors={errors.pPrice}
              />
              <TextFields
                label="Discount"
                name="discount"
                value={values.discount}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched.discount}
                errors={errors.discount}
              />
              <Button type="submit" variant="contained" color="primary">
                Add Product
              </Button>
            </form>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddProductModal;
