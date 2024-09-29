import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { BoltIcon, CalendarIcon, HeartIcon, InformationCircleIcon, CheckIcon, SunIcon, PaperAirplaneIcon, PencilSquareIcon, RocketLaunchIcon, Battery50Icon, CheckBadgeIcon, CheckCircleIcon, ExclamationTriangleIcon, DocumentTextIcon, PuzzlePieceIcon } from '@heroicons/react/20/solid'
import { StarIcon } from '@heroicons/react/24/outline'
import { Divider, List, Text } from '@/ui'
import { Btn } from './btn'

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
				<div className="flex items-center justify-center gap-2 mt-2">
					<CalendarIcon className="h-5 w-5 text-blue-400" />
					<Text as="span">с 4 по 24 декабря</Text>
				</div>
				<h1 className="mt-2 text-4xl tracking-tight text-gray-700">
					<span className="text-2xl text-gray-500">«</span>
					<strong className="font-bold text-gray-800">Меняйся</strong>
					<span className="text-2xl font-normal text-gray-500">»</span>
				</h1>
				<p className="mt-2 text-lg font-semibold text-blue-400">
					Предновогодний курс
				</p>
			</div>

			<Image
				src='/img-01.jpg'
				alt='Диана Позднякова'
				width={600}
				height={400}
				className='w-full h-auto'
			/>

			<Text as='p' alignment='center'>
				Курс для тех, кто устал от сухой теории и хочет пойти в реальную психологическую практику
			</Text>

			<Text as='p' alignment='center'>
				<Btn />
			</Text>

			<Divider />

			<Text as='h2' variant='heading2xl'>
				Для тех
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
					<Text as="span">
						кто хочет получить <Text as="strong" fontWeight="semibold">конкретные техники</Text>, которые улучшат вашу жизнь, без обращения к психологу
					</Text>
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


			<Text as='p' alignment='center'>
				<Btn content='Выбрать тариф' target='#plans' />
			</Text>

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

			<div className="bg-papper-gradient flex flex-col gap-7 my-3 -mx-5 py-10 px-7">

				<Text as='h2' variant='heading2xl'>
					Суть курса:
				</Text>

				<Text as='p'>
					Курс будет длиться 3 недели. За это время мы погрузимся в три основные темы:
				</Text>

				<div className="relative flex flex-col gap-7">
					<div className="absolute top-0 left-4 -ml-0.5 w-0.5 h-full bg-blue-400"></div>
					{features.map((val, key) => {
						return (
							<details key={key} className="relative block group marker:content-['']" open={key === 0}>
								<summary className='flex items-center gap-3 cursor-pointer select-none group-open:text-blue-400 [&amp;::-webkit-details-marker]:hidden'>
									<svg
										className='h-7 w-7 rounded-full flex-none border-2 border-blue-400 border-spacing-2 bg-white stroke-blue-500 group-open:stroke-white group-open:bg-blue-400'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M18 12H6' />
										<path className='group-open:hidden' d='M12 6v12' />
									</svg>
									{val.name}
								</summary>
								<div className='pl-10 pt-6'>
									<div className='prose prose-slate max-w-none flex flex-col gap-3 prose-a:font-semibold prose-a:text-blue-400 hover:prose-a:text-blue-500'>
										{val.text}
									</div>
								</div>
							</details>
						)
					})}
				</div>

				<Text as='p'>
					На каждую тему предусмотрено 2 лекции и 3 практики.
				</Text>
				
				<Text as='p'>
					Это будет максимально глубокий и практический курс с техниками и практиками из гештальт-терапии и АСТ-терапии.
				</Text>
				
				<Text as='p'>
					Вместе мы будем учиться слушать и слышать себя, работать над непродуктивными стратегиями вашего поведения и учиться выстраивать отношения с собой и миром по-новому!
				</Text>

			</div>

			<Text id='programm' as='h2' variant='heading2xl'>
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
					<div key={key} className="">
						<dt className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-start justify-center rounded-lg bg-blue-400">
								<val.icon className="h-6 w-6 text-white mt-2" aria-hidden="true" />
							</div>
							<Text as='p' tone='blue'>{val.name}</Text>
						</dt>
						<dd className="mt-4 text-base">
							{val.content}
						</dd>
					</div>
				))}
			</dl>

			<Text as='p'>
				По итогу вы получите 15 видеоматериалов + рабочую тетрадь со всеми конспектами и техниками!
			</Text>

			<div className="flex gap-3 -mx-5 px-5 py-5 bg-blue-50 text-blue-400">
				<InformationCircleIcon className="h-6 w-6 flex-none text-blue-400" />
				<div className="">
					Для тарифа «Вместе» и «Глубина» предусмотрен заключительный созвон на тему: «Анализируем прошлый год и ставим цели на новый!»
				</div>
			</div>

			<Divider />

			<Text id='plans' as='h2' variant='heading2xl' alignment='center'>
				Форматы участия:
			</Text>

			{plans.map((val, key) => (
				<div key={key} className={clsx('relative flex flex-col items-center gap-3 px-7 py-7 bg-gray-50 border border-gray-100 rounded-lg bg-papper-gradient', {
					'mt-14': key === 0,
				})}>
					{key === 0 && (
						<div className="absolute z-10 bottom-full -left-5 w-32 translate-y-20">
							<Image
								src='/best-seller.png'
								alt='Идеально для подарка'
								width={148}
								height={148}
								className='w-auto h-auto'
							/>
						</div>
					)}

					<div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-1/2 w-auto px-5 whitespace-nowrap text-sm rounded-full border border-gray-200 bg-gray-100 text-gray-800">
						{val.hint}
					</div>

					<Text as='h3' variant='heading2xl' fontWeight='semibold' alignment='center'>
						{val.title}
					</Text>
					<div className="mt-3 mb-1 w-full">
						<Text as='legend'>
							{val.text}
						</Text>
					</div>
					<Text as='h3' variant='heading3xl' fontWeight='bold' alignment='center'>
						{val.price} <Text as='span' variant='heading2xl' fontWeight='semibold'>₽</Text>
					</Text>
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
					<details key={k} className="block group marker:content-['']">
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
		title: 'Я сам',
		hint: 'Самостоятельный тариф',
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
		title: 'Вместе',
		hint: 'Групповой тариф',
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
		title: 'Глубина',
		hint: 'Индивидуальный тариф',
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
					личное кураторство в переписке
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
				<ul className="grid cols-span-1 gap-y-2">
					{/* <li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Поговорим о негативных установках и мыслях, саботаже, вредных стратегиях</Text>
					</li>
					<li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Научимся адекватно работать с внутренним критиком</Text>
					</li>
					<li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Освободимся от множества страхов, тревоги и сомнений</Text>
					</li>
					<li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Станем увереннее, сильнее, решительнее</Text>
					</li> */}
					<li className="flex items-start gap-4">
						<DocumentTextIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Лекция: Как устроен внутренний критик</Text>
					</li>
					<li className="flex items-start gap-4">
						<DocumentTextIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Лекция: Я — это не ярлык: наши мысли о себе</Text>
					</li>
					<li className="flex items-start gap-4">
						<PuzzlePieceIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
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
				<ul className="grid cols-span-1 gap-y-2">
					{/* <li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Поговорим о чувствах и телесном проживании эмоций, про контроль и про то, что лишает вас энергии в жизни, про влияние вашего прошлого на ваше настоящее и что с этим делать</Text>
					</li>
					<li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Научимся замечать свои чувства и повысим телесную чувствительность</Text>
					</li>
					<li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Обретем навык здорового отношения к своим эмоциям</Text>
					</li>
					<li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Улучшим контракт с собой и внешним миром</Text>
					</li> */}
					<li className="flex items-start gap-4">
						<DocumentTextIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Лекция: Состаляющие контакта с собой: чувства, мысли, тело</Text>
					</li>
					<li className="flex items-start gap-4">
						<DocumentTextIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Лекция: Как наше детство влияет на наш контакт с собой</Text>
					</li>
					<li className="flex items-start gap-4">
						<PuzzlePieceIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
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
				<ul className="grid cols-span-1 gap-y-2">
					{/* <li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Поговорим о зоне комфорта, внутренних ценностях и о том, что мешает вам совершать новые действия и идти в новый опыт</Text>
					</li>
					<li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Научимся работать со своими внутренними преградами на пути к счастью</Text>
					</li>
					<li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Узнаем свои истинные желания</Text>
					</li>
					<li className="flex items-start gap-4">
						<MinusIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Попробуем пойти в новый опыт и начнем жить эту жизнь ИНАЧЕ!</Text>
					</li> */}
					<li className="flex items-start gap-4">
						<DocumentTextIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Лекция: Расскрывая в себе любопытного ребенка</Text>
					</li>
					<li className="flex items-start gap-4">
						<DocumentTextIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Лекция: Хочу, но не хочу: что нас останавливает от лучшей жизни</Text>
					</li>
					<li className="flex items-start gap-4">
						<PuzzlePieceIcon className="mt-1 mx-2 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
						<Text as='span'>Три практики</Text>
					</li>
				</ul>
			</>
		)
	},
]


const features = [
	{
		name: 'Внутренний критик',
		text: (
			<ul className='flex flex-col gap-2'>
				<li className='flex gap-2'>
					<CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
					<Text as='p'>поговорим о негативных установках и вреде позитивного мышления, о том, как мы саботируем себя</Text>
				</li>
				<li className='flex gap-2'>
					<CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
					<Text as='p'>сделаем 3 практики на проработку внутреннего критика</Text>
				</li>
				<li className='flex gap-2'>
					<CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
					<Text as='p'>освободимся от множества страхов, тревоги и сомнений</Text>
				</li>
			</ul>
		),
	},
	{
		name: 'Контакт с собой',
		text: (
			<ul className='flex flex-col gap-2'>
				<li className='flex gap-2'>
					<CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
					<Text as='p'>поговорим о чувствах и телесном проживании эмоций, про контроль и про то, что лишает вас энергии в жизни, про влияние вашего прошлого на ваше настоящее и что с этим делать</Text>
				</li>
				<li className='flex gap-2'>
					<CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
					<Text as='p'>сделаем 3 практики на улучшие контакта с собой, своими чувствами и телом</Text>
				</li>
				<li className='flex gap-2'>
					<CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
					<Text as='p'>каждый день будем вести трекер эмоциоального состояния</Text>
				</li>
				<li className='flex gap-2'>
					<CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
					<Text as='p'>обретем навык здорового отношения к своим эмоциям</Text>
				</li>
			</ul>
		),
	},
	{
		name: 'Зона комфорта',
		text: (
			<ul className='flex flex-col gap-2'>
				<li className='flex gap-2'>
					<CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
					<Text as='p'>поговорим о зоне комфорта, о том, что нас останавливает на пути к целям, о нашем внутреннем ребенке</Text>
				</li>
				<li className='flex gap-2'>
					<CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
					<Text as='p'>научимся работать со своими внутренними преградами на пути к счастью</Text>
				</li>
				<li className='flex gap-2'>
					<CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
					<Text as='p'>выполним 3 техники для прокачки внутренней силы</Text>
				</li>
				<li className='flex gap-2'>
					<CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
					<Text as='p'>будем учиться ошибаться и быть неидеальными</Text>
				</li>
			</ul>
		),
	},
]

const faqs = [
	{
		name: 'Это полностью онлайн формат?',
		text: (
			<Text as='p'>
				Да, курс проходит онлайн в телеграмме. Однако, если вы из Калининграда и приобретаете тариф «Глубина», то возможна личная встреча в кафе
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
					<List.Item>При тарифе «Вместе» у вас есть общий чат, в котором можно задавать вопросы и делиться своей домашней работой.</List.Item>
					<List.Item>При тарифе «Глубина» вы находитесь на личном сопровождении с психологом, который помогает, дораскручивает и дополнительно объясняет.</List.Item>
				</List>
			</>
		),
	},
]
