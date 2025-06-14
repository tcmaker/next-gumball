// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

 
// export function GET(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   console.log(req.headers, res)
//   return NextResponse.json({message: "hello world"})
// }

export function GET() {
  return NextResponse.json({message: "hello world"})
}