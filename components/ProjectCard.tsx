import Project from '../model/project'
import Image from 'next/image'

interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <div className="shadow-lg rounded-xl" style={{ zIndex: -1 }}>
        <Image src={`/${project.imagePath}.png`} alt={`${project.title}`} layout="responsive" height={130} width={200} objectFit="cover" className="rounded-xl" />
      </div>
      <p className="text-xl font-semibold mt-6">{project.title}</p>
      <p className="text-gray-500 mt-4 leading-7">{project.description}</p>
      <div className="mt-4">
        <a target="_blank" href={project.websiteLink} rel="noopener noreferrer" className="font-semibold hide-bottom-bar-on-hover">live demo</a>
        <a target="_blank" href={project.githubLink} rel="noopener noreferrer" className="font-semibold hide-bottom-bar-on-hover ml-6">see code</a>
      </div>
    </div>
  )
}

export default ProjectCard