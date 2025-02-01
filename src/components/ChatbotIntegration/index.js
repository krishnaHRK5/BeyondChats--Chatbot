import React from 'react'

const ChatbotIntegration = () => {
  const handleTestChatbot = () => {
     window.open('https://example-client-website.com', '_blank');
  }

  const handleIntegration = () => {
    alert('Copy this code and paste it within the <head> tag of your website:\n\n<script src="https://beyondchats.com/chatbot.js"></script>');
  }

  const handleTestIntegration = () => {
     const success = true; 
        setIntegrationStatus(success ? 'success' : 'failure');
  }

  return (
    <div>
      <h2>Chatbot Integration & Testing</h2>
      <button onClick={handleTestChatbot}>Test Chatbot</button>
      <button onClick={handleIntegration}>Integrate on your website</button>
      <button onClick={handleTestIntegration}>Test Integration</button>
    </div>
  )
}

export default ChatbotIntegration
