import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerAttendee } from "../api/Registration";
import { getEventDetails } from "../api/GetEventData";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone_number: Yup.string().required("Phone number is required"),
  year: Yup.string().required("specify year in number"),
  branch: Yup.string().required("branch is required"),
});

function AttendeeForm({ eventId }) {
  async function onSubmit(values, { setSubmitting, resetForm }) {
    try {
      //values={event:event[0].name,...values}
      await registerAttendee(event[0].id, values);
      alert("Registration successful");
      resetForm();
    } catch (error) {
      alert("Registration failed");
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }
  const [event, setEvent] = useState([]);
  useEffect(() => {
    async function getEventData() {
      try {
        const events = await getEventDetails();
        setEvent(events);
        //console.log(event);
      } catch (error) {
        console.log(error);
      }
    }
    getEventData();
  }, []);
  const initialValues = {
    name: "",
    email: "",
    phone_number: "",
    year: "",
    branch: "",
  };

  return (
    <div className="mt-10 flex flex-col items-center w-full md:py-32">
      <div
        data-aos="fade-left"
        className="flex flex-col items-center justify-center  md:w-3/5   w-fit px-10   shadow-xl rounded-xl border-2 border-gray-300  pb-10 py-5"
      >
        <h3 className="text-center font-font1 font-bold text-4xl text-white">
          Registration Form
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="flex flex-col mt-4 items-start">
                <label htmlFor="name" className=" mt-2 font-medium text-white">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className=" outline-none  rounded-md py-1 px-4 mt-2 w-full  text-black outline focus:outline-form-border  bg-white "
                />
                <ErrorMessage name="name" component="div" />
              </div>
              <div className="flex flex-col mt-4 items-start">
                <label htmlFor="email" className=" mt-2 font-medium text-white">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className=" outline-none  rounded-md py-1 px-4 mt-2 w-full  text-black outline focus:outline-form-border  bg-white "
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="flex flex-col mt-4 items-start ">
                <label
                  htmlFor="phone_number"
                  className=" mt-2 font-medium text-white"
                >
                  Phone Number
                </label>
                <Field
                  type="text"
                  name="phone_number"
                  className=" outline-none  rounded-md py-1 px-4 mt-2 w-full  text-black outline focus:outline-form-border  bg-white "
                />
                <ErrorMessage name="phone_number" component="div" />
              </div>
              <div className="flex flex-col mt-4 items-start">
                <label htmlFor="year" className=" mt-2 font-medium text-white">
                  Year
                </label>
                <Field
                  type="text"
                  name="year"
                  className=" outline-none  rounded-md py-1 px-4 mt-2 w-full  text-black outline focus:outline-form-border  bg-white "
                />
                <ErrorMessage name="year" component="div" />
              </div>
              <div className="flex flex-col mt-4 items-start">
                <label
                  htmlFor="branch"
                  className=" mt-2 font-medium text-white"
                >
                  Branch
                </label>
                <Field
                  type="text"
                  name="branch"
                  className=" outline-none  rounded-md py-1 px-4 mt-2 w-full  text-black outline focus:outline-form-border  bg-white "
                />
                <ErrorMessage name="branch" component="div" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 text-white font-semibold hover:border-db-text-ph hover:text-white bg-blue-900 hover:bg-blue-500 rounded-md px-3 md:py-1 mr-5"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AttendeeForm;
