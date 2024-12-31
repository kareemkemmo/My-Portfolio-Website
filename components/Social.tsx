import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

export default function Social() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect with Me</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="outline">
            <a href="https://github.com/kareemkemmo" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://www.linkedin.com/in/kareem-elhemaly-9368b9234/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="mailto:kareemelhemaly@usf.edu">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="My-Portfolio-Website/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

