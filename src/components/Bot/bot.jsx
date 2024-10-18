import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import { Modal } from 'react-bootstrap';
import './BotAvatar.css'

const Bot = () => {
    const [openChat, setOpenChat] = useState(false)

    const onClickButton = () => {
        if (openChat) {
            setOpenChat(false)
        }
        else {
            setOpenChat(true)
        }
    }
    return (
        <>
            <div className="fixed bottom-2 right-0 mb-10 mr-2 w-96 z-50">
                {openChat && (
                    <div className="App w-full">
                        <div className="relative">
                            <button
                                className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800 z-50"
                                onClick={onClickButton}
                            >
                                X
                            </button>
                            <Chatbot
                                config={config}
                                messageParser={MessageParser}
                                actionProvider={ActionProvider}
                            />
                        </div>
                    </div>
                )}

                {!openChat && (
                    <button
                        className="fixed bottom-2 right-1 sm:bottom-10 sm:right-10 bg-green-500 text-white p-3 shadow-lg rounded-full pointer-events-auto z-50"
                        onClick={onClickButton}
                    >
                        Connect
                    </button>
                )}
            </div>
        </>
    )
}
export default Bot