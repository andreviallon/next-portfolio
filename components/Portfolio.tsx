import Project from '../model/project'
import ProjectCard from './ProjectCard'

const Portfolio = () => {
  const projects: Project[] = [
    {
        title: 'invoice app',
        description: 'Full stack application to manage your invoices. This project was built using Next.js on the frontend and to create apis, Formik for form validation and a MongoDB database.',
        websiteLink: 'https://invoice-app-iota.vercel.app',
        githubLink: 'https://github.com/andreviallon/invoice-app',
        imagePath: "invoice-app"
    },
    {
        title: 'ip address tracker',
        description: 'Search for an IP address and get information about it, such as its location timezone and ISP. This project was built using Angular, NGXS as well as various third party apis such as leaflet and ip geolocation.',
        websiteLink: 'https://ip-address-tracker-orcin.vercel.app/',
        githubLink: 'https://github.com/andreviallon/ip-address-tracker',
        imagePath: "ip-address-tracker"
    },
    {
        title: 'calculator app',
        description: 'You\'re traditional calculator app... but with neat features, with handling for keyboard shortcuts and calculator chaining. This project was built using React and Next.js.',
        websiteLink: 'https://calculator-nine-sepia.vercel.app/',
        githubLink: 'https://github.com/andreviallon/calculator',
        imagePath: "calculator"
    }
  ];  

  return (
    <div>
      <h2 className="text-3xl font-semibold">portfolio</h2>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mt-12 mx-8 md:mx-12">
        {projects.map((project, index) => (
          <div className="row-span-1" key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio