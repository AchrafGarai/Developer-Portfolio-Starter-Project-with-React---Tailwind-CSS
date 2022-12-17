import { Project } from '../data/posts'
import { Link } from 'react-router-dom'

function ProjectCard({ title, description, image, slug }: Project) {
  return (
    <Link to={`/projects/${slug}`}>
      <div className="border border-slate-100 rounded-lg overflow-hidden">
        <img src={image} className=" object-cover w-full h-96 mb-4" alt="" />
        <div className="p-4">
          <p className="mb-4 text-2xl font-bold text-gray-800">{title}</p>
          <p className="text-lg text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
