import React from 'react';
import Navbar from '../navbar';
import { useFormik } from 'formik';

interface formValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
}

const initialValues: formValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  gender: '',
};

const onSubmit = (values: formValues) => {
  console.log(values);
};

interface formErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string | null;
  gender?: string;
}

const validate = (values: formValues) => {
  const errors: formErrors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is required!';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required!';
  }
  if (!values.password) {
    errors.password = 'Password is required!';
  } else if (values.password.length < 6) {
    errors.password = 'Password should be atleast 6 characters!';
  }

  if (!values.gender) {
    errors.gender = 'Gender is required!';
  }
  if (!values.email) {
    errors.email = 'Email is required!';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Invalid email format!';
  }

  return errors;
};

const SignUpPage: React.FC = () => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validate,
  });

  return (
    <div>
      <Navbar />
      <div className=' text-3xl flex justify-center items-center mt-10 font-bold'>
        Creating Account
      </div>

      <div className=' flex justify-center items-cente'>
        <div className='border border-black rounded-lg px-8 mb-32 mt-5 py-5'>
          <form action='' onSubmit={formik.handleSubmit}>
            <div>
              <label
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                htmlFor='first_name'
              >
                First name
              </label>
              <input
                type='text'
                id='first_name'
                name='firstName'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='first name'
                required
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className=' text-red-600 text-xs'>
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div>
              <label
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                htmlFor='last_ame'
              >
                Last name
              </label>
              <input
                type='text'
                id='last_name'
                name='lastName'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Last name'
                required
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className=' text-red-600 text-xs'>
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
            <div>
              <label
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                htmlFor='email'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='email'
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className=' text-red-600 text-xs'>
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div>
              <label
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                htmlFor='password'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='password'
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className=' text-red-600 text-xs'>
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <label
              htmlFor='gender'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2'
            >
              Select your gender
            </label>
            <select
              id='gender'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              name='gender'
              required
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option selected>Chose your gender</option>
              <option value='male'>Male</option>
              <option value='female'>Fe-Male</option>
            </select>
            {formik.touched.gender && formik.errors.gender ? (
              <div className=' text-red-600 text-xs'>
                {formik.errors.gender}
              </div>
            ) : null}
            <div className=' flex justify-center items-center mt-3 mr-16'>
              <button
                className=' rounded-xl text-white border-black bg-blue-500 px-24 ml-8 hover:bg-blue-700z'
                type='submit'
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
