import mongoose, { Schema } from 'mongoose';

const personalFormSchema = new Schema(
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

const PersonalForm = mongoose.models.personal_form || mongoose.model('personal_form', personalFormSchema);

export default PersonalForm;
