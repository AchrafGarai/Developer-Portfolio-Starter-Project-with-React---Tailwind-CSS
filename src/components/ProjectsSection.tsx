import { projects } from '../data/posts'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <div
      id="projectsSection"
      className="my-8 py-8 grid grid-cols-1 gap-8 md:grid-cols-2"
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          image={project.image}
          description={project.description}
          slug={project.slug}
        />
      ))}
    </div>
  )
}

export default ProjectsSection
