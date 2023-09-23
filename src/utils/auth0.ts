import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
    secret: 'EurDJXxWGtcnHKdzgr5HacZHO2YfsZ06WFIYNbQsi48',
    issuerBaseURL: 'https://dev-7s824m6n.eu.auth0.com',
    baseURL: 'http://localhost:3000',
    clientID: 'JuB7JqNI5shGNqqaLkXCVyt750ZTKZHJ',
    clientSecret: 'wxGl3hjeCsg5YKickQaHrfwKl24mwwNC6KMIuamhDYCvJ5rjSRmNkwXF1PLTRgO4',
})