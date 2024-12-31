import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Kareem Elhemaly</h1>
        <p className="text-xl mb-8">Computer Engineering Student at University of South Florida</p>
        <p className="mb-8 max-w-2xl mx-auto">
        Specializing in full-stack development, algorithm design, and embedded systems. Whether I'm building advanced data structures or designing intuitive user interfaces, my work is driven by creativity, precision, and a desire to make a lasting impact.
        </p>
        <Button asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}

