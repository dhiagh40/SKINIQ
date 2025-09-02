const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const axios = require('axios'); // ✅ تم إضافة مكتبة axios
const serviceAccount = require('./firebaseServiceKey.json');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// ✅ ملاحظة: استبدل "YOUR_API_KEY" بمفتاح API الخاص بمشروعك
const FIREBASE_API_KEY = "AIzaSyCEQAT4MIugSkVICtWAp6WueW0IvmFDD3A"; 

// Simple test route
app.get('/', (req, res) => {
  res.send('Server is running and connected to Firebase!');
});

// ✅ مسار إنشاء الحساب
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

// ✅ مسار تسجيل الدخول المعدّل والآمن
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }

    try {
        // ✅ الخطوة 1: نستخدم Firebase REST API للتحقق من بيانات المستخدم
        const firebaseLoginResponse = await axios.post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
          {
            email: email,
            password: password,
            returnSecureToken: true
          }
        );

        // ✅ الخطوة 2: إذا كان الرد ناجحًا، فهذا يعني أن الإيميل وكلمة المرور صحيحان.
        // نرسل رسالة نجاح إلى التطبيق.
        res.status(200).json({ message: 'Login successful' });
    
    } catch (error) {
        // التعامل مع الأخطاء التي تأتي من Firebase API
        if (error.response && error.response.data && error.response.data.error) {
            const errorCode = error.response.data.error.message;
            let errorMessage = 'Invalid email or password.';
            
            if (errorCode === 'EMAIL_NOT_FOUND' || errorCode === 'INVALID_PASSWORD') {
                res.status(401).json({ error: errorMessage });
            } else {
                console.error('Firebase Login API Error:', error);
                res.status(500).json({ error: 'An unexpected error occurred.' });
            }
        } else {
            console.error('Server error:', error);
            res.status(500).json({ error: 'Failed to connect to Firebase.' });
        }
    }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});