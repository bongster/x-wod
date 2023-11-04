import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

function authenticate(email: any, password: any): any {
    return {
        user: {
            email,
        }
    };
}

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize (credentials, req) {
            if (typeof credentials !== "undefined") {
              const res = await authenticate(credentials.email, credentials.password)
              if (typeof res !== "undefined") {
                return { ...res.user, apiToken: res.token }
              } else {
                return null
              }
            } else {
              return null
            }
          }
        })
      ],
      session: { strategy: "jwt" }
}
const handler = NextAuth(authOptions);


export { handler as GET, handler as POST }