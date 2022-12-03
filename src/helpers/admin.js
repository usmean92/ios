import Cookies from 'js-cookie'
import 'antd/dist/antd.css'
import { message } from 'antd';
import { fetchstatics, fetchparents, fetchAdminchildren } from '../api';

export const getStats = async ({ setLoading, setStats }) => {
  try {
    let response = await fetchstatics()
    if (response.data.message === false) {
      message.error(response.data.error)
    } else {
      setStats(response.data.stats)
    }
  } catch (err) {
    console.log('err: ', err.message)
  }
}

export const getParents = async ({ setParents, setLoading }) => {
  setLoading(true)
  try {
    let response = await fetchparents()
    if (response.data.message === false) {
      message.error(response.data.error)
    } else {
      setParents(response.data.parents)
    }
  } catch (err) {
    console.log('err: ', err.message)
  } finally {
    setLoading(false)
  }
}

export const getChildren = async ({ pid, setChildren, setLoading }) => {
  setLoading(true)
  try {
    let response = await fetchAdminchildren(pid)
    if (response.data.message === false) {
      // message.error(response.data.error)
    } else {
      console.log('ff: ', response.data.children)
      setChildren(response.data.children)
    }
  } catch (err) {
    console.log('err: ', err.message)
  } finally {
    setLoading(false)
  }
}