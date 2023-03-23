import { useState } from 'react';
import LOGO from '../assets/svgs/LOGO.svg';
import menuIcon from '../assets/svgs/menu-icon.svg';

export default function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="flex max-w-screen-2xl justify-between px-[10%] py-6 md:items-center lg:mx-auto lg:ml-auto lg:w-full lg:px-[5%] 2xl:px-0">
			<a href="#">
				<img src={LOGO} alt="logo" />
			</a>

			<ul className="hidden flex-col gap-x-7 font-text text-[19px] leading-5 text-white md:flex md:flex-row lg:gap-x-[100%]">
				<li>
					<a href="#">Features</a>
				</li>

				<li>
					<a href="#">News</a>
				</li>
			</ul>

			<div className="hidden gap-x-4 md:flex">
				<a
					href="#"
					className="flex h-10 items-center border border-solid border-chartreuse px-6 text-chartreuse"
				>
					Sign up
				</a>
				<a
					href="#"
					className="flex h-10 items-center border border-solid border-chartreuse bg-chartreuse px-6"
				>
					Log in
				</a>
			</div>

			<button className="block md:hidden" onClick={handleMenuToggle}>
				<img src={menuIcon} alt="menu icon" />
			</button>
		</nav>
	);
}
