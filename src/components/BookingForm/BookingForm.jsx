import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import css from "./BookingForm.module.css";
import { useState } from "react";

const BookingSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().required("Date is required"),
  comment: Yup.string(),
});

const BookingForm = () => {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (values, actions) => {
    console.log(values);
    toast.success("Booking successful!");
    actions.resetForm();
    setStartDate(null);
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{ name: "", email: "", date: "", comment: "" }}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.inputsGroup}>
              <div className={css.fieldWrapper}>
                <Field name="name" placeholder="Name*" className={css.input} />
                <ErrorMessage
                  name="name"
                  component="span"
                  className={css.error}
                />
              </div>

              <div className={css.fieldWrapper}>
                <Field
                  name="email"
                  placeholder="Email*"
                  className={css.input}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>

              <div className={css.fieldWrapper}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setFieldValue("date", date);
                  }}
                  placeholderText="Booking date*"
                  className={css.input}
                  dateFormat="dd.MM.yyyy"
                  minDate={new Date()}
                  wrapperClassName={css.datePickerWrapper}
                />
                <ErrorMessage
                  name="date"
                  component="span"
                  className={css.error}
                />
              </div>

              <div className={css.fieldWrapper}>
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Comment"
                  className={`${css.input} ${css.textarea}`}
                />
              </div>
            </div>
            <button type="submit" className={css.btn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
      <Toaster position="top-right" />
    </div>
  );
};

export default BookingForm;
