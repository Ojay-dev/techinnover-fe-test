import LOGO from '../assets/svgs/LOGO.svg';

export default function NavBar() {
	return (
		<nav className="mx-auto w-5/6 max-w-screen-2xl py-6 lg:ml-auto lg:flex lg:w-full lg:items-center lg:justify-between">
			<a href="#">
				<img src={LOGO} alt="logo" />
			</a>

			<ul className="flex flex-col gap-x-[100%] font-text text-[19px] leading-5 text-white lg:flex-row">
				<li>
					<a href="#">Features</a>
				</li>

				<li>
					<a href="#">News</a>
				</li>
			</ul>

			<div className="flex gap-x-4">
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
		</nav>
	);
}
