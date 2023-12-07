import mongoose, { Schema } from 'mongoose';

const loginFormSchema = new Schema(
  {
    email: String,
    password: String,
     },
  {
    timestamps: true,
  }
);

const Login = mongoose.models.login_form || mongoose.model('login_form', loginFormSchema);

export default Login;
