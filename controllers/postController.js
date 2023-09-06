const User = require("../models/User");

const fileService = require("../fileService");

class PostController {
  async create(req, res) {
    const { firstName, lastName, login, password } = req.body;
    const file = req.files;
    const fileName = fileService.saveFile(file);

    try {
      const new_user = await User.create({
        firstName,
        lastName,
        login,
        password,
        picture: `${process.env.HOST}photo/${fileName}`,
      });

      res.status(201).json({
        message: "succes",
        data: new_user,
      });
    } catch (error) {
      res.json(error.message);
    }
  }

  async getAll(req, res) {
    const users = await User.find();
    res.json(users);
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await User.findById(id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const data = await User.updateOne(req.params, { $set: req.body });
      res.json(data);
    } catch (error) {
      res, json(error.message);
    }
  }

  async delete(req, res) {
    try {
      const data = await User.deleteOne(req.params);
      res.json(data);
    } catch (error) {
      res.json(error.message);
    }
  }
}

module.exports = new PostController();
