const express = require('express');
// Make sure to update the path if you move index.js
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use the new router with a prefix
app.use('/api/v1', userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});






// // index.js
// const express = require('express');
// const { PrismaClient } = require('@prisma/client');

// const app = express();
// const prisma = new PrismaClient();
// const PORT = process.env.PORT || 3000;

// app.use(express.json()); // Middleware to parse JSON bodies

// // A simple test route to create a user
// app.post('/test-user', async (req, res) => {
//   try {
//     const newUser = await prisma.user.create({
//       data: {
//         firebaseUid: 'test-firebase-uid-123', // Just a placeholder for testing
//         email: `test-${Date.now()}@example.com`,
//         name: 'Test User',
//         role: 'CUSTOMER',
//       },
//     });
//     console.log('Created new user:', newUser);
//     res.status(201).json(newUser);
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'Failed to create user' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });