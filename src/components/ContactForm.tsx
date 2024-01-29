"use client";

import React, { useEffect, useState } from "react";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FadeIn from "./animations/FadeIn";

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

interface ErrorMessageProps {
  message?: string;
}

const ErrorIcon = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
    >
      <path
        d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
        fill="white"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

function ErrorMessageList({
  errors,
}: {
  errors: FieldErrors<ContactFormInputs>;
}) {
  const errorValues = Object.values(errors);
  return (
    errorValues.length > 0 && (
      <FadeIn>
        <div className="text-xs sm:text-sm text-white font-medium py-2 bg-red-500 px-4 rounded-md flex flex-col gap-1 mb-4">
          <div className="w-full flex-row flex gap-2 items-center">
            <ErrorIcon />
            <p className="font-semibold">Uh Oh. There was an error!</p>
          </div>
          <ul className="pl-4 sm:pl-10 list-disc">
            {errorValues.length > 1 &&
              errorValues.map((errorItem) => (
                <li key={errorItem.message}>{errorItem.message}</li>
              ))}
          </ul>
        </div>
      </FadeIn>
    )
  );
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const registerOptions = {
    name: {
      required: { value: true, message: "A name is required." },
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: "The name must contain only letters.",
      },
      maxLength: {
        value: 80,
        message: "The name must be less than 80 characters.",
      },
    },
    email: {
      required: { value: true, message: "An email is required." },
      pattern: {
        value: /^\S+@\S+$/i,
        message: "The email address must contain a valid format.",
      },
    },
    message: {
      required: { value: true, message: "A message is required." },
      maxLength: {
        value: 500,
        message: "The message must be less than 500 characters.",
      },
    },
  };

  const onSubmit: SubmitHandler<ContactFormInputs> = (data, e) => {
    // console.log(data);
    toast.success("Your message was sent successfully.", {
      autoClose: 1400,
      className: "",
      hideProgressBar: true,
      theme: "colored",
    });

    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full py-10 sm:px-5 md:py-20 md:px-0 md:max-w-[33rem]"
    >
      <ToastContainer draggable stacked limit={3} />
      <div className="flex flex-col w-full h-fit">
        <ErrorMessageList errors={errors} />
        <label
          htmlFor="name"
          className="font-suisse-medium uppercase text-lg mb-4"
        >
          Name
        </label>
        <input
          id="name"
          className="bg-black font-suisse-regular placeholder:text-[#bbbbbb] border-b-2 border-[#bbbbbb] transition-all duration-300 focus-visible:ring-none focus-visible:box-shadow-none focus-visible:transition-none focus-visible:outline-none hover:border-b-2 hover:border-[#d4d4d4] py-2 focus:box-shadow-none focus:outline-none focus:border-b-2 focus:border-white px-2"
          placeholder="Enter your name"
          defaultValue=""
          {...register("name", registerOptions.name)}
        />
      </div>
      <div className="flex flex-col w-full h-fit">
        <label
          htmlFor="Contact-Email"
          className="font-suisse-medium uppercase text-lg mb-4"
        >
          Email
        </label>
        <input
          id="Contact-Email"
          className="bg-black font-suisse-regular placeholder:text-[#bbbbbb] border-b-2 border-[#bbbbbb] transition-all duration-300 focus-visible:ring-none focus-visible:box-shadow-none focus-visible:transition-none focus-visible:outline-none hover:border-b-2 hover:border-[#d4d4d4] py-2 focus:box-shadow-none focus:outline-none focus:border-b-2 focus:border-white px-2"
          placeholder="Enter your email address"
          defaultValue=""
          {...register("email", registerOptions.email)}
        />
      </div>
      <div className="flex flex-col w-full h-fit">
        <label
          htmlFor="Contact-Message"
          className="font-suisse-medium uppercase text-lg mb-4"
        >
          Message
        </label>
        <textarea
          id="Contact-Message"
          className="bg-black font-suisse-regular placeholder:text-[#bbbbbb] border-b-2 border-[#bbbbbb] transition-all duration-300 focus-visible:ring-none focus-visible:box-shadow-none focus-visible:transition-none focus-visible:outline-none hover:border-b-2 hover:border-[#d4d4d4] py-2 focus:box-shadow-none focus:outline-none focus:border-b-2 focus:border-white px-2"
          placeholder="Write a message"
          defaultValue=""
          {...register("message", registerOptions.message)}
        />
      </div>
      <button
        type="submit"
        className="bg-black text-white font-suisse-bold uppercase text-lg py-3 my-8 tracking-wider border-2 border-white hover:bg-[#171717] transition-all duration-100 hover:translate-y-[1px]"
        onClick={(e) => handleSubmit(onSubmit)}
      >
        Submit
      </button>
    </form>
  );
}
