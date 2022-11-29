import Cookies from 'js-cookie'
import 'antd/dist/antd.css'
import { message } from 'antd';
import { fetchstatics } from '../api';

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