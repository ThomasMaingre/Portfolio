'use client'

import { useState } from 'react'
import About from '@/components/About'
import CareerTimeline from '@/components/CareerTimeline'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import SelfEvaluation from '@/components/SelfEvaluation'
import Contact from '@/components/Contact'

export default function Home() {

  return (
    <div>
      <main>
        <About />
        <CareerTimeline />
        <Skills />
        <Projects />
        <SelfEvaluation />
        <Contact />
      </main>
    </div>
  )
}