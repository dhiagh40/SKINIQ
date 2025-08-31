const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('./firebaseServiceKey.json');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Simple test route
app.get('/', (req, res) => {
  res.send('Server is running and connected to Firebase!');
});

// ✅ تم تعديل مسار إنشاء الحساب
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
    });
    console.log('Successfully created new user:', userRecord.uid);
    res.status(201).json({ message: 'User created successfully!', uid: userRecord.uid });
  } catch (error) {
    console.error('Error creating new user:', error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ تم تعديل مسار تسجيل الدخول
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
        // نستخدم Firebase Admin SDK للتحقق من وجود المستخدم بالبريد الإلكتروني فقط
        const userRecord = await admin.auth().getUserByEmail(email);
        
        // إرسال رسالة نجاح إذا وجد المستخدم
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        // التعامل مع الأخطاء
        if (error.code === 'auth/user-not-found') {
            res.status(401).json({ error: 'Invalid email or password.' });
        } else {
            res.status(500).json({ error: 'An unexpected error occurred.' });
        }
    }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});