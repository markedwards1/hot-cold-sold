const { AuthenticationError } = require("apollo-server-express");
const { User, Client } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async () => {
      return await Client.find({}).populate('clients').populate ({
        path: 'user',
        populate: 'clients'
      })

  },
    





    // users: async () => {
    //   return User.find().populate("clients");
    // },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username }).populate("clients");
    // },
    // clients: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Client.find(params).sort({ createdAt: -1 });
    // },
    // client: async (parent, { clientId }) => {
    //   return Client.findOne({ _id: clientId });
    // },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addClient: async (
      parent,
      { name, phone, email, product, note, createdAt, status, contacts }
    ) => {
      const client = await Client.create({
        name,
        phone,
        email,
        product,
        note,
        createdAt,
        status,
        contacts,
      });

      await User.findOneAndUpdate({ username }, { $addToSet: { client } });

      return client;
    },
    addContact: async (parent, { type, text, contactedAt }) => {
      return Client.findOneAndUpdate(
        { _id: clientId },
        {
          $addToSet: { contacts: { type, text, contactedAt } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeClient: async (parent, { clientId }) => {
      return Client.findOneAndDelete({ _id: clientId });
    },
    removeContact: async (parent, { contactId }) => {
      return Client.findOneAndUpdate(
        { _id: clientId },
        { $pull: { contact: { _id: contactId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
