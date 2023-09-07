import { withAuth } from "next-auth/middleware"

export default withAuth({
  secret: process.env.AUTH_SECRET,
  callbacks: {
    authorized({ req, token }) {
      return !!token
    },
  },
})

export const config = {
  matcher: [ 
    "/home", 
    "/practice-mode/:path*"
  ],
}