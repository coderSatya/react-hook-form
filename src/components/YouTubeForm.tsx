import React from "react";
import { useForm } from "react-hook-form";
import { useFieldArray } from "react-hook-form";

const YouTubeForm = () => {
  type FormValues = {
    username: string;
    email: string;
    channel: string;
    social: {
      userTwitter: string;
      userFacebook: string;
    };
    phonenumbers: string[];
    phNumbers: {
      number: string; //array of object (because useFieldArray only works on  object value)
    }[];
  };
  const form = useForm<FormValues>({
    defaultValues: {
      username: "BatMan",
      email: "",
      channel: "",
      social: {
        userTwitter: "",
        userFacebook: "",
      },
      phonenumbers: ["", ""],
      phNumbers: [
        {
          number: "",
        },
      ],
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log("data submitted", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />
        <p className="error">{errors.username?.message}</p>

        <label htmlFor="usertwitter">UserTwitter</label>
        <input
          type="text"
          id="usertwitter"
          {...register("social.userTwitter")}
        />

        <label htmlFor="userFacebook">UserFacebook</label>
        <input
          type="text"
          id="userFacebook"
          {...register("social.userFacebook")}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9.!]/,
              message: "Invalid email format",
            },
          })}
        />
        <p className="error">{errors.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          {...register("channel", {
            required: {
              value: true,
              message: "Invalid channel",
            },
          })}
        />
        <p className="error">{errors.channel?.message}</p>

        <label htmlFor="primary-phone">Phone Numbers</label>
        <input type="text" id="primary-phone" {...register("phonenumbers.0")} />

        <label htmlFor="secondary-phone">Secondary Numbers</label>
        <input
          type="text"
          id="secondary-phone"
          {...register("phonenumbers.1")}
        />
        <div>
          <label>List of Phone Numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div className="form-control" key={field.id}>
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number` as const)}
                  />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
            <button type="button" onClick={() => append({ number: "" })}>
              Add phone number
            </button>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default YouTubeForm;
