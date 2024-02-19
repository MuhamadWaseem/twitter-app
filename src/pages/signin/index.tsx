import React from 'react';

import { useState } from 'react';
import { useFormik } from 'formik';

import Navbar from '../navbar';
import SignInSchema from '../../schemas/signinSchemas';

interface typeOfInitialValues {
  email: string;
  password: string;
}

const initialValues: typeOfInitialValues = {
  email: '',
  password: '',
};

const onSubmit = (values: typeOfInitialValues) => {
  console.log(values);
};
const SingInPage: React.FC = () => {
  const [pass, setPass] = useState(false);
  const [btn, setBtn] = useState(true);

  const handleText = (): void => {
    setBtn(!btn);
    setPass(!pass);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignInSchema,
    onSubmit: onSubmit,
  });

  return (
    <div>
      <Navbar />
      <div className='flex justify-center items-center h-40 text-3xl mr-16 font-bold mt-0 mb-0'>
        Sign in into Twitter
      </div>
      <div className=' flex justify-center items-center'>
        <div className='border border-black rounded-lg px-8 py-20 mb-10 mt-0'>
          <form action='' onSubmit={formik.handleSubmit}>
            <div>
              <label
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                htmlFor='emial'
              >
                Email
              </label>
              <input
                type='text'
                id='email'
                name='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Email'
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
                type={pass ? 'text' : 'password'}
                id='password'
                name='password'
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
              <button
                onClick={handleText}
                className='border border-gray-400 rounded-xl ml-1 px-2 py-0 mt-2 mr-2 flex text-xs hover:font-bold'
              >
                {btn ? 'hide' : 'show'}
              </button>
            </div>
            <div className=' flex justify-center items-center mt-3 mr-16'>
              <button
                className=' rounded-xl text-white border-black bg-blue-500 px-24 ml-6 hover:bg-blue-700z'
                type='submit'
              >
                Sign in
              </button>
            </div>
            <div className=' text-black flex justify-center items-center mt-2 mr-16'>
              <a className=' text-sm hover:underline' href='#'>
                Frogotten password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingInPage;
