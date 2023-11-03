import React from 'react';
import {useForm} from 'react-hook-form';


const YouTubeForm = () => {
 type FormValues = {
  username :string,
  email:string,
  channel:string
 }
  const form = useForm<FormValues>()
  const {register, handleSubmit} = form
const onSubmit = (data : FormValues)=>{
  console.log('data submitted', data)
}
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label htmlFor='username'>Username</label>
      <input type="text" id="username" {...register("username", {
        required:"Username is required"
      })} />

      <label htmlFor='email'>Email</label>
      <input type="email" id="email" {...register("email")} />

      <label htmlFor='channel'>Channel</label>
      <input type="text" id="channel" {...register("channel", {
        required: "Channel is required"
      })} required />

      <button>Submit</button>
      </form>
     
    </div>
  )
}

export default YouTubeForm
