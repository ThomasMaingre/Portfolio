'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await emailjs.send(
        'service_wzxkn3t',
        'template_37hi5rt',
        {
          from_name: name,
          to_name: "Thomas",
          message: message,
          reply_to: email
        },
        'vSVRxWyyTthUggQg4'
      )
      setSubmitStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 text-white" style={{ backgroundColor: '#0d1225' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>

        <p className="text-xl mb-12 max-w-2xl mx-auto text-center">
          Vous avez un projet passionnant ou une opportunité à discuter ?
          N'hésitez pas à me contacter, je serais ravi d'échanger avec vous !
        </p>

        <div className="max-w-xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Nom</Label>
              <Input
                id="name"
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 bg-gray-600/50 border-gray-500"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 bg-gray-600/50 border-gray-500"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Votre message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 bg-gray-600/50 border-gray-500"
                rows={5}
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black hover:bg-gray-900"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              <Send className="ml-2 h-5 w-5" />
            </Button>
            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Message envoyé avec succès !</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Erreur lors de l'envoi du message. Veuillez réessayer.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}