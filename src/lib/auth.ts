import NextAuth, { NextAuthOptions } from "next-auth"
import Auth0Provider from 'next-auth/providers/auth0'

export const authOptions : NextAuthOptions  = {
    providers: [
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID as string,
            clientSecret: process.env.AUTH0_CLIENT_SECRET  as string,
            issuer: process.env.AUTH0_ISSUER,
            authorization: {
                params: {
                    scope: 'openid profile email offline_access',
                },
            },
            
        }),
    ],
    secret: process.env.AUTH_SECRET,
}

export default NextAuth(authOptions)
// authorizationParams={{
//         redirect_uri: config.auth0CallbackUrl,
//         connection: config.auth0PublicConnection,
//         audience: config.auth0Audience,
//         scope: 'read:current_user openid profile email',
//         prompt: 'login',
//       }}
//       cacheLocation={'localstorage'}