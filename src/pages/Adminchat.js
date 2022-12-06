import React, { useState, useEffect } from 'react';
import Adminsidebar from '../components/Adminsidebar';
import AdminTopnav from '../components/AdminTopnav';
import Adminfooter from '../components/Adminfooter';
import { fetchconversation, fetchparent } from '../api';
import { createConversation } from '../helpers/chat';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import 'antd/dist/antd.css'
import { message } from 'antd';
import { ClipLoader } from 'react-spinners';

const chatList = [
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    email: 'support@gmail.com',
    status: '',
    des: 'Whats up how are you?',
    attach: '',
    time: '12:45 PM',
  },
  {
    imageUrl: 'user.png',
    name: 'Victor Exrixon',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '1:13 PM',
  },
  {
    imageUrl: 'user.png',
    name: 'Surfiya Zakir',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '2:45 PM',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    email: 'support@gmail.com',
    status: '',
    des: 'Whats up how are you?',
    attach: '',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Victor Exrixon',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '1:13 PM',
  },
  {
    imageUrl: 'user.png',
    name: 'Surfiya Zakir',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '2:45 PM',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    email: 'support@gmail.com',
    status: '',
    des: 'Whats up how are you?',
    attach: '',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Goria Coast',
    email: 'support@gmail.com',
    status: 'bg-success',
    des: 'Whats up how are you?',
    attach: '2',
    time: '',
  },
  {
    imageUrl: 'user.png',
    name: 'Hurin Seary',
    email: 'support@gmail.com',
    status: '',
    des: 'Whats up how are you?',
    attach: '',
    time: '',
  },
];

const Adminchat = () => {

  const [conversations, setConversation] = useState()
  const [loading, setLoading] = useState(false)
  const [parents, setParents] = useState([])
  const [current, setCurrent] = useState(chatList[0])
  const [messages, setMessages] = useState([])
  const [chat, setChat] = useState('')

  var decoded = jwt_decode(Cookies.get('admintoken'))

  useEffect(async () => {
    let response = await fetchconversation({ recieverId: decoded.id })
    if (response.data.message === false) {
      message.error(response.data.error)
    } else {
      setConversation(response.data.conversation)
      let response2 = await fetchparent({ conversations: response.data.conversation })
      if (response2.data.message !== false) {
        setParents(response2.data.parents)
        setCurrent(response2.data.parents[0])
        response.data.conversation.map((item) => {
          if (item.sender == response2.data.parents[0]._id) {
            setMessages(item.messages)
          }
        })
      }
    }
  }, [])

  const changeInbox = (value) => {
    setCurrent(value)
    conversations.map((item) => {
      if (item.sender == value._id) {
        setMessages(item.messages)
      }
    })
  }

  const sendMessage = () => {
    createConversation({ senderId: current._id, chat, setLoading, setConversation, role: 'admin' })
    setChat('')
    window.location.reload()
  }

  return (
    <>
      <div id="wrapper">
        <Adminsidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <AdminTopnav />

            <div className="container px-3 py-4">
              <div className="row">
                <div className="col-lg-6 col-xl-4 col-md-6 chat-left scroll-bar border-right-light pl-4 pr-4 bg-white rounded-10 theme-dark-bg">

                  <div className="section full mt-2 mb-2 pl-3">
                    <ul className="list-group list-group-flush">
                      {parents.length !== undefined
                        ?
                        parents.map((value, index) => (
                          <li
                            key={index}
                            className="bg-green list-group-item no-icon pl-0"
                            onClick={(e) => {
                              e.preventDefault()
                              changeInbox(value)
                            }}
                          >
                            <figure className="avatar float-left mb-0 mr-3">
                              <img
                                src={`assets/images/user.png`}
                                alt="avater"
                                className="w45 rounded-circle"
                              />
                            </figure>
                            <h3 className="fw-600 mb-0 mt-1">
                              <a
                                className="font-xsss fw-700 text-grey-900 text-dark d-block"
                                href="/admin-chat"
                              >
                                {value.name}
                              </a>
                            </h3>
                            <span className="d-block fw-400" style={{ fontSize: 10 }}>
                              {value.email}
                            </span>
                            {/* <span className="badge mt-0 text-grey-500 badge-pill">
                              {value.time}
                            </span> */}
                          </li>
                        )) : <ClipLoader />}
                    </ul>
                  </div>
                </div>



                {/* <ChatDisplay current={current} conversations={conversations} /> */}
                {parents.length !== undefined &&
                  <div className="col-lg-6 col-xl-8 col-md-6 pl-0 pr-0 d-none d-lg-block d-md-block bg-white rounded-10 posr">
                    <div className="chat-wrapper pt-0 w-100 position-relative bg-white theme-dark-bg mb-5" style={{ height: 500 }}>
                      <div className="chat-body p-3 ">
                        <div className="messages-content">
                          {messages.map((item, index) => (
                            <>
                              <div className={`message-item ${item.user !== decoded.id && 'outgoing-message'}`}>
                                <div className="message-user">
                                  <figure className="avatar">
                                    <img
                                      src="assets/images/user.png"
                                      alt="avater"
                                    />
                                  </figure>
                                  <div>
                                    <h5>{item.user !== decoded.id ? current.name : 'Maktub Admin'}</h5>
                                    <div className="time">{item.time}</div>
                                  </div>
                                </div>
                                <div className="message-wrap">
                                  {item.text}
                                </div>
                              </div>
                            </>

                          ))}
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg"
                      style={{ width: '98%' }}
                    >
                      <form className="chat-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Start typing.."
                            className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 pl-3"
                            value={chat}
                            onChange={(e) => setChat(e.target.value)}
                          />
                        </div>
                        <button className="bg-current mt-1" onClick={() => sendMessage()}>
                          <i className="ti-arrow-right text-white"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                }
              </div>
            </div>

            <Adminfooter />
          </div>
        </div>
      </div>
    </>
  );
}


export default Adminchat;
