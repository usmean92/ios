import Cookies from 'js-cookie'
import 'antd/dist/antd.css'
import { message } from 'antd';
import { fetchconversation, postconversation } from '../api';
import { ADMINID } from '../api/urls';

export const createConversation = async ({ senderId, setConversation, setCheck, check, chat, setLoading, role }) => {
  setLoading(true)
  try {
    let response = await postconversation({ senderId, recieverId: ADMINID, chat, role })
    if (response.data.message === false) {
      message.error(response.data.error)
    } else {
      // setConversation(response.data.conversation)
      setCheck(!check)
    }
  } catch (err) {
    console.log('err: ', err.message)
  } finally {
    setLoading(false)
  }
}

export const fetchConversation = async ({ senderId, recieverId, setConversation, setLoading }) => {
  setLoading(true)
  try {
    let response = await fetchconversation({ senderId, recieverId })
    if (response.data.message === false) {
      message.error(response.data.error)
    } else {
      setConversation(response.data.conversation[0])
    }
  } catch (err) {
    console.log('err: ', err.message)
  } finally {
    setLoading(false)
  }

}
