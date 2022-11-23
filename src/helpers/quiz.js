import { fetchcoursequiz } from '../api/index'
import Cookies from 'js-cookie'
import 'antd/dist/antd.css'
import { message } from 'antd';

export const getCourseQuiz = async ({ title, setQuizes, setLoading }) => {
  try {
    setLoading(true)
    let response = await fetchcoursequiz({ title })
    if (response.data.message === false) {
      message.error(response.data.error)
    } else {
      setLoading(false)
      setQuizes(response.data.quizes[0])
    }
  } catch (err) {
    console.log(err.message)
  } finally {
    setLoading(false)
  }
}