import React, { useState } from 'react'
import { matchPassword } from '../helpers/validators'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [role, setRole] = useState("reader")
  const navigate = useNavigate()

  const handleRegister = (event) => {
    event.preventDefault()

    const data = event.target.elements

    const password = data.password.value
    const confirmPassword = data.confirmPassword.value

    if (!matchPassword(password, confirmPassword)) {
      alert("Password doesn't match")
      return
    }

    const userData = {
      firstName: data.firstName.value,
      lastName: data.lastName.value,
      phone: data.phone.value,
      email: data.email.value,
      password,
      role
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || []

    localStorage.setItem(
      "users",
      JSON.stringify([...existingUsers, userData])
    )

    navigate("/login")
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Krijo llogarinë tënde
            </h1>

            <div className="mt-6 flex gap-4">
              <button
                type="button"
                onClick={() => setRole("reader")}
                className={`px-6 py-2 rounded-lg ${role === "reader" ? "bg-blue-500 text-white" : "border"}`}
              >
                Lexues
              </button>

              <button
                type="button"
                onClick={() => setRole("librarian")}
                className={`px-6 py-2 rounded-lg ${role === "librarian" ? "bg-blue-500 text-white" : "border"}`}
              >
                Bibliotekar
              </button>
            </div>

            <form onSubmit={handleRegister} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">

              <input name="firstName" type="text" placeholder="Emri" className="input" />
              <input name="lastName" type="text" placeholder="Mbiemri" className="input" />
              <input name="phone" type="text" placeholder="Telefoni" className="input" />
              <input name="email" type="email" placeholder="Email" className="input" />

              <input name="password" type="password" placeholder="Fjalëkalimi" className="input" />
              <input name="confirmPassword" type="password" placeholder="Konfirmo fjalëkalimin" className="input" />

              <button type="submit" className="col-span-2 bg-blue-500 text-white py-3 rounded-lg">
                Regjistrohu
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Register