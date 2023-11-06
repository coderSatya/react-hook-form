import { TextField, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./Form-helper";

const UserForm = () => {
  type FormValues = {
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
    phone: string;
    address: string;
  };

  const form = useForm<FormValues>({
    resolver: yupResolver(Schema),
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitted } = formState;
  const onSubmit = (data: FormValues) => {
    console.log("submitted", data);
  };
//   useEffect(()=>{
// if(isSubmitted){
//   reset()
// }
//   },[isSubmitted])
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div></div>
        <TextField
          label="Name"
          {...register("username")}
          error={!!errors?.username}
          helperText={errors?.username?.message}
          variant="outlined"
          sx={{ width: 250 }}
          size="small"
        />

        <TextField
          label="Email"
          {...register("email")}
          error={!!errors?.email}
          helperText={errors?.email?.message}
          variant="outlined"
          sx={{ width: 250 }}
          size="small"
        />
        <div>
          <TextField
            label="Password"
            {...register("password")}
            error={!!errors?.password}
            helperText={errors?.password?.message}
            variant="outlined"
            type="password"
            sx={{ width: 250 }}
            size="small"
          />

          <TextField
            label="Confirm Password"
            {...register("confirmpassword")}
            error={!!errors?.confirmpassword}
            helperText={errors?.confirmpassword?.message}
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
            error={!!errors?.phone}
            helperText={errors?.phone?.message}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />

          <TextField
            label="Address"
            {...register("address")}
            error={!!errors?.address}
            helperText={errors?.address?.message}
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

export default UserForm;
