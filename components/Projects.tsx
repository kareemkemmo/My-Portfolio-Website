import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: "Huffman Code",
    description: "Implemented a lossless data compression algorithm using binary search trees. Built with C++, this project demonstrates efficient data structure usage with binary trees, stacks, and maps for encoding and decoding data.",
    technologies: ["C++", "Binary Search Trees", "Data Structures", "Algorithms"],
    link: "https://github.com/kareemkemmo/Huffman-Code-Project-Demo"
  },
  {
    title: "Dijkstra's Algorithm",
    description: "A pathfinding algorithm implementation that computes the shortest path between vertices. Uses priority queues for efficient path calculation and demonstrates advanced algorithm concepts.",
    technologies: ["C++", "Data Structures", "Graph Theory", "Algorithms"],
    link: "https://github.com/kareemkemmo/Dijkstras-algorithm"
  },
  {
    title: "Arabicly",
    description: "A language learning application built with Python, featuring interactive word quizzes and flashcards. Utilizes Tkinter for the UI and Pandas for efficient data management.",
    technologies: ["Python", "Tkinter", "Pandas", "CSV"],
    link: "https://github.com/kareemkemmo/Arabicly"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    {project.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

