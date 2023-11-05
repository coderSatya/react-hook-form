import React from "react";
import { useForm } from "react-hook-form";
type Formvalues = {
    userName:string;
    userOccupation:string;
    userEmail:string

}
const SubmitForm = () => {
    
    const form = useForm<Formvalues>();
    const {register, handleSubmit} = form
    // const {name,ref, onChange, onBlur} = register('username')
    const onSubmit = (data : Formvalues)=>{
console.log(data)
    }
  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">UserName : </label>
          {/* <input type="text" id="username" name="userName" /> */}
          <input type="text" id="username" {...register("userName")} />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input type="email" id="email" {...register("userEmail")} />
        </div>
        <div>
          <label htmlFor="occupation">Occupation : </label>
          <input type="text" id="occupation" {...register("userOccupation")} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SubmitForm;
