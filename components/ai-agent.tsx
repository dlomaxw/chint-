"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AIAgent() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    { role: 'assistant', content: 'Hello! I am CHINT Smart Assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
    
    const userMsg = input
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm having trouble connecting to the network. Please try again later." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px]"
          >
            <Card className="premium-card shadow-2xl border-none overflow-hidden">
              <CardHeader className="bg-[#0B1C2C] text-white p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#C8A96A] p-2 rounded-xl">
                      <Bot className="h-5 w-5 text-[#0B1C2C]" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">CHINT Smart AI</CardTitle>
                      <p className="text-[10px] text-[#C8A96A] font-bold uppercase tracking-widest">Expert Assistant</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 rounded-full">
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0 bg-white">
                <div className="h-[400px] overflow-y-auto p-6 space-y-6">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                        m.role === 'user' 
                          ? 'bg-[#0B1C2C] text-white rounded-tr-none' 
                          : 'bg-[#F8F9FB] text-[#0B1C2C] rounded-tl-none border border-[#F8F9FB]'
                      }`}>
                        {m.content}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex justify-start">
                      <div className="bg-[#F8F9FB] p-4 rounded-2xl rounded-tl-none border border-[#F8F9FB]">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full animate-bounce" />
                          <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full animate-bounce [animation-delay:0.2s]" />
                          <span className="w-1.5 h-1.5 bg-[#C8A96A] rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-[#F8F9FB] border-t">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Ask about products or installation..." 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      className="bg-white border-none rounded-xl focus-visible:ring-1 focus-visible:ring-[#C8A96A]"
                    />
                    <Button onClick={handleSend} className="bg-[#C8A96A] hover:bg-[#C8A96A]/90 text-[#0B1C2C] rounded-xl h-12 w-12 p-0 shadow-lg shadow-[#C8A96A]/10">
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#0B1C2C] rounded-2xl flex items-center justify-center text-white shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-[#C8A96A] opacity-0 group-hover:opacity-10 transition-opacity" />
        {isOpen ? <X className="h-7 w-7" /> : <Sparkles className="h-7 w-7 text-[#C8A96A]" />}
      </motion.button>
    </div>
  )
}
