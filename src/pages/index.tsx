import image2 from '../assets/svgs/image2.svg';
import arrowLeft from '../assets/svgs/arrow-right.svg';
import arrowLeftColored from '../assets/svgs/arrow-right-color.svg';
import frame1 from '../assets/images/frame-1.png';
import frame2 from '../assets/images/frame-2.png';
import statsIllustration from '../assets/svgs/illustration.svg';
import tems2 from '../assets/images/tems2.png';
import tems3 from '../assets/images/tems3.png';
import tems4 from '../assets/images/tems4.png';
import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<div>
			<div className="pattern ">
				<NavBar />
				<div className="relative mx-auto min-h-screen max-w-screen-2xl px-[10%] pt-20 lg:ml-[5%] lg:justify-between xl:flex xl:w-full xl:px-0 2xl:mx-auto">
					<div className="mt-3.5 text-white xl:w-1/2 2xl:xl:ml-0">
						<h1 className="font-heading text-[38px] uppercase leading-[52px] sm:text-[54px] sm:leading-[76px]">
							An innovative platform that <br />
							<span className="text-chartreuse">
								suports
								<br />
								artists.
							</span>
						</h1>

						<p className="mt-[10px] w-full font-text text-[19px] leading-8 xl:max-w-lg">
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
						<img
							src={frame2}
							alt="frame2"
							className="ml-auto hidden sm:block"
						/>
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
					<img src={tems2} />
					<img src={tems3} />
					<img src={tems4} />
				</div>
			</div>
		</div>
	);
}
