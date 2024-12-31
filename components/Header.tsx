"use client"

import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <nav className="flex flex-1 items-center justify-between">
          <a href="#" className="text-lg font-semibold">Kareem Elhemaly</a>
          <ul className="flex space-x-4">
            <li><a href="#projects" className="hover:text-primary">Projects</a></li>
            <li><a href="#skills" className="hover:text-primary">Skills</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </nav>
        <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
          {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">Toggle dark mode</span>
        </Button>
      </div>
    </header>
  )
}

