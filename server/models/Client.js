const { Schema, model, now } = require('mongoose');
// const Date = Date.now();

const clientSchema = new Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  Phone: {
    type: String,
    required: true,
    trim: true
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],    
  },
  product: {
    type: String,
    required: true,
  },
  Note: {
    type: String,
    minlength: 1,
    
    trim: true,
  },

  Status: {
    type: String,
    required: true,
  },
  contacts: [
    {
      Type: {
        type: String,
        required: true,
      },
      Text: {
        type: String,
        required: true,
        minlength: 1,
        },
      createAt: {
        type: Date,
        default: now(),
      }
  
    },
  ],
},{
  timestamps: true
}
);

const Client = model('client', clientSchema);

module.exports = Client;
