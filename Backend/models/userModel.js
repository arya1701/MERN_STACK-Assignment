const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// before saving we need to encrypt the user password

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  // generating the salt more the salt size, more oomplex to decript the password
  const salt = await bcrypt.genSalt(10);

  // hash the salt with our password
  this.password = await bcrypt.hash(this.password, salt);
});

// to decrypt the passwrd
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
  // this will compare the entered password with the password from database
};

const User = mongoose.model("User", userSchema);

module.exports = User;
