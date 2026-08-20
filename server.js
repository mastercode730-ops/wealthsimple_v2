import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE = path.join(__dirname, 'data', 'users.json');

// Helper to read users
const readUsers = () => {
  if (!fs.existsSync(USERS_FILE)) {
    return [];
  }
  const data = fs.readFileSync(USERS_FILE);
  return JSON.parse(data);
};

// Helper to write users
const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

app.post('/api/signup', async (req, res) => {
  try {
    const { email, password, fullName, phone, accountType } = req.body;

    if (!email || !password || !fullName) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const users = readUsers();
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      id: Date.now().toString(),
      email,
      passwordHash: hashedPassword,
      profile: {
        fullName,
        phone,
        accountType
      }
    };

    users.push(newUser);
    writeUsers(users);

    res.status(201).json({ message: 'User created successfully', user: { id: newUser.id, email: newUser.email, profile: newUser.profile } });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const users = readUsers();
    const user = users.find(u => u.email === email);

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Logged in successfully', user: { id: user.id, email: user.email, profile: user.profile } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
