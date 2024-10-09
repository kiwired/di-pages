import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
	title: 'Плохие люди',
	description: 'Блог для тех, кто хочет перестать заслуживать любовь и поверить, что с ними всё так',
}

export default function HomePage() {
	return (
		<main className='bg-gray-200 p-5 pt-16'>
			<div className="flex flex-col max-w-sm mx-auto gap-10">

				<div className='relative z-10 flex flex-col gap-12'>
					<div className='bg-white flex flex-col items-center ml-auto max-w-[280px] text-sm text-center p-4 rounded-md'>
						<div className="bg-white rounded-full -mt-10">
							<Divider />
						</div>
						<span>Как быть в отношениях собой, если постоянно испытываешь недоверие: <b><i>а примут ли тебя?</i></b> <br /><b><i>а не отвернутся ли от тебя?</i></b></span>
					</div>
					<div className='bg-white del flex flex-col items-center max-w-[280px] text-sm text-center p-4 rounded-md'>
						<div className="bg-white rounded-full -mt-10">
							<Divider />
						</div>
						<span>Как перестать ставить себя <br />на второе место и <b><i>терпеть неудобное?</i></b></span>
					</div>
					<div className='bg-white flex flex-col items-center ml-auto max-w-[280px] text-sm text-center p-4 rounded-md'>
						<div className="bg-white rounded-full -mt-10">
							<Divider />
						</div>
						<span>Что нужно проработать «хорошим» девочкам, чтобы выстраивать счастливые отношения, в которых <b><i>можно быть собой</i></b>?</span>
					</div>
				</div>

				<div className="text-center">
					Ответы на эти вопросы ты найдешь в авторском блоге
				</div>

				<div className="bg-white flex flex-col gap-5 pb-5 rounded-md rounded-tl-3xl">
					<div className="flex flex-row items-center -mt-4">
						<div className="basis-2/5">
							<Image
								src='/home/diana.png'
								alt='Диана Позднякова'
								width={300}
								height={300}
								className='w-full h-auto rounded-full border-8 border-[#C8D9EB] -ml-5'
							/>
						</div>
						<div className="basis-3/5">
							<h1 className='text-5xl font-semibold text-[#6B7D95] pt-4'>Плохие люди</h1>
						</div>
					</div>

					<div className="rounded">
						<div className="px-5">
							<svg className='w-10 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" version="1.1">
								<path d="M11.86,16.55a4.31,4.31,0,0,0-2.11.56,14.44,14.44,0,0,1,4.36-6,1.1,1.1,0,0,0-1.4-1.7c-4,3.25-5.78,7.75-5.78,10.54A5.08,5.08,0,0,0,10,24.58a4.4,4.4,0,0,0,1.88.44,4.24,4.24,0,1,0,0-8.47Z" />
								<path d="M23,16.55a4.29,4.29,0,0,0-2.11.56,14.5,14.5,0,0,1,4.35-6,1.1,1.1,0,1,0-1.39-1.7c-4,3.25-5.78,7.75-5.78,10.54a5.08,5.08,0,0,0,3,4.61A4.37,4.37,0,0,0,23,25a4.24,4.24,0,1,0,0-8.47Z" />
							</svg>
						</div>
						<div className="text-lg text-center uppercase max-w-[280px] mx-auto px-4">
							Блог для тех, кто хочет перестать заслуживать любовь и поверить, что с ними всё так 💔
						</div>
						<div className="text-right px-5">
							<svg className='w-10 h-10 ml-auto rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" version="1.1">
								<path d="M11.86,16.55a4.31,4.31,0,0,0-2.11.56,14.44,14.44,0,0,1,4.36-6,1.1,1.1,0,0,0-1.4-1.7c-4,3.25-5.78,7.75-5.78,10.54A5.08,5.08,0,0,0,10,24.58a4.4,4.4,0,0,0,1.88.44,4.24,4.24,0,1,0,0-8.47Z" />
								<path d="M23,16.55a4.29,4.29,0,0,0-2.11.56,14.5,14.5,0,0,1,4.35-6,1.1,1.1,0,1,0-1.39-1.7c-4,3.25-5.78,7.75-5.78,10.54a5.08,5.08,0,0,0,3,4.61A4.37,4.37,0,0,0,23,25a4.24,4.24,0,1,0,0-8.47Z" />
							</svg>
						</div>
					</div>

					<div className="text-center px-4">
						<div className="relative inline-block">
							<Link
								className='relative rounded-full bg-[#C8D9EB] border border-black text-xl leading-5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 px-6 py-5 inline-flex flex-row justify-center items-center gap-2'
								href='https://t.me/+n3lc03VDCwo2Yjky'
							>
								<span className='text-md'>перейти в телеграм</span>
								<svg className='w-6 h-6 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
									<path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" />
								</svg>
							</Link>
						</div>
						<div className="text-sm text-center uppercase pt-2 px-8">
							от психолога, гештальт-терапевта Дианы Поздняковой
						</div>
					</div>
				</div>

			</div>
		</main>
	)
}

const Divider = () => {
	return (
		<div className="bg-white p-2 rounded-full">
			<svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path className='fill-gray-200' d="M19.2793 17.2916C19.6712 17.2328 19.9686 16.9298 20.0306 16.5512C21.0291 10.4571 25.2849 5.1057 31.5475 3.00767L31.5544 3.00536C31.8301 2.91313 32.0512 2.69539 32.1303 2.41556C32.2756 1.90135 31.9636 1.41047 31.485 1.29447C29.4914 0.811006 27.3421 0.864996 25.2533 1.56479C21.3329 2.87815 18.6115 6.13523 17.8021 9.90443C17.7486 10.1533 17.6091 10.3811 17.3924 10.5147C17.0499 10.7256 16.6241 10.6818 16.3336 10.429C13.4154 7.89054 9.26763 6.92013 5.33505 8.23757C3.25639 8.93395 1.51512 10.1768 0.217132 11.7527C-0.0176913 12.0378 -0.0724983 12.4401 0.104251 12.7644C0.313453 13.1482 0.763865 13.3207 1.16957 13.1845C1.17313 13.1833 1.1767 13.1821 1.18034 13.1809C7.43331 11.0861 14.0431 12.7853 18.5109 17.0335C18.7166 17.2291 18.9986 17.3337 19.2793 17.2916Z" />
				<path className='fill-gray-200' d="M33.6573 21.8282C32.2761 21.0127 30.6561 20.5638 28.9344 20.6117C25.6926 20.7019 22.9081 22.5299 21.4483 25.1786C21.3287 25.3955 21.1032 25.533 20.8556 25.5398C20.608 25.5465 20.3758 25.4215 20.2443 25.2115C18.6395 22.6484 15.7579 20.9782 12.5163 21.0683C10.7946 21.1162 9.20204 21.6545 7.86833 22.5455C7.61041 22.7178 7.49768 23.0398 7.59177 23.3354C7.68586 23.6309 7.9642 23.8291 8.27426 23.8204C8.27723 23.8203 8.28012 23.8202 8.28309 23.8201C13.4453 23.6766 18.0087 26.4613 20.3804 30.667C20.5076 30.8926 20.7492 31.0293 21.0082 31.0223C21.2671 31.0152 21.5012 30.8656 21.6156 30.6332C23.7497 26.3018 28.1516 23.2676 33.314 23.124C33.317 23.1239 33.3199 23.1238 33.3228 23.1238C33.6331 23.1154 33.9002 22.9025 33.9778 22.602C34.0554 22.3014 33.9246 21.986 33.6573 21.8282Z" />
			</svg>
		</div>
	)
}