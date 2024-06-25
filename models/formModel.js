// formModel.js
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  country: String,
  birthdate: Date,
  gender: String,
  institute_name:String,
  field_of_study:String,
  year_of_study:Number,
  choose_region:String,
  facebook_link:String,
  instagram_link:String,
  linkedin_link:String,
  prev_experience:String,






  // preferences: [String]
});

module.exports = mongoose.model('Form', formSchema);
