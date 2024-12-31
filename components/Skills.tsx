import { Badge } from '@/components/ui/badge'

const skills = [
  "JavaScript", "TypeScript", "React","React Native", "Node.js", "Express.js", "Django",
  "HTML5", "CSS3", "Tailwind CSS", "RESTful APIs", "SQL",
  "Python", "Flask", "Java", "C++", "Angular", "Vue.js", "Next.js"
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="text-lg py-2 px-4">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

