import Project from '../model/project'
import Image from 'next/image'

interface Props {
  project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div>
      <div className="relative w-full h-full shadow-lg">
        <Image src={`/${project.imagePath}.png`} alt="Avatar" layout="responsive" height={200} width={200} />
      </div>
      <p className="text-xl font-semibold mt-4">{project.title}</p>
      <p className="text-gray-500 mt-2">{project.description}</p>
      <div className="mt-4">
        <a className="font-semibold hide-bottom-bar-on-hover">live demo</a>
        <a className="font-semibold hide-bottom-bar-on-hover ml-6">see code</a>
      </div>
    </div>
  )
}

export default ProjectCard