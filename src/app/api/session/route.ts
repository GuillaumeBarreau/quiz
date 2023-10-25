import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { decode } from "next-auth/jwt";
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export async function GET(req: Request, res: NextApiResponse) {
  // const session = await getServerSession({ req, ...authOptions });
  // console.log("session", session);

  // if (!!req.headers.get('x-auth0-token')) {
  //   const tokenValue = req.headers.get('x-auth0-token');
    
    
  //   // const decoded = await decode({
  //   //   token: tokenValue as string,
  //   //   secret: process.env.NEXTAUTH_SECRET as string,
  //   // });
  
  //     // console.log("decoded", decoded);
    
  //   // if (!!tokenValue) {
  //   // console.log("here");
  //   //   const tokenInSession = decode({
  //   //     token: tokenValue as string,
  //   //     secret: process.env.NEXTAUTH_SECRET as string,
  //   //   });
  
  //     // console.log("tokenInSession", tokenInSession);
     
  // }

  return NextResponse.json({
    authenticated: !!req.headers.get('x-auth0-token'),
  });

}