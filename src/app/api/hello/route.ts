// app/api/hello/route.ts
import { PrismaClient } from '../../../generated/prisma'



export async function GET() {
  const prisma = new PrismaClient()
  try {
    const result = await prisma.department.findMany()
    return Response.json(result)
  } finally {
    await prisma.$disconnect()
  }
}