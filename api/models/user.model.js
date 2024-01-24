import mongoose from 'mongoose'

// Defining a Mongoose schema for the 'User' collection
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },
  },
  { timestamps: true } // Adding timestamps to the schema to automatically track createdAt and updatedAt fields
)

// Creating a Mongoose model named 'User' based on the defined schema
const User = mongoose.model('User', userSchema)

export default User
