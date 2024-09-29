import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPinIcon, SparklesIcon, WifiIcon } from '@heroicons/react/20/solid'
import { Divider, List, Text } from '@/ui'
import { BtnAction } from './btn-action'

export const metadata: Metadata = {
	metadataBase: new URL('https://baltikpsy.ru/'),
	title: 'Диана Позднякова - психолог, гештальт—терапевт',
	description: '',
	authors: {
		url: 'https://t.me/psicho_di',
		name: 'Диана Позднякова',
	},
	openGraph: {
		title: 'Диана Позднякова - психолог, гештальт—терапевт',
		description: '',
		siteName: '‌Психолог Диана Позднякова',
		images: ['/img-01.jpg'],
	},
}

export default function HomePage() {
	return (
		<main className='flex min-h-screen max-w-sm mx-auto flex-col p-5 gap-7'>
			<Image
				src='/img-01.jpg'
				alt='‌Диана Позднякова'
				width={600}
				height={400}
				className='w-full h-auto'
			/>

			<div className='text-center'>
				<p className='text-base font-semibold text-indigo-500'>
					психолог, гештальт—терапевт
				</p>
				<h1 className='mt-2 text-4xl tracking-tight text-gray-800'>
					<strong className='font-bold'>Диана Позднякова</strong>
				</h1>
			</div>

			<Text as='p'>
				Я не хочу лепить из тебя того, кем ты не являешься. Я хочу узнать
				настоящего тебя и показать тебе ТЕБЯ🤍
			</Text>

			<Text as='p'>
				Только узнав и приняв себя таким, каким ты являешься сейчас, у тебя
				начнутся изменения. Только перестав бежать, можно обрести себя
			</Text>

			<Divider />

			<Text as='h2' variant='heading2xl'>
				О себе
			</Text>
			<Text as='p'>Привет! Меня зовут Диана</Text>
			<Text as='p'>
				Для меня терапия — это, в первую очередь, путешествие к себе. Это
				безопасное исследование, внутри которого происходят перемены
			</Text>
			<Text as='p'>
				Мои клиенты выделяют мою{' '}
				<Text as='strong' fontWeight='semibold'>
					устойчивость
				</Text>
				,{' '}
				<Text as='strong' fontWeight='semibold'>
					доброту
				</Text>
				,{' '}
				<Text as='strong' fontWeight='semibold'>
					эмоциональную
				</Text>{' '}
				<Text as='strong' fontWeight='semibold'>
					открытость
				</Text>
				,{' '}
				<Text as='strong' fontWeight='semibold'>
					творческий подход
				</Text>{' '}
				и{' '}
				<Text as='strong' fontWeight='semibold'>
					внимание к деталям
				</Text>
				.
			</Text>
			<Text as='p'>
				В своей работе я опираюсь на мягкость и силу, поддержку и фрустрацию — я
				верю, что только при таком синтезе возможен рост и личностные перемены
			</Text>

			<Divider />

			<Text as='h2' variant='heading2xl'>
				Благодаря работе со мной, вы
			</Text>

			<List>
				<List.Item>
					<SparklesIcon
						className='mt-1 h-5 w-5 flex-none text-indigo-600'
						aria-hidden='true'
					/>
					обретете уверенность в себе и лучше поймете себя
				</List.Item>
				<List.Item>
					<SparklesIcon
						className='mt-1 h-5 w-5 flex-none text-indigo-600'
						aria-hidden='true'
					/>
					наладите контакт с собой, своими мыслями, чувствами и телом
				</List.Item>
				<List.Item>
					<SparklesIcon
						className='mt-1 h-5 w-5 flex-none text-indigo-600'
						aria-hidden='true'
					/>
					осознаете свои паттерны поведения и их причины
				</List.Item>
				<List.Item>
					<SparklesIcon
						className='mt-1 h-5 w-5 flex-none text-indigo-600'
						aria-hidden='true'
					/>
					проработаете внутренние конфликты, негативные установки, страхи и
					тревоги
				</List.Item>
				<List.Item>
					<SparklesIcon
						className='mt-1 h-5 w-5 flex-none text-indigo-600'
						aria-hidden='true'
					/>
					построите здоровые отношения или выйдите из токсичных
				</List.Item>
				<List.Item>
					<SparklesIcon
						className='mt-1 h-5 w-5 flex-none text-indigo-600'
						aria-hidden='true'
					/>
					научитесь защищать свои личные границы без чувства стыда и вины
				</List.Item>
				<List.Item>
					<SparklesIcon
						className='mt-1 h-5 w-5 flex-none text-indigo-600'
						aria-hidden='true'
					/>
					улучшите качество своей жизни
				</List.Item>
			</List>

			<BtnAction
				title='Получить бесплатный гайд'
				href='https://t.me/DianaPsyBot'
			/>

			<Divider />

			<Text as='h2' variant='heading2xl'>
				Стоимость
			</Text>
			{/* <Text as="h2" fontWeight='semibold' tone="indigo">Стоимость</Text> */}

			<div className='flex flex-col gap-2'>
				<div className='flex items-end gap-5'>
					<h3 className='text-3xl tracking-tight text-gray-800'>
						<strong className='text-4xl text-semibold'>2 500</strong> ₽
					</h3>
					<div className='flex items-center gap-2 leading-7 text-gray-800'>
						<WifiIcon className='w-4 h-4 text-green-400' /> Онлайн
					</div>
				</div>

				<div className='flex items-end gap-5'>
					<h3 className='flex-none text-3xl tracking-tight text-gray-800'>
						<strong className='text-4xl text-semibold'>3 000</strong> ₽
					</h3>
					<div className='flex items-center gap-2 leading-7 text-gray-800'>
						<MapPinIcon className='w-4 h-4 text-green-400' /> Очно, Калининград
					</div>
				</div>

				<Text as='p' tone='subdued'>
					Длительность консультации:{' '}
					<Text as='strong' fontWeight='semibold' tone='subdued'>
						60 минут
					</Text>
				</Text>
			</div>

			<Link
				className='rounded bg-indigo-600 leading-5 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center px-10 py-3 flex flex-col'
				href='https://t.me/soaring_seagull'
			>
				<span className='text-md font-semibold uppercase'>Записаться</span>
				<span className=''>на консультацию</span>
			</Link>
		</main>
	)
}
