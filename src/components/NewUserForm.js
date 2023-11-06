import { TextField, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./Form-helper";

const NewUserForm = () => {
  const form = useForm({ resolver: yupResolver(Schema) });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log("submitted", data);
  };
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div></div>
        <TextField
          label="Name"
          {...register("username")}
          error={!!errors?.name}
          helperText={errors?.name?.message}
          variant="outlined"
          sx={{ width: 250 }}
          size="small"
        />

        <TextField
          label="Email"
          {...register("email")}
          variant="outlined"
          sx={{ width: 250 }}
          size="small"
        />
        <div>
          <TextField
            label="Password"
            {...register("password")}
            variant="outlined"
            type="password"
            sx={{ width: 250 }}
            size="small"
          />

          <TextField
            label="Confirm Password"
            {...register("confirmpassword")}
            variant="outlined"
            type="password"
            sx={{ width: 250 }}
            size="small"
          />
        </div>

        <div>
          <TextField
            label="Phone Number"
            {...register("phone")}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />

          <TextField
            label="Address"
            {...register("address")}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />
        </div>
        <div>
          <Button variant="contained" color="error">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="success">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewUserForm;
