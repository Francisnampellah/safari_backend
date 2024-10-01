const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new user
export const createUser = async (req: any, res: any) => {

  const { name, email, phoneNumber, password } = req.body;

  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phoneNumber: '1234567890',
      password: 'securepassword123',
    },
  });

  res.json(user);
};

export const getAllUsers = async (req: any, res: any) => {
  const users = await prisma.user.findMany();
  console.log(users);
  res.json(users);
};

