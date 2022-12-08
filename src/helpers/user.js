import { signup, signin, forgotpassword, resetpassword, subscribepoems, getparentdetails, updateprofile } from '../api/index'
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
      Cookies.set('role', 'parent')
    }
  } catch (err) {
    console.log(err.message)
  } finally {
    setLoading(false)
  }
}

export const updateParentProfile = async ({ setLoading, setName, setPassword, data, setCheck }) => {
  try {
    setLoading(true)
    let response = await updateprofile({ data })
    if (response.data.message === false) {
      message.error(response.data.error)
    } else {
      setName(response.data.user.name)
      setPassword(response.data.user.password)
      message.success('Profile Updated')
      setCheck(true)
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

export const getDetails = async ({ setName, setEmail, setPassword }) => {
  let response = await getparentdetails()
  if (response.data.message === false) {
    message.error(response.data.error)
  } else {
    setName(response.data.user.name)
    setEmail(response.data.user.email)
    setPassword(response.data.user.password)
  }
}

export const getSubscribed = async () => {
  let response = await subscribepoems()
  if (response.data.message === false) {
    message.error(response.data.error)
  } else {
    Cookies.remove('token')
    Cookies.set('token', response.data.token)
    window.location.href = response.data.url;
  }
}