import Cookies from 'js-cookie'
import 'antd/dist/antd.css'
import { message } from 'antd';
import { fetchchildrens, registerchild } from '../api';

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
