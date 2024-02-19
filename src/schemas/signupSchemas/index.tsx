import * as Yup from 'yup';

const SignUpSchema = Yup.object({
  firstName: Yup.string().min(2).max(10).required('First name is required!'),
  lastName: Yup.string().min(2).max(10).required('Last name is required!'),
  email: Yup.string().email().required('Email is required!'),
  password: Yup.string().min(6).required('Password is required!'),
  gender: Yup.string().required('Gender is required!'),
});

export default SignUpSchema;
