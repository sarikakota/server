const express = require("express");
const { register, getUsers, updateUser, deleteUser } = require("../controllers/user");
const router = express.Router();

// Routes
router.post("/register", register);
router.get("/", getUsers); 
router.put("/:id", updateUser); 
router.delete("/:id", deleteUser); 

module.exports = router;
