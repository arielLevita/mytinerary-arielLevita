/* This code is setting the value of the `apiUrl` variable based on the environment in which the code
is running. */
let apiUrl = 'http://localhost:3000/api'

if (process.env.NODE_ENV ==='production' ) {
apiUrl = import.meta.env.VITE_APP_BACK_URL
}

export default apiUrl