import * as Yup from 'yup';

const SignInSchema = Yup.object({
  email: Yup.string().email().required('Email is required!'),
  password: Yup.string().min(6).required('Password is rerquired!'),
});

export default SignInSchema;
