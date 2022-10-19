const { Schema, model, now } = require('mongoose');
// const Date = Date.now();

const clientSchema = new Schema({
  name: {
    type: String,
    required: false,
    trim: true,
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  email: {
    type: String,
    required: false,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],    
  },
  product: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    minlength: 1,
    
    trim: true,
  },

  status: {
    type: String,
    required: false,
  },
  communication: [
    {
      type: {
        type: String,
        required: false,
      },
      text: {
        type: String,
        required: false,
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

const Client = model('Client', clientSchema);

module.exports = Client;
