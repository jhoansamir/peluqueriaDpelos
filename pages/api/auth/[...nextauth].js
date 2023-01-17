import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prismadb"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name:"Credentials",
      async authorize(credentials,req){
        const result = await prisma.user.findUnique({
          where:{
            email:credentials.email
          }
        })
      if(!result){
        throw new Error("nO USER FOUND")
      }
      const checkPassword = result.password === credentials.password

      if(!checkPassword||result.email!== credentials.email){
        throw new Error("WRONG PASSWORD")
      }
      return result;
    }
  
  })
  
  ],
  
  session: {
    strategy: "jwt"
  }
  
})