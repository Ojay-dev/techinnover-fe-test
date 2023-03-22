import image2 from '../assets/svgs/image2.svg';
import arrowLeft from '../assets/svgs/arrow-right.svg';
import arrowLeftColored from '../assets/svgs/arrow-right-color.svg';
import frame1 from '../assets/images/frame-1.png';
import frame2 from '../assets/images/frame-2.png';
import NavBar from '../components/NavBar';

export default function Home() {
	return (
		<div>
			<div className="pattern relative">
				<NavBar />
				<div className="mx-auto min-h-screen w-5/6 max-w-screen-2xl pt-20  lg:ml-auto lg:justify-between xl:flex xl:w-full">
					<div className="mt-3.5 text-white xl:ml-[3%] xl:w-1/2 2xl:xl:ml-0">
						<h1 className="font-heading text-[38px] uppercase leading-[52px] sm:text-[54px] sm:leading-[76px]">
							An innovative platform that <br />
							<span className="text-chartreuse">
								suports
								<br />
								artists.
							</span>
						</h1>

						<p className="mt-[10px] w-full font-text text-[19px] leading-8 lg:w-3/5">
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
							className="xl:absolute xl:top-[40%] xl:right-[30%]"
						/>
						<img
							src={frame2}
							alt="frame2"
							className="ml-auto hidden sm:block"
						/>
					</div>
				</div>
			</div>

			<div className="m-auto w-5/6 max-w-screen-2xl gap-x-[10%] pt-20 pb-16 lg:mr-auto  lg:flex xl:ml-[3%] 2xl:mx-auto">
				<div className="flex justify-center lg:w-1/2">
					<img src={image2} alt="image2" />
				</div>

				<div className="mt-12  lg:w-1/2">
					<h2 className="font-heading text-[38px] leading-[52px] text-charcoal">
						YOUR CAREER IS IN YOUR HANDS
					</h2>

					<p className="mt-[22px] font-text text-[19px] leading-8 text-charcoal">
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
		</div>
	);
}
