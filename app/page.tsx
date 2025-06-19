"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Brain,
  Globe,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "C++", category: "Programming", icon: Code },
    { name: "Python", category: "Programming", icon: Code },
    { name: "HTML/CSS", category: "Web", icon: Globe },
    { name: "JavaScript", category: "Web", icon: Globe },
    { name: "React", category: "Web", icon: Globe },
    { name: "Node.js", category: "Backend", icon: Database },
    { name: "scikit-learn", category: "ML", icon: Brain },
    { name: "TensorFlow", category: "ML", icon: Brain },
    { name: "Git", category: "Tools", icon: Code },
    { name: "SQL", category: "Database", icon: Database },
  ]

  const projects = [
    {
      title: "Machine Learning Classifier",
      description: "Built a classification model using scikit-learn to predict student performance with 85% accuracy.",
      tech: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
      github: "#",
      demo: "#",
    },
    {
      title: "Personal Finance Tracker",
      description: "Web application for tracking expenses and income with interactive charts and budget planning.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive tool to visualize sorting and searching algorithms with step-by-step execution.",
      tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-cyan-400">Parth Kapoor</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-cyan-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 capitalize transition-colors ${
                    activeSection === section ? "text-cyan-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold">
              PK
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-cyan-400">Parth Kapoor</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Computer Engineering Student & Aspiring Software Developer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about software development, machine learning, and web technologies. Currently pursuing my degree
            while building innovative projects and expanding my technical skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a href="mailto:parth@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a first-year Computer Engineering student with a deep passion for technology and innovation. My
                journey in programming began with curiosity about how software works, and it has evolved into a genuine
                love for creating solutions that make a difference.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I specialize in software development with a focus on web technologies and machine learning. I enjoy
                tackling complex problems and turning ideas into functional, user-friendly applications.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or learning about the latest developments in AI and machine learning.
              </p>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Download className="mr-2" size={16} />
                Download Resume
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white font-semibold">Bachelor of Computer Engineering</p>
                  <p className="text-gray-400">First Year Student</p>
                  <p className="text-gray-400">Expected Graduation: 2027</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      Software Development
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      Machine Learning
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      Web Technologies
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                      Open Source
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <Card key={index} className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-colors group">
                  <CardContent className="p-6 text-center">
                    <IconComponent
                      className="mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform"
                      size={32}
                    />
                    <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.category}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-cyan-400 group-hover:text-cyan-300">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} className="text-gray-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities, collaborations, and conversations about technology. Whether
                you have a project in mind or just want to chat about the latest in tech, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-cyan-400" size={20} />
                  <span className="text-gray-300">parth.kapoor@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-cyan-400" size={20} />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-cyan-400" size={20} />
                  <span className="text-gray-300">Mumbai, India</span>
                </div>
              </div>
            </div>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">© 2024 Parth Kapoor. Built with Next.js and Tailwind CSS.</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:parth@example.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
