import React from 'react';
import { Formik, Form, Field } from 'formik';
// import textApi from "../api/testApi";
export default class Test extends React.PureComponent<any, any> {
  componentDidMount() {
    // textApi.getAll().then(({ data }) => console.log(data));
  }
  render(): React.ReactNode {
    return (
      <div>
        <Formik
          initialValues={{
            social: {
              facebook: '',
              twitter: '',
            },
          }}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          <Form>
            <Field name="social.facebook" />
            <Field name="social.twitter" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
}
