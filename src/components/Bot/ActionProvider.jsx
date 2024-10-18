import React from 'react'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
 
  const handleHello = () => {
    const message = createChatBotMessage('Hello. Nice to meet you.')
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

   const applyForVendorFinancingHandler = () => {
        const message = createChatBotMessage("To apply for vendor financing, please click the login button on our website. Once logged in, you'll have to complete your kyc and move to vendor financing section");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
    }

  const checkFinancingStatusHandler = () => {
        const message = createChatBotMessage("To check the status of your financing application, please log in to your account and navigate to the 'Application Status' section, It's sensitive information we cant show it here, sorry for inconvience");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }))
                }

  const helloWorldHandler = () => {
        const message = createChatBotMessage("Hello! How can I assist you today?");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }))
                }


  const viewRepaymentScheduleHandler = () => {
        const message = createChatBotMessage("To view your repayment schedule, log in to your account and go to the 'Repayment Schedule' section.");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }))
                }


   const getHelpWithFinancingHandler = () => {
        const message = createChatBotMessage("For assistance with financing, please contact our support team through the 'Help & Support' section in your account.");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }))
                }


   const paymentReminderHandler = () => {
        const message = createChatBotMessage("If you need a payment reminder, please make sure to check your email or log in to your account for the latest reminders.");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }))
        }


   const uploadDocumentsHandler = () => {
        const message = createChatBotMessage("To upload documents, log in to your account and navigate to the 'Document Upload' section.");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }))
                }


    const matchWithVendorsOrBuyersHandler = () => {
        const message = createChatBotMessage("To match with vendors or buyers, please log in and use the 'Matchmaking' tool available in your account.");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }))
                }


    const matchWithVendorsOrBuyers = () => {
        const message = createChatBotMessage("Using of bad words is prohibited,vaise teri bhi maa bhen ki hoti hai ");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }))
  }


    const defaultHandler = () => {
        const message = createChatBotMessage("I'm sorry, I didn't understand that. Can you please provide more details.");
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }))
        }
        
    const handleInappropriateLanguage = () => {
      const message=createChatBotMessage("I'm sorry")
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }))
    }

    const setChatbotState = (incomingmessage) => {
      const message=createChatBotMessage(incomingmessage)
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }))
    }

    
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            applyForVendorFinancingHandler,
            checkFinancingStatusHandler,
            helloWorldHandler,
            viewRepaymentScheduleHandler,
            getHelpWithFinancingHandler,
            paymentReminderHandler,
            uploadDocumentsHandler,
            matchWithVendorsOrBuyersHandler,
            matchWithVendorsOrBuyers,
            defaultHandler,
            handleInappropriateLanguage,
            setChatbotState
          },
        });
      })}
    </div>
  )
}
export default ActionProvider;





// class ActionProvider {
//     constructor(createChatBotMessage, setStateFunc) {
//         this.createChatBotMessage = createChatBotMessage;
//         this.setState = setStateFunc;
//     }

//     helloWorldHandler = () => {
//         const message = this.createChatBotMessage("Hello! How can I assist you today?");
//         this.setChatbotState(message);
//     }

//     applyForVendorFinancingHandler = () => {
//         const message = this.createChatBotMessage("To apply for vendor financing, please click the login button on our website. Once logged in, you'll have to complete your kyc and move to vendor financing section");
//         this.setChatbotState(message)
//     }

//     checkFinancingStatusHandler = () => {
//         const message = this.createChatBotMessage("To check the status of your financing application, please log in to your account and navigate to the 'Application Status' section, It's sensitive information we cant show it here, sorry for inconvience");
//         this.setChatbotState(message)
//     }

//     viewRepaymentScheduleHandler = () => {
//         const message = this.createChatBotMessage("To view your repayment schedule, log in to your account and go to the 'Repayment Schedule' section.");
//         this.setChatbotState(message);
//     }

//     getHelpWithFinancingHandler = () => {
//         const message = this.createChatBotMessage("For assistance with financing, please contact our support team through the 'Help & Support' section in your account.");
//         this.setChatbotState(message);
//     }

//     paymentReminderHandler = () => {
//         const message = this.createChatBotMessage("If you need a payment reminder, please make sure to check your email or log in to your account for the latest reminders.");
//         this.setChatbotState(message);
//     }

//     uploadDocumentsHandler = () => {
//         const message = this.createChatBotMessage("To upload documents, log in to your account and navigate to the 'Document Upload' section.");
//         this.setChatbotState(message);
//     }

//     matchWithVendorsOrBuyersHandler = () => {
//         const message = this.createChatBotMessage("To match with vendors or buyers, please log in and use the 'Matchmaking' tool available in your account.");
//         this.setChatbotState(message);
//     }

//     matchWithVendorsOrBuyers = () => {
//         const message = this.createChatBotMessage("Using of bad words is prohibited,vaise teri bhi maa bhen ki hoti hai ");
//         this.setChatbotState(message);
//     }
    
//     defaultHandler = () => {
//         const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Can you please provide more details or choose an option from the menu?");
//         this.setChatbotState(message);
//     }

//     setChatbotState = (message) => {
//         this.setState(state => ({
//             ...state,
//             messages: [...state.messages, message],
//         }));
//     }
// }

// export default ActionProvider;