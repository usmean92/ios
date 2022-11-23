import { signup, signin, forgotpassword, resetpassword } from '../api/index'
import Cookies from 'js-cookie'
import 'antd/dist/antd.css'
import { message } from 'antd';


export const register = async ({ setUser, values, setError, setLoading }) => {
  try {
    setLoading(true)
    let response = await signup({ name: values.name, email: values.email, password: values.password, profile_image: values.profile_image })
    if (response.data.message === false) {
      message.error(response.data.error)
      setError(true)
      setLoading(false)
    } else {
      setUser(response.data.user)
      Cookies.set('token', response.data.token);
    }
  } catch (err) {
    console.log(err.message)
  }
  // finally {
  //   setLoading(false)
  // }
}

export const login = async ({ setUser, email, password, setLoading }) => {

  try {
    setLoading(true)
    let response = await signin({ email, password })
    if (response.data.message === false) {
      message.error(response.data.error)
    } else {
      setUser(response.data.user)
      Cookies.set('token', response.data.token)
    }
  } catch (err) {
    console.log(err.message)
  } finally {
    setLoading(false)
  }
}

export const forgotPassword = async ({ setLoading, email, setResetCode }) => {
  setLoading(true)
  let response = await forgotpassword({ email })
  if (response.data.message === false) {
    message.error(response.data.error)
    setLoading(false)

  } else {
    setResetCode(response.data.resetCode)
    setLoading(false)
    message.success(response.data.success)
  }

}

export const resetPassword = async ({ setLoading, email, password }) => {
  setLoading(true)
  let response = await resetpassword({ email, password })
  if (response.data.message === false) {
    message.error(response.data.error)
  } else {
    setLoading(false)
    message.success(response.data.success)
  }
}