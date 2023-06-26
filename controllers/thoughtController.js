const { Thought } = require('../models');

module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughtData = await Thought.find({});
            res.status(200).json(thoughtData);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    async getThoughtById(req, res) {
        try {
            const thoughtData = await Thought.findById(req.params.id);
            res.status(200).json(thoughtData);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thoughtData = await Thought.create(req.body);
            res.status(200).json(thoughtData);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thoughtData = await Thought.update(req.body);
            res.status(200).json(thoughtData);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thoughtData = await Thought.delete(req.body);
            res.status(200).json(thoughtData);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    async addReaction(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body } },
                { new: true }
            );
            res.status(200).json(thoughtData);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    async removeReaction(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            res.status(200).json(thoughtData);
        }
        catch (err) {
            res.status(400).json(err);
        }
    }
};
