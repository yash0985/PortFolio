import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bwnqgxda", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
    <hr />
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 bg-white dark:bg-gray-900 text-black dark:text-white transition duration-500">
        <h1 className="text-3xl font-bold mb-4">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-96 px-8 py-6 rounded-xl bg-slate-200 dark:bg-gray-800 transition duration-500">
            <h1 className="text-xl font-semibold mb-4 text-black dark:text-white">
              Send Your Message
            </h1>

            {/* Full Name */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 dark:text-gray-200">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 dark:text-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="text-sm text-red-500 mt-1">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 dark:text-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-sm text-red-500 mt-1">
                  This field is required
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 dark:text-gray-200">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 dark:text-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your query"
              />
              {errors.message && (
                <span className="text-sm text-red-500 mt-1">
                  This field is required
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black dark:bg-gray-700 text-white dark:text-white rounded-xl px-3 py-2 hover:bg-slate-700 dark:hover:bg-gray-300 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
