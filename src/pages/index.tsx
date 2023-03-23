import image2 from '../assets/svgs/image2.svg';
import arrowLeft from '../assets/svgs/arrow-right.svg';
import arrowLeftColored from '../assets/svgs/arrow-right-color.svg';
import arrowUpRight from '../assets/svgs/arrow-up-right.svg';
import frame1 from '../assets/images/frame-1.png';
import frame2 from '../assets/images/frame-2.png';
import statsIllustration from '../assets/svgs/illustration.svg';
import tems2 from '../assets/images/tems2.png';
import tems3 from '../assets/images/tems3.png';
import tems4 from '../assets/images/tems4.png';
import burna from '../assets/images/burna.png';
import tiwa from '../assets/images/tems4.png';
import rema from '../assets/images/rema.png';
import model from '../assets/images/model.png';
import wiz from '../assets/images/wiz.png';
import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<>
			<div className="pattern ">
				<NavBar />
				<div className="relative mx-auto min-h-screen max-w-screen-2xl overflow-hidden px-[10%] pt-20 lg:ml-[5%] lg:justify-between xl:flex xl:w-full xl:px-0 2xl:mx-auto">
					<div className="mt-3.5 text-white xl:w-1/2 2xl:xl:ml-0">
						<h1 className="font-heading text-[38px] uppercase leading-[52px] sm:text-[54px] sm:leading-[76px]">
							An innovative platform that <br />
							<span className="text-chartreuse">
								suports
								<br />
								artists.
							</span>
						</h1>

						<p className="mt-[10px] w-full max-w-lg font-text text-[19px] leading-8 xl:max-w-lg">
							Figma files can also be downloaded from our store. These files
							include the latest Figma features and are
						</p>

						<a href="#" className="try-link mt-2.5 text-chartreuse">
							Try it now{' '}
							<img
								src={arrowLeftColored}
								alt="arrowLeft"
								className="blinking"
							/>
						</a>
					</div>

					<div className="mt-20  xl:mt-0 xl:w-1/2">
						<img
							src={frame1}
							alt="frame1"
							className="xl:absolute xl:top-[40%] xl:right-[40%]"
						/>
						<img src={frame2} alt="frame2" className="ml-auto  sm:block" />
					</div>
				</div>
			</div>

			<div className="m-auto max-w-screen-2xl gap-x-[10%] px-[10%] pt-20 pb-16 lg:ml-[5%] lg:mr-auto lg:flex lg:pl-0  xl:ml-[3%] xl:px-0 2xl:mx-auto ">
				<div className="flex justify-center lg:w-1/2">
					<img src={image2} alt="image2" />
				</div>

				<div className="mt-12 lg:w-1/2">
					<h2 className="max-w-lg font-heading text-[38px] leading-[52px] text-charcoal">
						YOUR CAREER IS IN YOUR HANDS
					</h2>

					<p className="mt-[22px] max-w-lg font-text text-[19px] leading-8 text-charcoal ">
						Figma files can also be downloaded from our store. These files
						include the latest Figma features and are synced with the Webflow
						template.
						<br />
						<br />
						Figma files can also be downloaded from our store. These files
						include the latest Figma features and are synced
						<br />
						<br />
						Figma files can also be downloaded from our store. These files
						include the latest Figma features and are synced with the Webflow
						template.
					</p>

					<a href="#" className="try-link mt-4">
						Try it now{' '}
						<img src={arrowLeft} alt="arrowLeft" className="blinking" />
					</a>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row">
				<div className="bg-chartreuse bg-[url('src/assets/svgs/pattern-vector.svg')] bg-repeat px-[10%] pt-24 pb-16 lg:w-1/2 lg:pl-[5%]">
					<h2 className="font-heading text-[38px] leading-[52px] text-charcoal xl:w-9/12">
						USE YOUR STATS TO MAKE MOVES
					</h2>

					<p className="mt-[22px] max-w-lg font-text text-[19px] leading-8 text-charcoal">
						Figma files can also be downloaded from our store. These files
						include the latest Figma features and are synced with the Webflow
						template.
						<br />
						<br />
						Figma files can also be downloaded from our store. These files
						include the latest Figma features and are synced
						<br />
						<br />
						Figma files can also be downloaded from our store. These files
						include the latest Figma features and are synced with the Webflow
						template.
					</p>

					<a href="#" className="try-link mt-4">
						Try it now{' '}
						<img src={arrowLeft} alt="arrowLeft" className="blinking" />
					</a>
				</div>

				<div className="flex justify-center bg-[#111315] px-20 pt-28 pb-20 lg:w-1/2">
					<img src={statsIllustration} alt="stats" />
				</div>
			</div>

			<div className="gradient-blend relative px-[10%] pt-80 pb-6 lg:px-[5%]">
				<div className="relative z-[3]">
					<h2 className="max-w-[663px] font-heading text-[32px] uppercase leading-[52px] text-white">
						‘‘WE HELP ARTISTS FIND THEIR FANS’’
					</h2>

					<p className="mt-[60px] max-w-lg font-text text-[19px] leading-8 text-slate-grey ">
						Figma files can also be downloaded from our store. These files
						include the latest Figma features and are synced
					</p>
				</div>

				<div className="images-container">
					<img src={tems2} alt="tems2" />
					<img src={tems4} alt="tems4" />
					<img src={tems3} alt="tems3" />
				</div>
			</div>

			<div className="fanbase-section relative overflow-hidden bg-[#111315] px-[10%] pt-52 pb-36 lg:px-[5%]">
				<div className="relative z-10">
					<h2 className="mx-auto max-w-[665px] text-center font-heading text-[32px] uppercase leading-[52px] text-white sm:text-[38px] sm:leading-[59px]">
						JOIN TOP ARTISTS, BUILD YOUR{' '}
						<span className="text-chartreuse">FANBASE</span>
					</h2>

					<p className="mx-auto mt-[18px] max-w-lg text-center font-text text-[19px] leading-8 text-slate-grey">
						Figma files can also be downloaded from our store. These files
						include the latest Figma features and are synced
					</p>
				</div>

				<div className="artist-images mx-auto max-w-screen-2xl">
					<img src={wiz} alt="wiz" className="artist" />
					<img src={burna} alt="burna" className="artist" />
					<img src={tiwa} alt="tiwa" className="artist" />
					<img src={rema} alt="rema" className="artist" />
					<img src={model} alt="model" className="artist" />
				</div>
			</div>

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

				<div className="flex flex-col-reverse justify-between lg:flex-row">
					<div className="mt-4 flex items-center font-integral-CF tracking-[.48em] lg:mt-0 lg:w-3/5">
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

					<ul className="flex flex-col justify-between gap-y-2 font-integral-CF text-[9px] uppercase leading-[11px]  tracking-[.48em] text-slate-grey sm:flex-row lg:w-2/5">
						<li>
							<a href="#">TERMS & CONDITIONS</a>
						</li>

						<li>
							<a href="#">PRIVACY POLICY</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}
