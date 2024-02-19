import React from 'react';

import { useFormik } from 'formik';

import Navbar from '../navbar';

import SignUpSchema from '../../schemas/signupSchemas';

interface typeOfInitialValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
}

const initialValues: typeOfInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  gender: '',
};

const onSubmit = (values: typeOfInitialValues) => {
  console.log(values);
};

const SignUpByApple: React.FC = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: onSubmit,
  });

  return (
    <div>
      <Navbar />
      <div className=' text-3xl flex justify-center items-center mt-10 font-bold'>
        Sign up by Apple ID
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
                name='firstName'
                id='first_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='first name'
                required
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstName && formik.touched.firstName ? (
                <div className=' text-red-600 text-xs'>
                  {formik.errors.firstName}
                </div>
              ) : null}
            </div>
            <div>
              <label
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                htmlFor='last_name'
              >
                Last name
              </label>
              <input
                type='text'
                name='lastName'
                id='last_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Last name'
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastName && formik.touched.lastName ? (
                <div className=' text-red-600 text-xs'>
                  {formik.errors.lastName}
                </div>
              ) : null}
            </div>
            <div>
              <label
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3'
                htmlFor='email'
              >
                Email
              </label>
              <input
                type='text'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='email'
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
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
                name='password'
                id='password'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='password'
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
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
              name='gender'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option selected>Choose your gender</option>
              <option value='male'>Male</option>
              <option value='female'>Fe-Male</option>
            </select>
            {formik.errors.gender && formik.touched.gender ? (
              <div className=' text-red-600 text-xs'>
                {formik.errors.gender}
              </div>
            ) : null}
            <div className=' flex justify-center items-center mt-3 mr-16'>
              <button
                className=' rounded-xl text-white border-black bg-blue-500 px-24 ml-6 hover:bg-blue-700z'
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

export default SignUpByApple;
