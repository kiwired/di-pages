import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { ArrowDownIcon, BoltIcon, CalendarIcon, HeartIcon, InformationCircleIcon, CheckIcon, SunIcon, PaperAirplaneIcon, PencilSquareIcon, RocketLaunchIcon, Battery50Icon, CheckBadgeIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { StarIcon } from '@heroicons/react/24/outline'
import { Divider, List, Text } from '@/ui'

export const metadata: Metadata = {
	title: 'Предновогодний курс «Меняйся»',
	description: '',
}

export default function ChangePage() {
	return (
		<main className='repative overflow-hidden flex min-h-screen max-w-sm mx-auto flex-col px-5 pt-24 pb-5 gap-7'>

			<Image
				src='/bg-01.png'
				alt=''
				width={500}
				height={293}
				className='max-w-none w-auto h-80 absolute -z-10 top-0 right-4 rotate-6 pointer-events-none'
				aria-hidden={true}
			/>

			<div className="text-center">
				<p className="text-base font-semibold text-blue-400">
					Предновогодний курс
				</p>
				<h1 className="mt-2 text-4xl tracking-tight text-gray-800">
					<span className="text-2xl text-gray-500">«</span>
					<strong className="font-bold">Меняйся</strong>
					<span className="text-2xl font-normal text-gray-500">»</span>
				</h1>
				<div className="flex items-center justify-center gap-2 mt-2">
					<CalendarIcon className="h-5 w-5 text-blue-400" />
					<Text as="span">с 4 по 24 декабря</Text>
				</div>
			</div>

			<Image
				src='/img-01.jpg'
				alt='Диана Позднякова'
				width={600}
				height={400}
				className='w-full h-auto'
			/>

			<Text as='p' alignment='center'>
				Курс для тех, кто устал от сухой теории и хочет пойти в реальную психологическую практику
			</Text>

			<Text as='p' alignment='center'>
				<Link
					className='inline-flex items-center justify-center gap-2 px-10 py-3 rounded bg-blue-400 font-semibold uppercase text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
					href='#programm'
				>
					Программа <ArrowDownIcon className='animate-bounce h-5 w-5' />
				</Link>
			</Text>

			<Divider />

			<Text as='h2' variant='heading2xl'>
				Для для тех
			</Text>

			<List>
				<List.Item>
					<RocketLaunchIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					кто хочет перемен в своей жизни
				</List.Item>
				<List.Item>
					<Battery50Icon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					кто устал ходить вокруг да около своей проблемы
				</List.Item>
				<List.Item>
					<PencilSquareIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					кто хочет получить конкретные техники, которые улучшат вашу жизнь, без обращения к психологу
				</List.Item>
			</List>

			<Divider />

			<Text as='h2' variant='heading2xl' alignment='center'>
				Что даст вам курс:
			</Text>

			<div className="flex flex-col items-center justify-center gap-5">
				<div className="flex flex-col items-center justify-center gap-5 max-w-[15rem]">
					<StarIcon className='h-8 w-8 text-blue-400' aria-hidden='true' />
					<Text as="p" alignment='center'>осознаете свои привычные нерабочие стратегии поведения</Text>
				</div>
				<div className="flex flex-col items-center justify-center gap-5 max-w-[15rem]">
					<StarIcon className='h-8 w-8 text-blue-400' aria-hidden='true' />
					<Text as="p" alignment='center'>овладеете техниками для самостоятельной проработки</Text>
				</div>
				<div className="flex flex-col items-center justify-center gap-5 max-w-[15rem]">
					<StarIcon className='h-8 w-8 text-blue-400' aria-hidden='true' />
					<Text as="p" alignment='center'>снизите уровень тревоги и перестанете сравнивать себя с другими</Text>
				</div>
				<div className="flex flex-col items-center justify-center gap-5 max-w-[15rem]">
					<StarIcon className='h-8 w-8 text-blue-400' aria-hidden='true' />
					<Text as="p" alignment='center'>научитесь работать с внутренним самокритиком, своими страхами и сомнениями</Text>
				</div>
				<div className="flex flex-col items-center justify-center gap-5 max-w-[15rem]">
					<StarIcon className='h-8 w-8 text-blue-400' aria-hidden='true' />
					<Text as="p" alignment='center'>улучшите контакт с собой и замедлитесь </Text>
				</div>
			</div>

			<Divider />

			<Text as='h2' variant='heading2xl'>
				Почему этот курс?
			</Text>

			<List>
				<List.Item>
					<ExclamationTriangleIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					60% практики
				</List.Item>
				<List.Item>
					<ExclamationTriangleIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					Техники, которые легко интегрировать в свою жизнь
				</List.Item>
				<List.Item>
					<ExclamationTriangleIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					Опора на доказательную психологию
				</List.Item>
			</List>

			<Divider />

			<Text as='h2' variant='heading2xl'>
				Суть курса:
			</Text>

			<Text as='p'>
				Курс будет длится 3 недели. За это время мы погрузимся в три основные темы: 
			</Text>

			<div className="relative flex flex-col gap-7">
				<div className="absolute top-0 left-3 w-0.5 h-full bg-blue-400"></div>
				<div className="relative flex">
					<div className="flex gap-3">
						<CheckIcon className='h-7 w-7 p-1 flex-none rounded-full bg-blue-400 text-white' aria-hidden='true' />
						негативные мысли
					</div>
				</div>
				<div className="relative flex ">
					<div className="absolute top-0 left-2 w-2 h-full"></div>
					<div className="flex gap-3">
						<CheckIcon className='h-7 w-7 p-1 flex-none rounded-full border-2 border-blue-400 border-spacing-2 bg-white text-blue-400' aria-hidden='true' />
						контакт с собой
					</div>
				</div>
				<div className="relative flex ">
					<div className="absolute top-0 left-2 w-2 h-full"></div>
					<div className="flex gap-3">
						<CheckIcon className='h-7 w-7 p-1 flex-none rounded-full border-2 border-blue-400 border-spacing-2 bg-white text-blue-400' aria-hidden='true' />
						зона комфорта
					</div>
				</div>

			</div>

			<Text as='p'>
				На каждую тему предусмотрено 2 лекции и 3 практики.
			</Text>
			
			<Text as='p'>
				Это будет максимально глубокий и практический курс с техниками и практиками из гештальт-терапии и АСТ-терапии.
			</Text>
			
			<Text as='p'>
				Вместе мы будем учиться слушать и слышать себя, работать над репродуктивными стратегиями вашего поведения и учиться выстраивать отношения с собой и миром по-новому!
			</Text>

			<Divider />

			<Text as='h2' variant='heading2xl'>
				Программа:
			</Text>

			<dl className="grid grid-cols-3 gap-x-3">
				<div className="border-t-4 border-blue-400">
					<dt className="mt-2 text-blue-400">3 недели</dt>
				</div>
				<div className="border-t-4 border-blue-400">
					<dt className="mt-2 text-blue-400">6 лекций</dt>
				</div>
				<div className="border-t-4 border-blue-400">
					<dt className="mt-2 text-blue-400">9 практик</dt>
				</div>
			</dl>

			<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10">
				{three.map((val, key) => (
					<div key={key} className="relative pl-16">
						<dt className="text-base leading-7 text-blue-400">
							<div className="absolute left-0 top-0 flex h-10 w-10 items-start justify-center rounded-lg bg-blue-400">
								<val.icon className="h-6 w-6 text-white mt-2" aria-hidden="true" />
							</div>
							{val.name}
						</dt>
						<dd className="mt-2 text-base leading-7 text-gray-800">
							{val.content}
						</dd>
					</div>
				))}
			</dl>

			<Text as='p'>
				По итогу вы получите 15 видеоматериалов + рабочую тетрадь со всеми конспектами и техниками!
			</Text>

			<div className="flex gap-3 -mx-5 px-5 py-5 bg-blue-50 text-blue-400">
				<InformationCircleIcon className="h-6 w-6 flex-none text-blue-400" />
				<div className="">
					Для тарифа «Стандарт» и «PRO» предусмотрен заключительный созвон на тему: «Анализируем прошлый год и ставим цели на новый!»
				</div>
			</div>

			<Divider />

			<Text as='h2' variant='heading2xl' alignment='center'>
				Форматы участия:
			</Text>

			{plans.map((val, key) => (
				<div key={key} className={clsx('relative flex flex-col items-center gap-3 px-7 py-7 bg-gray-50 border border-gray-100 rounded-lg', {
					'mt-10': key === 0,
				})}>
					{key === 0 && (
						<div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52">
							<Image
								src='/best-seller.svg'
								alt='Идеально для подарка'
								width={211}
								height={118}
								className='w-auto h-auto'
							/>
						</div>
					)}
					<Text as='h3' variant='heading2xl' fontWeight='semibold' alignment='center'>
						{val.title}
					</Text>
					<Text as='h3' variant='heading3xl' fontWeight='bold' alignment='center'>
						{val.price} <Text as='span' variant='heading2xl' fontWeight='semibold'>₽</Text>
					</Text>
					<div className="mt-3 w-full">
						{val.text}
					</div>
					<Link
						className='inline-flex items-center gap-x-3 mt-3 rounded text-center px-10 py-3 bg-blue-400 leading-4 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400'
						href='https://t.me/soaring_seagull'
					>
						<span className='text-md font-semibold uppercase'>Купить</span>
						<PaperAirplaneIcon className='w-6 h-6' />
					</Link>
				</div>
			))}

			<Divider />

			<Text as='h2' variant='heading2xl'>
				Вопрос/ответ
			</Text>

			{faqs.map((item, k) => {
				return (
					<details key={k} className="group marker:content-['']">
						<summary className='flex w-full cursor-pointer select-none justify-between text-left text-base font-semibold leading-7 text-slate-900 group-open:text-blue-400 [&amp;::-webkit-details-marker]:hidden'>
							{item.name}
							<svg
								className='ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700 group-open:stroke-blue-500'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<path d='M18 12H6'></path>
								<path className='group-open:hidden' d='M12 6v12'></path>
							</svg>
						</summary>
						<div className='pt-6'>
							<div className='prose prose-slate max-w-none flex flex-col gap-3 prose-a:font-semibold prose-a:text-blue-400 hover:prose-a:text-blue-500'>
								{item.text}
							</div>
						</div>
					</details>
				)
			})}

			<Link
				className='rounded bg-blue-400 leading-5 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 text-center px-10 py-3 flex flex-col'
				href='https://t.me/soaring_seagull'
			>
				<span className=''>Остались вопросы?</span>
				<span className='text-md font-semibold uppercase'>написать в телеграм</span>
			</Link>
		</main>
	)
}

const plans = [
	{
		title: 'Базовый',
		price: '3 200',
		text: (
			<List gap='extraTight'>
				<List.Item>
					<CheckIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					15 видео-материалов
				</List.Item>
				<List.Item>
					<CheckIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					рабочая тетрадь
				</List.Item>
				<List.Item>
					<CheckIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					свободный график прохождения
				</List.Item>
			</List>
		)
	},
	{
		title: 'Стандарт',
		price: '6 299',
		text: (
			<List gap='extraTight'>
				<List.Item>
					<CheckIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					15 видео-материалов
				</List.Item>
				<List.Item>
					<CheckIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					рабочая тетрадь
				</List.Item>
				<List.Item>
					<CheckIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					общий чат
				</List.Item>
				<List.Item>
					<CheckCircleIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					заключительный созвон на тему: «Анализируем прошлый год и ставим цели на новый!»
				</List.Item>
			</List>
		)
	},
	{
		title: 'PRO',
		price: '8 650',
		text: (
			<List gap='extraTight'>
				<List.Item>
					<CheckIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					15 видео-материалов
				</List.Item>
				<List.Item>
					<CheckIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					рабочая тетрадь
				</List.Item>
				<List.Item>
					<CheckIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					общий чат
				</List.Item>
				<List.Item>
					<CheckBadgeIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					заключительный созвон на тему: «Анализируем прошлый год и ставим цели на новый!»
				.</List.Item>
				<List.Item>
					<CheckBadgeIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					персональная сессия
				</List.Item>
				<List.Item>
					<CheckBadgeIcon className='mt-1 h-5 w-5 flex-none text-blue-400' aria-hidden='true' />
					личное куратство в переписк
				</List.Item>
			</List>
		)
	},
]

const three = [
	{
		name: <>1 неделя. <strong className="font-bold">Внутренний критик</strong></>,
		icon: HeartIcon,
		content: (
			<>
				<ul className="grid cols-span-1 gap-y-1">
					<li className="flex items-start gap-2">
						<Text as='span'>Лекция: Как устроен внутренний критик</Text>
					</li>
					<li className="flex items-start gap-2">
						<Text as='span'>Лекция: Я — это не ярлык: наши мысли о себе</Text>
					</li>
					<li className="flex items-start gap-2">
						<Text as='span'>Три практики</Text>
					</li>
				</ul>
			</>
		)
	},
	{
		name: <>2 неделя. <strong className="font-bold">Контакт с собой</strong></>,
		icon: SunIcon,
		content: (
			<>
				<ul className="grid cols-span-1 gap-y-1">
					<li className="flex items-start gap-2">
						<Text as='span'>Лекция: Состаляющие контакта с собой: чувства, мысли, тело</Text>
					</li>
					<li className="flex items-start gap-2">
						<Text as='span'>Лекция: Как наше детство влияет на наш контакт с собой</Text>
					</li>
					<li className="flex items-start gap-2">
						<Text as='span'>Три практики</Text>
					</li>
				</ul>
			</>
		)
	},
	{
		name: <>3 неделя. <strong className="font-bold">Зона комфорта</strong></>,
		icon: BoltIcon,
		content: (
			<>
				<ul className="grid cols-span-1 gap-y-1">
					<li className="flex items-start gap-2">
						<Text as='span'>Лекция: Расскрывая в себе любопытного ребенка</Text>
					</li>
					<li className="flex items-start gap-2">
						<Text as='span'>Лекция: Хочу, но не хочу: что нас останавливает от лучшей жизни</Text>
					</li>
					<li className="flex items-start gap-2">
						<Text as='span'>Три практики</Text>
					</li>
				</ul>
			</>
		)
	},
]


const faqs = [
	{
		name: 'Это полностью онлайн формат?',
		text: (
			<Text as='p'>
				Да, курс проходит онлайн в телеграмме. Однако, если вы из Калининграда и приобретаете тариф «PRO», то возможна личная встреча в кафе
			</Text>
		),
	},
	{
		name: 'Как будет проходить курс?',
		text: (
			<>
				<Text as='p'>
					Каждую неделю с понедельника по пятницу вам будут приходить видео-материалы и рабочая тетрадь.
				</Text>
				<List gap='extraTight'>
					<List.Item>При базовом тарифе вы сами выполняете все задания.</List.Item>
					<List.Item>При тарифе «Стандарт» у вас есть общий чат, в котором можно задавать вопросы и делиться своей домашней работой.</List.Item>
					<List.Item>При тарифе «PRO» вы находитесь на личном сопровождении с психологом, который помогает, дораскручивает и дополнительно объясняет.</List.Item>
				</List>
			</>
		),
	},
]