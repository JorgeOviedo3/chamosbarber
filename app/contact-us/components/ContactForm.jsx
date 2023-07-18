"use client";

import { FormEvent, useRef } from "react";

export const ContactForm = () => {
  // const form = useRef();

  // const sendEmail = (e:FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_dnkowf8', 'template_lnorvwb', e.currentTarget , 'wZwvlnmhQU1rmwvnd')
  //       .then((result) => {
  //         e.currentTarget.reset()
  //       }, (error) => {
  //         throw new Error(error);
  //       });
  // };

  return (
    <form className="mb-14">
      <div className="flex flex-wrap mb-2">
        <div className="w-full  mb-2 md:mb-0">
          <label className="block tracking-wide text-gray-900 mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="user_name"
            type="text"
            placeholder="Jane Doe"
            minLength={2}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-2">
        <div className="w-full ">
          <label className="block  tracking-wide text-gray-900 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none block w-full bg-gray-50 text-gray-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
            name="user_email"
            type="email"
            placeholder="janedoe@mail.com"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-2">
        <div className="w-full ">
          <label className="block tracking-wide text-gray-900 mb-2" htmlFor="message">
            Inquiry
          </label>
          <textarea
            className=" no-resize appearance-none block w-full bg-gray-50 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  h-48 resize-none"
            name="message"
            required
            minLength={10}
            placeholder="Tell us your inquiry..."
          ></textarea>
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="w-full py-4 px-2 bg-black text-white font-bold rounded flex text-lg items-center justify-center uppercase mt-2 hover:bg-secondary duration-300"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};
