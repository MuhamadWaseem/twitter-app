import React from 'react';

import twitterLogo from '../../assets/images/logo.jpg';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigator = useNavigate();

  const handleClick = (val: string): void => {
    navigator(val);
  };

  const onSignUpEmail = (): void => {
    handleClick('email');
  };

  const onSignUpApple = (): void => {
    handleClick('apple');
  };

  const signUp = (): void => {
    handleClick('signup');
  };

  const signin = (): void => {
    handleClick('signin');
  };

  return (
    <div className='grid grid-rows-1 grid-flow-col'>
      <div className='row-start-1 row-span-1'>
        <img
          className='mx-10 my-10'
          src={twitterLogo}
          alt='My-image inline-block'
        />
      </div>
      <div className='row-start-1 my-32 mx-28'>
        <div className='text-right mr-16 p-0'>
          <div className='text-2xl font-bold my-10 mx-10'>Happening now</div>
        </div>
        <div className='p-0 mb-4'>
          <div className='text-right mr-48 font-bold'>Join today.</div>
        </div>
        <div className=' text-right mr-16'>
          <button
            onClick={onSignUpEmail}
            className='inline-block px-10 py-1 border border-black text-black bg-white-50 rounded-xl'
          >
            Sign up with email
          </button>
        </div>
        <div className=' text-right mr-16'>
          <button
            onClick={onSignUpApple}
            className=' inline-block px-10 py-1 my-2 border border-black rounded-xl hover:bg-slate-400'
          >
            Sign up with apple
          </button>
        </div>
        <div className=' text-right mr-40'>or</div>
        <div className=' text-right mr-16'>
          <button
            onClick={signUp}
            className=' inline-block px-14 py-1 my-2 bg-blue-600 text-white border border-black rounded-xl'
          >
            Create account
          </button>
        </div>
        {/* <div className=' text-center'>
          <div className=' text-center text-xs'>
            By signing up,you agree to the <a href='#'> terms of service </a>
            and <a href='#'> privacy policy, </a> including
            <a href='#'> Cookie use</a>
          </div>
        </div> */}
        <div className=' text-right mr-20'>
          <div className=' mt-4 mr-2'>Alredy have an account?</div>
          <button
            onClick={signin}
            className=' border border-black rounded-xl text-blue-500 mt-2 px-20'
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
