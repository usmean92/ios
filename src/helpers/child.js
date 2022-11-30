import Cookies from 'js-cookie'
import 'antd/dist/antd.css'
import { message } from 'antd';
import { fetchchildrens, fetchpoems, registerchild, deletechild } from '../api';

export const register = async ({ data, setLoading, setError, setChild, child }) => {
  try {
    setLoading(true)
    let response = await registerchild({ data })
    if (response.data.message === false) {
      setError(response.data.error)
      message.error(response.data.error)
      setLoading(false)
    } else {
      setChild(response.data.child._id)
    }
  } catch (err) {
    console.log('err: ', err.message)
    setLoading(false)
  }
}

export const getChildren = async ({ setChildren, setLoading, setError, setChildCount }) => {
  try {
    setLoading(true)
    let response = await fetchchildrens()
    if (response.data.message === false) {
      setError(response.data.error)
    } else {
      setChildren(response.data.children)
      setChildCount(response.data.children.length)
    }
  } catch (err) {
    console.log('err: ', err.message)
  }
  finally {
    setLoading(false)
  }
}

export const childDelete = async ({ childId, check, setCheck }) => {
  let response = await deletechild(childId)
  if (response.data.message === false) {
    message.error(response.data.error)
  } else {
    setCheck(!check)
    message.success(response.data.success)
  }
}

export const getPoems = async ({ setPoems, setLoading }) => {

  setLoading(true)
  try {
    let response = await fetchpoems()
    if (response.data.message === false) {
      message.error(response.data.error)
    } else {
      setPoems(response.data.poems)
    }
  } catch (err) {
    message.error(err.message)
    console.log('err: ', err.message)
  }
  finally {
    setLoading(false)
  }
}
