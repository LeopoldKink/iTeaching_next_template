// prisma.ts
import { PrismaClient } from "@prisma/client";

// Define global to inform TypeScript about its existence
declare const global: {
  prisma?: PrismaClient; // Define the property to store the PrismaClient instance
};

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
