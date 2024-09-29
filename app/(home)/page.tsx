import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

const evolventa = localFont({
	src: [
		{
			path: './fonts/Evolventa-Regular.woff',
			weight: '400',
			style: 'normal',
		},
	]
})

export const metadata: Metadata = {
	title: 'Плохие люди',
	description: 'Блог для тех, кто хочет перестать заслуживать любовь и поверить, что с ними всё так',
}

export default function HomePage() {
	const classes = clsx(evolventa.className, 'bg-[#E3E2DD] flex flex-col justify-center items-center min-h-screen p-5')
	return (
		<main className={classes}>
			<div className="bg-white rounded-xl max-w-sm mx-auto">

				<div className="flex flex-row items-center my-8">
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
						<h1 className='text-5xl font-semibold text-[#6B7D95]'>Плохие люди</h1>
					</div>
				</div>

				<div className="mt-5 px-10">
					<svg className='w-10 h-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" version="1.1">
						<path d="M11.86,16.55a4.31,4.31,0,0,0-2.11.56,14.44,14.44,0,0,1,4.36-6,1.1,1.1,0,0,0-1.4-1.7c-4,3.25-5.78,7.75-5.78,10.54A5.08,5.08,0,0,0,10,24.58a4.4,4.4,0,0,0,1.88.44,4.24,4.24,0,1,0,0-8.47Z" />
						<path d="M23,16.55a4.29,4.29,0,0,0-2.11.56,14.5,14.5,0,0,1,4.35-6,1.1,1.1,0,1,0-1.39-1.7c-4,3.25-5.78,7.75-5.78,10.54a5.08,5.08,0,0,0,3,4.61A4.37,4.37,0,0,0,23,25a4.24,4.24,0,1,0,0-8.47Z" />
					</svg>
				</div>
				<div className="text-lg text-center uppercase px-16">
					Блог для тех, кто хочет перестать заслуживать любовь и поверить, что с ними всё так 💔
				</div>
				<div className="text-right mb-5 px-10">
					<svg className='w-10 h-10 ml-auto rotate-180' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" version="1.1">
						<path d="M11.86,16.55a4.31,4.31,0,0,0-2.11.56,14.44,14.44,0,0,1,4.36-6,1.1,1.1,0,0,0-1.4-1.7c-4,3.25-5.78,7.75-5.78,10.54A5.08,5.08,0,0,0,10,24.58a4.4,4.4,0,0,0,1.88.44,4.24,4.24,0,1,0,0-8.47Z" />
						<path d="M23,16.55a4.29,4.29,0,0,0-2.11.56,14.5,14.5,0,0,1,4.35-6,1.1,1.1,0,1,0-1.39-1.7c-4,3.25-5.78,7.75-5.78,10.54a5.08,5.08,0,0,0,3,4.61A4.37,4.37,0,0,0,23,25a4.24,4.24,0,1,0,0-8.47Z" />
					</svg>
				</div>
				

				<div className="text-center my-4 px-8">
					<Link
						className='rounded-full bg-[#C8D9EB] border border-black text-xl leading-5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 px-8 py-5 inline-flex flex-row justify-center items-center gap-2'
						href='https://t.me/zapiski_ot_di'
					>
						<span className='text-md'>перейти в телеграм</span>
						<svg className='w-6 h-6 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
							<path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" />
						</svg>
					</Link>
				</div>

				<div className="text-sm text-center uppercase pb-8 px-8">
					от психолога, гештальт-терапевта Дианы Поздняковой
				</div>

			</div>
		</main>
	)
}
