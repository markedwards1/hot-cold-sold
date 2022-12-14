const { AuthenticationError } = require("apollo-server-express");
const { User, Client } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args) => {
      return await User.find({}).populate("clients");
    },

    findUser: async (parent, { username }) => {
      return User.findOne({ username }).populate("clients");
    },

    //   async findUser (parent, args){
    //   console.log(args.id);
    //   return await User.findById(args.id).populate('clients');
    // },

    clients: async (parent, args) => {
      return await Client.find({});
    },
//possibly need to populate 'communication'
    async findClient(parent, args) {
      console.log(args.id);
      return await Client.findById(args.id);
    },
    
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('clients');
      }
      throw new AuthenticationError('You need to be logged in!');
    },




  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log(user);
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

    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    

    addClient: async (
      parent,
      { name, phone, email, product, note, createAt, status },
      context
    ) => {
      if (context.user) {
        const client = await Client.create({
          name,
          phone,
          email,
          product,
          note,
          createAt,
          status,
        });
        console.log(client);

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { clients: client._id } }
        );

        console.log(client);
        return client;
      }
      throw new AuthenticationError("Girlfirend, you better log in!!!!");
    },

    addCommunication: async ( parent, { clientId, type, text, contactedAt }, context) => {
      if (context.user) {
        return Client.findByIdAndUpdate(
          { _id: clientId },
          { $addToSet: { communication: { type, text, contactedAt } } },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("Girlfirend, you better log in!!!!");
    },

    updateUser: async (parent, { userId, username}, context) => {
      if(context.user){
        return User.findByIdAndUpdate(
          {_id: userId},
          { username },
          { new: true }
        )
      }
      throw new AuthenticationError("Girlfirend, you better log in!!!!");
    },

    updateClient: async (parent, { clientId, name, phone, email, product, note, createAt, status }, context) => {
      if(context.user){
        return Client.findByIdAndUpdate(
          {_id: clientId},
          { name, phone, email, product, note, createAt, status},
          { new: true }
        )
      }
      throw new AuthenticationError("Girlfirend, you better log in!!!!");
    },

    updateCommunication: async (
      parent,
      { communicationId, type, text, contactedAt },
      context
    ) => {
      if (context.user) {
        return Client.findByIdAndUpdate(
          { _id: communicationId },
          {  type, text, contactedAt  },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("Girlfirend, you better log in!!!!");
    },

    removeUser: async (parent, { _id, username, email }, context)=> {
      if(context.user) {
        return await User.findByIdAndDelete(
          { _id: context.user._id},
          ( _id, username, email )

        )
      }
      throw new AuthenticationError("Girlfirend, you better log in!!!!");
    },

    removeClient: async (parent, { clientId }, context ) => {
      if(context.user){
        return await Client.findByIdAndDelete({_id: clientId});
      }
      throw new AuthenticationError("Girlfirend, you better log in!!!!");
    }


  },
};

module.exports = resolvers;
