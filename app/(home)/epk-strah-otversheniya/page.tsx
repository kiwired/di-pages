import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MinusIcon } from '@heroicons/react/20/solid'

export const metadata: Metadata = {
	title: 'Плохие люди',
	description: 'Блог для тех, кто хочет перестать заслуживать любовь и поверить, что с ними всё так',
}

export default function HomePage() {
	return (
		<main className='bg-[#E3E2DE] p-5 py-10'>
			<div className="flex flex-col max-w-sm mx-auto gap-10">

				<div className="">
					<p className='text-center'>психологический блог</p>
					<h1 className='text-4xl font-semibold text-[#6B7D95] text-center'>Плохие люди</h1>
					<p className='bg-white rounded-2xl text-base text-center mt-2 p-5 hyphens-auto'>
						как справиться с <b>внутренним критиком</b> и <b>страхом отвержения</b>, научиться ценить себя и <b>снизить тревожность</b>, перестать быть "хорошей" и начать ставить себя на первое место <b>без чувства вины и стыда</b>
					</p>
				</div>

				<div className="">
					<h2 className='text-3xl font-semibold text-[#6B7D95] text-center'>О чем пишу:</h2>
					<ul className="grid cols-span-1 gap-y-2 mt-7">
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">Что нужно проработать, чтобы <b>перестать гадать "любит/не любит"</b> и тревожиться, все ли хорошо в отношениях или все же <b>"я недостаточно хороша"</b>?</span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">Бесконечное <b>насилие над собой</b>: сколько токсичных "надо", "я должна" живут у нас в голове...</span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">Замечали ли вы за собой такой паттерн: чувствуя малейшее <b>отвержение</b>, вы первые отворачиваетесь и дистанцируетесь?</span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">Невозможно перестать <b>сравнивать себя с другими</b>, если вся твоя самооценка держится на сравнении себя с другими. Но кое-что сделать все же возможно...</span>
						</li>
					</ul>
				</div>

				<div className="text-center">
					<Link
						className='relative rounded-full bg-[#C8D9EB] border border-black text-xl leading-5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 px-6 py-5 inline-flex flex-row justify-center items-center gap-2'
						href='https://t.me/+T12H3QNSRAQwODQy'
					>
						<span className='text-md'>перейти в телеграм</span>
						<svg className='w-6 h-6 fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
							<path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" />
						</svg>
					</Link>
					<p className="pt-3 text-sm">
						❌ Здесь не про магию или "прокачку женской энергии", а про глубинную психотерапию и работу над собой
					</p>
				</div>

				<div className="px-3">
					<Image
						src='/home/diana-lg.png'
						alt='Диана Позднякова'
						width={300}
						height={300}
						className='w-full h-auto px-10'
					/>
					<div className="bg-white flex flex-col gap-3 p-7 rounded-2xl">
						<h2 className='text-2xl font-semibold text-[#6B7D95]'>Диана Позднякова</h2>
						<p className="uppercase text-sm">
							психолог, гештальт-терапевт для сильных и хороших, которые хотят стать счастливыми
						</p>
					</div>
				</div>

			</div>
		</main>
	)
}
