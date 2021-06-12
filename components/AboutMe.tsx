import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className="flex flex-col justify-center  mx-8 md:mx-12">
      <h2 className="text-3xl font-semibold">about</h2>
      <div className="grid gap-16 grid-cols-1 lg:grid-cols-3 mt-8">
        <div className="col-span-2">
          <p className="text-gray-500 leading-7 mb-4">So, this is where I get to talk a bit about myself. My name is André. I’m a Frontend Developer with a great passion for creating beautiful, modern and intuitive User Interfaces.</p>
          <p className="text-gray-500 leading-7 mb-4">I’ve always wanted to push myself and learn more. That’s why I left France, my home country, to move to Denmark back in 2012 where I joined the International Baccalaureate in Sønderborg. I then went on with studying Web Development as well as UI design at the International Business Academy in Kolding.</p>
          <p className="text-gray-500 leading-7 mb-4">In my spare time, I enjoy playing the guitar (since the age of 12). The main thing playing a musical instrument taught me is that nothing comes easily. The only way to success is through dedication, discipline and hard work.</p>
          <p className="text-gray-500 leading-7 mb-4">I encourage you to checkout my resume to learn more about my past experiences and my skills.</p>
          <a href={'resume.pdf'} target="_blank" rel="noreferrer" className="font-semibold hide-bottom-bar-on-hover">open resume</a>
        </div>
        <div className="col-span-2 lg:col-span-1" style={{ zIndex: -1 }}>
          <Image src="/avatar.jpg" alt="avatar" layout="responsive" height={90} width={100} objectFit="cover" className="rounded-xl col-span-1" /> 
        </div>
      </div>
    </div>
  )
}

export default AboutMe
