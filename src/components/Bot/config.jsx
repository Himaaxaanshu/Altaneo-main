import {
  createChatBotMessage,
  createCustomMessage,
} from 'react-chatbot-kit';

import CustomMessage from './CustomMessage';


const botName = 'Neobot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  
  botName: botName,
  initialMessages: [
    createChatBotMessage("Hi! Welcome to Altaneo. How we can help you."),
  ],
  state: {},
  customComponents: {
    botChatMessage: (props) => <CustomMessage {...props} />,
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
}

export default config;