import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { ArrowLeft, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'salon';
  timestamp: Date;
}

export const Chat: React.FC = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello Camille! How can I help you today?", sender: 'salon', timestamp: new Date(2023, 4, 13, 13, 31) },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate salon response
      setTimeout(() => {
        const salonResponse: Message = {
          id: messages.length + 2,
          text: "Thank you for your message. How else can I assist you?",
          sender: 'salon',
          timestamp: new Date(),
        };
        setMessages(prevMessages => [...prevMessages, salonResponse]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-4 flex items-center border-b">
        <Button variant="ghost" className="mr-2" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center">
          <span className="text-xs">JC</span>
        </div>
        <div>
          <h1 className="font-semibold">Julie Coiffure</h1>
          <p className="text-sm text-gray-500">Salon</p>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
            }`}>
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message input */}
      <div className="bg-white p-4 border-t">
        <div className="flex items-center">
          <Input
            type="text"
            placeholder="Type a message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 mr-2"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
