const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

admin.initializeApp({
    credential: admin.credential.cert(require('./serviceAccountKey.json')),
});

const db = admin.firestore();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/message', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const docRef = await db.collection('messages').add({
            name,
            email,
            message,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
        res.status(201).json({ id: docRef.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
