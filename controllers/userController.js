const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const crypto = require("crypto");
const User = require("../models/userModel");

exports.registerUser = async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		return res.status(200).json({
			message: "User created",
		});
	} catch (err) {
		return res.status(400).json({ message: "Registration error" });
	}
};
exports.listUsers = async (req, res) => {
	try {
		let users = await User.find().select("name email updated created");
		res.json(users);
	} catch (err) {
		return res.status(400).json({
			message: "Cannot retrieve list of users",
		});
	}
};
exports.getUser = async (req, res) => {
	try {
		let user = await User.findById(req.params.userId);
		if (!user) {
			return res.status(400).json({ error: "User not found" });
		}
	} catch (error) {
		return res.status(400).json({ error: "Error retrieving user" });
	}
};
exports.updateUser = async (req, res) => {
	try {
		let user = await User.findByIdAndUpdate(
			req.params.userId,
			{ ...req.body },
			{ new: true }
		);
		if (!user) {
			return res.status(400).json({ error: "User not found" });
		}
	} catch (error) {
		return res.status(400).json({ error: "Error retrieving user" });
	}
};
exports.deleteUser = async (req, res) => {
	try {
		let user = await User.findByIdAndDelete(req.params.userId);
		if (!user) {
			return res.status(400).json({ error: "User not found" });
		}
	} catch (error) {
		return res.status(400).json({ error: "Error retrieving user" });
	}
};
