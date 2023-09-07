const User = require("../models/User");
const sharp = require("sharp");
class PostController {
  async create(req, res) {
    const { firstName, lastName, login, password } = req.body;
    try {
      const new_user = await User.create({
        firstName,
        lastName,
        login,
        password,
        isPublished: true,
      });

      res.status(201).json({
        message: "succes",
        data: new_user,
      });
    } catch (error) {
      res.json(error.message);
    }
  }

  async fileUpload(req, res) {
    try {
      const file = req.file;
      const path = `uploads/${file.originalname}`;
      await sharp(file.path).toFile(path);
      return res.status(200).json({
        status: true,
        message: "Upload success",
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async getAll(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
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
