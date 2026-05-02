import React from 'react'
import { useNavigate } from 'react-router-dom'
import { isEmail } from "../helpers/validators"
import { useLocalStorage } from '@uidotdev/usehooks'

function Login() {
  const [users] = useLocalStorage('users', [])
  const [loggedin, setLoggedin] = useLocalStorage("loggedin", false)
  const [loggedinUser, setLoggedinUser] = useLocalStorage("user", null)

  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()

    const data = event.target.elements
    const email = data.email.value
    const password = data.password.value

    if (!isEmail(email)) {
      alert("Email address is not valid!")
      return
    }

    const user = users.find(
      (item) => item.email === email && item.password === password
    )

    if (!user) {
      alert("Invalid credentials!")
      return
    }

    setLoggedin(true)
    setLoggedinUser(email)

    navigate('/dashboard')
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-24 mx-auto lg:py-32">
        <div className="lg:flex">

          <div className="lg:w-1/2">
            <h1 className="text-2xl font-medium">
              login to your account
            </h1>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mt-0">

            <form onSubmit={handleLogin} className="w-full lg:max-w-xl">

              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="block w-full py-3 px-11 border rounded-lg"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="block w-full px-10 py-3 border rounded-lg"
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white bg-blue-500 rounded-lg"
                >
                  Sign in
                </button>
              </div>

            </form>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Login