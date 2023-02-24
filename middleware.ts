export { default } from "next-auth/middleware"
export const config = { matcher: ['/about'] }

// for rule base auth gaurd
// import { withAuth } from "next-auth/middleware"

// export default withAuth(
//     function middleware(req) {
//         console.log(req.nextauth.token)
//     },
//     {
//         callbacks: {
//             authorized: ({ token }) => {
//                 return token?.accessToken ? true : false
//             },
//         },
//     }
// )

// export const config = { matcher: ["/admin"] }