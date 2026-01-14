import React from "react";
import { Controller, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface ContactInterface {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInterface>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur", // pwede "onChange" if gusto mo realtime validation
  });

  const onSubmit = async (data: ContactInterface) => {
    try {
      await emailjs.send(
        "service_aya6wle",
        "template_k7i45qx",
        {
          from_name: data.name,
          to_name: "Argie",
          from_email: data.email,
          to_email: "barcenaargie@gmail.com",
          message: data.message,
        },
        "0xSBZKyqWDyNwUNGV"
      );

      alert("Thank you. I will get back to you as soon as possible!");
      reset(); // resets to defaultValues
    } catch (error) {
      console.log("@CE:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <React.Fragment>
      <h2 className="text-5xl font-bold">Contact me</h2>

      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* NAME */}
          <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
            Name
          </label>

          <Controller
            control={control}
            name="name"
            rules={{
              required: "Name is required",
              minLength: { value: 2, message: "Name must be at least 2 characters" },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="name"
                type="text"
                autoComplete="name"
                aria-invalid={!!errors.name}
                className={`block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset p-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${
                  errors.name ? "ring-red-500" : "ring-gray-300"
                }`}
              />
            )}
          />

          {errors.name?.message && (
            <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
          )}

          {/* EMAIL */}
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>

          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="email"
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                className={`block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset p-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${
                  errors.email ? "ring-red-500" : "ring-gray-300"
                }`}
              />
            )}
          />

          {errors.email?.message && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}

          {/* MESSAGE */}
          <label
            htmlFor="message"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>

          <Controller
            control={control}
            name="message"
            rules={{
              required: "Message is required",
              minLength: { value: 10, message: "Message must be at least 10 characters" },
            }}
            render={({ field }) => (
              <textarea
                {...field}
                id="message"
                rows={5}
                autoComplete="off"
                aria-invalid={!!errors.message}
                className={`h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset p-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${
                  errors.message ? "ring-red-500" : "ring-gray-300"
                }`}
              />
            )}
          />

          {errors.message?.message && (
            <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`py-4 px-8 rounded-lg font-bold text-lg mt-16 w-full ${
              isSubmitting
                ? "bg-indigo-400 text-white cursor-not-allowed"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};
