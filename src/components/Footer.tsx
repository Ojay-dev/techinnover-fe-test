import arrowUpRight from '../assets/svgs/arrow-up-right.svg';

export default function Footer() {
	return (
		<footer className="bg-charcoal px-[10%] py-[60px] lg:px-[48px]">
			<div className="mb-8 flex flex-col justify-between border-b border-[#33383F] pb-8 lg:flex-row">
				<div className="mb-10 lg:mb-0 lg:w-3/5">
					<h3 className="max-w-[380px] font-heading text-[21px] uppercase leading-[25px] text-white">
						SHORT LINE ABOUT Us THREE WORDS HERE
					</h3>

					<p className="mt-5 font-clash-display text-white">
						Short sentence here
					</p>
				</div>

				<div className="flex flex-col justify-between sm:flex-row lg:w-2/5">
					<div className="sm:w-1/2">
						<h3 className="max-w-[135px] font-heading text-[21px] uppercase leading-[25px] text-white">
							Connect with us
						</h3>
					</div>

					<ul className="mt-4 flex flex-wrap justify-between gap-y-4 font-clash-display text-white sm:mt-0  sm:w-1/2">
						<li className="w-1/2">
							<a href="#" className="flex items-start gap-x-1 leading-4">
								Twitter <img src={arrowUpRight} alt="pointer arrow" />
							</a>
						</li>

						<li className="w-1/2">
							<a href="#" className="flex items-start gap-x-1 leading-4">
								Cookies <img src={arrowUpRight} alt="pointer arrow" />
							</a>
						</li>

						<li className="w-1/2">
							<a href="#" className="flex items-start gap-x-1 leading-4">
								Discord <img src={arrowUpRight} alt="pointer arrow" />
							</a>
						</li>

						<li className="w-1/2 ">
							<a href="#" className="flex items-start gap-x-1 leading-4">
								Licenses <img src={arrowUpRight} alt="pointer arrow" />
							</a>
						</li>

						<li className="w-1/2 ">
							<a href="#" className="flex items-start gap-x-1 leading-4">
								Instagram <img src={arrowUpRight} alt="pointer arrow" />
							</a>
						</li>

						<li className="w-1/2 ">
							<a href="#" className="flex items-start gap-x-1 leading-4">
								Contact <img src={arrowUpRight} alt="pointer arrow" />
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex flex-col-reverse justify-between gap-y-10 lg:flex-row">
				<div className="flex items-center font-integral-CF tracking-[.48em] lg:mt-0 lg:w-3/5">
					<p className="text-[9px] uppercase leading-[11px] text-slate-grey">
						2022
					</p>
					<div className="mx-5 h-1 w-1 rounded-full bg-slate-grey" />
					<p className="text-[9px] uppercase leading-[11px] text-slate-grey">
						PLATFORM
					</p>
					<p className="ml-[132px] hidden text-[9px] uppercase leading-[11px] text-slate-grey sm:block">
						2022
					</p>
				</div>

				<ul className="flex flex-col justify-between gap-y-6 font-integral-CF text-[9px] uppercase leading-[11px]  tracking-[.48em] text-slate-grey sm:flex-row lg:w-2/5">
					<li>
						<a href="#">TERMS & CONDITIONS</a>
					</li>

					<li>
						<a href="#">PRIVACY POLICY</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
