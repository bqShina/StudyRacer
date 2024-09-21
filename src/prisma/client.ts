import { PrismaClient } from '@prisma/client';

// Define the prismaClientSingleton function with the correct return type
const prismaClientSingleton = (): PrismaClient => {
  return new PrismaClient();
};

// Extend the global object with Prisma type
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Export the prisma instance
export const prisma: PrismaClient =
  globalThis.prisma ?? prismaClientSingleton();

// In non-production environments, attach the Prisma client to the global object to avoid recreating it
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
