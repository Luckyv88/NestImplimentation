import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { sendVerifiactionCode } from '../middleware/email.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1m',
  });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!email || !password || !name) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
  
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationCode
    });
await sendVerifiactionCode(email, verificationCode);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      verificationCode: user.verificationCode,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { code } = req.body;
    const user = await User.findOne({ verificationCode: code });
    if (!user) {
      return res.status(400).json({ message: 'Invalid verification code' });
    }
    user.isVerified = true;
    user.verificationCode = undefined;
    await user.save();
    return res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}