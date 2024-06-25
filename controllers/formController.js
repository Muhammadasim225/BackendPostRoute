const Form = require('../models/formModel');
const { createObjectCsvWriter } = require('csv-writer');
const path = require('path');

// Handle form submission
exports.submitForm = async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Fetch all data and return as CSV
exports.getFormDataAsCSV = async (req, res) => {
  try {
    const forms = await Form.find({});
    
    const csvWriter = createObjectCsvWriter({
      path: path.join(__dirname, '..', 'formData.csv'),
      header: [
        { id: 'name', title: 'Name' },
        { id: 'email', title: 'Email' },
        { id: 'phone', title: 'Phone' },
        { id: 'address', title: 'Address' },
        { id: 'city', title: 'City' },
        { id: 'state', title: 'State' },
        { id: 'zip', title: 'Zip' },
        { id: 'country', title: 'Country' },
        { id: 'birthdate', title: 'Birthdate' },
        { id: 'gender', title: 'Gender' },
        { id: 'institute_name', title: 'institute_name' },
        { id: 'field_of_study', title: 'field_of_study' },
        { id: 'year_of_study', title: 'year_of_study' },
        { id: 'choose_region', title: 'choose_region' },
        { id: 'facebook_link', title: 'facebook_link' },
        { id: 'instagram_link', title: 'instagram_link' },
        { id: 'linkedin_link', title: 'linkedin_link' },
        { id: 'prev_experience', title: 'prev_experience' },

      ]
    });

    const records = forms.map(form => ({
      name: form.name,
      email: form.email,
      phone: form.phone,
      address: form.address,
      city: form.city,
      state: form.state,
      zip: form.zip,
      country: form.country,
      birthdate: form.birthdate,
      gender: form.gender,
      institute_name:form.institute_name,
      field_of_study:form.field_of_study,
      year_of_study:form.year_of_study,
      choose_region:form.choose_region,
      facebook_link:form.facebook_link,
      instagram_link:form.instagram_link,
      linkedin_link:form.instagram_link,
      prev_experience:form.prev_experience,

      
      // preferences: form.preferences.join(', ') // Convert preferences array to a comma-separated string
    }));

    await csvWriter.writeRecords(records);
    res.download(path.join(__dirname, '..', 'formData.csv'));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
