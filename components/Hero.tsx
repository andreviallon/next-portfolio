interface Props {
  scrollToPortfolio: () => void;
}

const Hero: React.FC<Props> = ({ scrollToPortfolio }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="mb-12 sm:mb-28">
        <div className="mb-6">
          <p className="text-3xl sm:text-5xl mb-2 sm:mb-4 font-medium">hi there!</p>
          <p className="text-3xl sm:text-5xl mb-2 sm:mb-4 font-medium">my name is andré</p>
          <p className="text-3xl sm:text-5xl mb-2 sm:mb-4 font-medium">i’m a frontend engineer.</p>
        </div>
        <div className="w-full sm:w-5/6 lg:w-1/2 leading-8">
          <span className="text-gray-500">
            Welcome to my portfolio. Here you can have a look at my personal work and learn more about me. You can also see more of my coding projects on <a className="hide-bottom-bar-on-hover" href="https://github.com/andreviallon" target="_blank" rel="noreferrer">github</a>, connect with my on <a className="hide-bottom-bar-on-hover bold" href="https://www.linkedin.com/in/andre-viallon" target="_blank" rel="noreferrer">linkedin</a> or simply send me an <a className="hide-bottom-bar-on-hover bold" href="mailto:viallon.andre@gmail.com" rel="noopener noreferrer">email</a>.
          </span>
        </div>
      </div>
      <div className="absolute bottom-6">
        <a className="text-lg font-semibold hide-bottom-bar-on-hover" onClick={scrollToPortfolio}>see portfolio</a>
      </div>
    </div>
  )
}

export default Hero