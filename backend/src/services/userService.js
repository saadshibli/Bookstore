const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTestUser = () => {
  return prisma.user.create({
    data: {
      firebaseUid: `test-uid-${Date.now()}`,
      email: `test-${Date.now()}@example.com`,
      name: 'Test User',
      role: 'CUSTOMER',
    },
  });
};

module.exports = {
  createTestUser,
};