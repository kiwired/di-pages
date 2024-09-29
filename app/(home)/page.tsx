import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
// import clsx from 'clsx'
import { CalendarIcon } from '@heroicons/react/20/solid'
import { Text } from '@/ui'

export const metadata: Metadata = {
	title: 'Предновогодний курс «Меняйся»',
	description: '',
}

export default function HomePage() {
	return (
		<main className='bg-zinc-100 flex flex-col items-center min-h-screen p-5 pt-24'>
			<div className="bg-white rounded-xl max-w-sm mx-auto">

				<div className="flex flex-row items-center my-4">
					<div className="basis-2/5">
						<Image
							src='/home/diana.png'
							alt='Диана Позднякова'
							width={300}
							height={300}
							className='w-full h-auto rounded-full border-8 border-blue-400 -ml-5'
						/>
					</div>
					<div className="basis-3/5">
						<h1 className='text-4xl font-semibold text-sky-800'>Плохие люди</h1>
					</div>
				</div>

				<div className="text-lg text-center uppercase my-8 px-8">
					Блог для тех, кто хочет перестать заслуживать любовь и поверить, что с ними всё так 💔
				</div>
				

				<div className="my-4 px-5">
					<Link
						className='rounded bg-blue-400 leading-5 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 text-center px-10 py-5 flex flex-col'
						href='https://t.me/zapiski_ot_di'
					>
						<span className='text-md font-semibold uppercase'>перейти в tg</span>
					</Link>
				</div>

				<div className="text-center uppercase my-4">
					от психолога, гештальт-терапевта Дианы Поздняковой
				</div>

			</div>
		</main>
	)
}
