import { User } from "../models/User";

const TAG = "Resolver";

const resolvers = {
  Mutation: {
    addUser(root: any, args: any) {
      const user = new User({
        firstName: args.firstName,
        lastName: args.lastName
      });
      return user.save();
    },
    async deleteUser(root: any, args: any) {
      return await User.findOneAndDelete({
        _id: args.id
      });
    },
    async updateUser(root: any, args: any) {
      const tempUser = { ...args };
      delete tempUser.id;
      return await User.findOneAndUpdate({ _id: args.id }, tempUser);
    }
  },
  Query: {
    users(root: any, args: any) {
      return User.find({});
    }
  }
};

export default resolvers;

const logger = (TAG: any, log: any) => {
  console.log(`[${TAG}]`, log);
};
