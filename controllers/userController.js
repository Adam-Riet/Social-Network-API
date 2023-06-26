const { User } = require('../models');

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
            const userData = await User.update(req.body);
            res.status(200).json(userData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const userData = await User.delete(req.body);
            res.status(200).json(userData);
        } catch (err) {
            res.status(400).json(err);
        }
    }
};
    