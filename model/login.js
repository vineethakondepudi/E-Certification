import mongoose, { Schema } from 'mongoose';

const loginFormSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    gender: String,
    maritalStatus: String,
    profilePicture: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

const Login = mongoose.models.login_form || mongoose.model('login_form', loginFormSchema);

export default Login;
