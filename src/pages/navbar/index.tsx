import React from 'react';

import { useNavigate, NavLink } from 'react-router-dom';

import smallLogo from '../../assets/images/smallLogo.png';

const Navbar: React.FC = () => {
  const navigator = useNavigate();

  const handleClick = (path: string): void => {
    navigator(path);
  };

  const signin = (): void => {
    handleClick('/signin');
  };

  const onSignUpEmail = (): void => {
    handleClick('/email');
  };

  const onSignUpApple = (): void => {
    handleClick('/apple');
  };

  const signUp = (): void => {
    handleClick('/signup');
  };

  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900 mt-3'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a
          href='http://localhost:3000/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <img src={smallLogo} className='h-8' alt='Twitter Logo' />
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>
            Twitter
          </span>
        </a>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  `block py-2 px-3 bg-white rounded hover:text-blue-600 text-black ${
                    isActive ? ' text-blue-600' : 'text-black'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/signin'
                className={({ isActive }) =>
                  `block py-2 px-3 bg-white rounded hover:text-blue-600 text-black ${
                    isActive ? ' text-blue-600' : 'text-black'
                  }`
                }
              >
                Sign in
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/email'
                className={({ isActive }) =>
                  `block py-2 px-3 bg-white rounded hover:text-blue-600 text-black ${
                    isActive ? ' text-blue-600' : 'text-black'
                  }`
                }
              >
                Sign up by email
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/apple'
                className={({ isActive }) =>
                  `block py-2 px-3 bg-white rounded hover:text-blue-600 text-black ${
                    isActive ? ' text-blue-600' : 'text-black'
                  }`
                }
              >
                Sign up by apple ID
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/signup'
                className={({ isActive }) =>
                  `block py-2 px-3 bg-white rounded hover:text-blue-600 text-black ${
                    isActive ? ' text-blue-600' : 'text-black'
                  }`
                }
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
