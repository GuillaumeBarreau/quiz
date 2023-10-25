import { withAuth } from "next-auth/middleware"

export default withAuth({
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async authorized({ req, token }) {
      try {
          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/session`,
          {
            method: 'GET',
            headers: {
              'x-auth0-token': req?.cookies?.get("appSession")?.value ?? "",
            }}
          )
          const json = await res.json()
          return !!json?.authenticated
        } catch(e) {
          return false
        }
    },
  },
})

export const config = {
  matcher: [ 
    "/practice-mode/:path*"
  ],
}