const db = require('../config/connection');


const userData = require('./userData.json');
const clientData = require('./clientData.json');
const contactData = require('./contactData.json');
const { Client, User } = require('../server/models');

db.once('open', async () => {
  // clean database
  // await User.deleteMany({});
  // await Client.deleteMany({});
 

  // bulk create each model
  const users = await User.insertMany(userData);
  const clients = await Client.insertMany(clientData);
  

  for (newClient of clients) {
    // randomly add each class to a school
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.clients.push(newClient._id);
    await tempUser.save();

    // randomly add a professor to each class
    const tempContact = contacts[Math.floor(Math.random() * contacts.length)];
    newClient.contact = tempContact._id;
    await newClient.save();

    // reference class on professor model, too
    tempContact.client.push(newClient._id);
    await tempContact.save();
  }

  console.log('all done!');
  process.exit(0);
});
