import { useEffect, useState } from 'react'
import Link from 'next/link'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	
	useEffect(() => {
		isMenuOpen ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll');
	}, [isMenuOpen])

	return (
		<>
			<header className="fixed top-0 left-0 right-0 bg-white z-20">
				<div className="flex py-8 px-10 justify-between items-center">
					<Link href="/">
						<a className="font-medium text-xl bottom-bar-on-hover">
							andré viallon
						</a>
					</Link>
					<div className="hidden sm:flex">
						<Link href="/">
							<a className="font-medium text-lg bottom-bar-on-hover">
								portfolio
							</a>
						</Link>
						<Link href="/about">
							<a className="font-medium text-lg ml-10 bottom-bar-on-hover">
								about
							</a>
						</Link>
						<a href={'resume.pdf'} target="_blank" rel="noreferrer" className="font-medium text-lg ml-10 bottom-bar-on-hover">
							resume
						</a>
					</div>
					<div className="flex sm:hidden cursor-pointer">
						{isMenuOpen ? (
							<span className="font-medium" onClick={() => setIsMenuOpen(false)}>close</span>
						) : (
							<span className="font-medium" onClick={() => setIsMenuOpen(true)}>menu</span>
						)}
					</div>
				</div>
			</header>

			{isMenuOpen && (
				<div className="fixed top-0 right-0 left-0 bottom-0 bg-white sm:hidden flex justify-center items-center z-10">
					<div className="flex flex-col items-center mt-12">
						<Link href="/">
							<a className="font-medium text-2xl mb-10" onClick={() => setIsMenuOpen(false)}>
								portfolio
							</a>
						</Link>
						<Link href="/about">
							<a className="font-medium text-2xl mb-10" onClick={() => setIsMenuOpen(false)}>
								about
							</a>
						</Link>
						<a href={'resume.pdf'} target="_blank" rel="noreferrer" className="font-medium text-2xl mb-10" onClick={() => setIsMenuOpen(false)}>
							resume
						</a>
					</div>
				</div>
			)}
		</>
	)
}

export default Header