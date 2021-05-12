import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="flex py-8 px-10 justify-between items-center">
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
					<Link href="/">
						<a className="font-medium text-lg ml-10 bottom-bar-on-hover">
							about
						</a>
					</Link>
					<Link href="/">
						<a className="font-medium text-lg ml-10 bottom-bar-on-hover">
							resume
						</a>
					</Link>
				</div>
				<div className="flex sm:hidden">
						{isMenuOpen ? (
							<span className="font-medium" onClick={() => setIsMenuOpen(false)}>close</span>
						) : (
							<span className="font-medium" onClick={() => setIsMenuOpen(true)}>menu</span>
						)}
				</div>
		</header>
	)
}

export default Header