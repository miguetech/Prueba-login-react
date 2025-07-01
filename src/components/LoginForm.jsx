import React, { useState } from 'react'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import RememberMe from './RememberMe'
import ForgotPassword from './ForgotPassword'
import SubmitButton from './SubmitButton'
import SignUpLink from './SignUpLink'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password, rememberMe })
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <div className="flex items-center justify-between">
        <RememberMe rememberMe={rememberMe} setRememberMe={setRememberMe} />
        <ForgotPassword />
      </div>
      <SubmitButton />
      <SignUpLink />
    </form>
  )
}

export default LoginForm
