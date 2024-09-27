'use client'

import { useState } from 'react'
import { SendIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ChatInterface() {
  const [messages, setMessages] = useState([])  // Stores chat history
  const [inputValue, setInputValue] = useState('') // Stores input value
  const [loading, setLoading] = useState(false)    // Tracks loading state

  const handleSendMessage = async (e) => {
    e.preventDefault()

    if (inputValue.trim()) {
      const userMessage = { role: 'user', content: inputValue }

      // Add user's message to the chat
      setMessages((prevMessages) => [...prevMessages, userMessage])

      // Clear input and set loading state
      setInputValue('')
      setLoading(true)

      try {
        // Simulate API request
        const response = await fetch('http://127.0.0.1:5000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ input: inputValue })
        })

        const data = await response.json()

        const botMessage = { role: 'bot', content: data.answer }

        // Add bot's response to the chat
        setMessages((prevMessages) => [...prevMessages, botMessage])

      } catch (error) {
        console.error("Error fetching the response:", error)
      } finally {
        setLoading(false)  // Stop loading state after response
      }
    }
  }

  return (
    <div className="flex flex-col h-[600px] max-w-md mx-auto border rounded-lg overflow-hidden mt-9">
      <ScrollArea className="flex-grow p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}

        {/* Display skeleton chat message when loading */}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-lg p-3 bg-muted animate-pulse">
              <p className="text-sm bg-gray-300 h-4 rounded w-3/4"></p>
              <p className="text-sm bg-gray-300 h-4 rounded w-1/2 mt-2"></p>
            </div>
          </div>
        )}
      </ScrollArea>
      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask your Question..."
            className="flex-grow"
          />
          <Button type="submit" size="icon">
            <SendIcon className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </form>
    </div>
  )
}
