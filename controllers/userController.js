const { User, Thought } = require('../models');

module.exports = {
  async getAllUsers(req, res) {
    try {
        const userData = await User.find({});
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
    },
    async getUserById(req, res) {
        try {
            const userData = await User.findById(req.params.id);
            res.status(200).json(userData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const userData = await User.create(req.body);
            res.status(200).json(userData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async updateUser(req, res) {
        try {
            const userData = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(userData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const userData = await User.delete({ _id: req.params.id });
            if (!userData) {
                res.status(404).json({ message: 'No user with this id!' });
                return;
            }
        } catch (err) {
            res.status(400).json(err);
        }
    },
    addFriend: async (req, res) => {
        try {
          const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $push: { friends: req.params.friendId } },
            { new: true, runValidators: true }
          );
    
          if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
    
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },
        removeFriend: async (req, res) => {
            try {
                const user = await User.findByIdAndUpdate(
                  req.params.userId,
                  { $pull: { friends: req.params.friendId } },
                  { new: true, runValidators: true }
                );
          
                if (!user) {
                  return res.status(404).json({ message: 'No user with this id!' });
                }
          
                res.json(user);
              } catch (err) {
                res.status(500).json(err);
              }
            }
};

