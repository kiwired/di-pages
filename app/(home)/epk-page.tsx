import Image from 'next/image'
import { georgia, LogoTextV1Icon } from '@/src/shared/ui'
import { HeaderImage } from './header-image'
import { CTALink } from './cta-link'
import { CTAWelcome } from './cta-welcome'
import { Features } from './features'

export function EpkPage() {
	return (
		<main className={`${georgia.className} flex flex-col max-w-md mx-auto`}>

			<div className="bg-[url('/epk/diana-v1.png')] bg-cover bg-no-repeat text-white -mb-10">
				<div className="text-center text-sm/[22px] uppercase space-y-2 pb-20 pt-[280px]">
					<LogoTextV1Icon className='w-[280px] h-auto mx-auto' />
					{/* <p className='max-w-[270px] mx-auto'>Психолог, гештальт-терапевт для сильных и хороших, которые хотят обрести себя</p> */}
					<p className='max-w-[270px] mx-auto'>Психолог для тех, кто хочет оберести внутренню опору и чувство "меня достаточно"</p>
				</div>
			</div>

			<CTAWelcome title="Приглашаю вас в психологический блог">
				<div className="max-w-[300px] mx-auto">
					<CTALink />
				</div>
			</CTAWelcome>

			<HeaderImage title="О чем я пишу в блоге:" img="/epk/header-v1.jpg" />

			<Features>
				<ul className='space-y-3'>
					<li className='relative pl-14 pb-4'>
						<span className='absolute top-0 left-0 text-3xl/8 text-[#7C96B8]'>01</span>
						<span className='absolute left-5 top-10 bottom-0 w-px bg-[#7C96B8]' />
						{/* Устала от постоянного стремления быть идеальной и заслуживать любовь и внимание близких? */}
						Меня недостаточно: порочный круг из гипер—контроля и обесценивания
					</li>
					<li className='relative pl-14 pb-4'>
						<span className='absolute top-0 left-0 text-3xl/8 text-[#7C96B8]'>02</span>
						<span className='absolute left-5 top-10 bottom-0 w-px bg-[#7C96B8]' />
						{/* Как освободиться от навязчивых мыслей о мнении окружающих: «Что подумают обо мне?» */}
						5 верных способ разрушить отношения
					</li>
					<li className='relative pl-14 pb-4'>
						<span className='absolute top-0 left-0 text-3xl/8 text-[#7C96B8]'>03</span>
						<span className='absolute left-5 top-10 bottom-0 w-px bg-[#7C96B8]' />
						{/* Невозможно избежать сравнений с другими: если ваша самооценка зависит от сопоставления себя с окружающими. */}
						Почему не получается перестать сравнивать себя с другими?
					</li>
					<li className='relative pl-14'>
						<span className='absolute top-0 left-0 text-3xl/8 text-[#7C96B8]'>04</span>
						<span className='absolute left-5 top-10 bottom-0 w-px bg-[#7C96B8]' />
						{/* Я достаточно хороша, только если соответствую своим внутренним стандартам. */}
						Страх отвержения: что нужно проработать, чтобы перестать гадать «любит/не любит»?
					</li>
					<li className='relative pl-14'>
						<span className='absolute top-0 left-0 text-3xl/8 text-[#7C96B8]'>05</span>
						Темная сторона личных границ
					</li>
				</ul>

				<div className="max-w-[300px] mx-auto">
					<CTALink />
				</div>

				<div className="relative pl-14">
					<Image src='/epk/diana-circle-v1.png' alt="Диана Позднякова" width={77} height={77} className="w-[77px] h-auto absolute top-1/2 left-0 -translate-y-1/2" />
					{/* <div className="bg-white rounded-[20px] py-4 pl-10 pr-6 text-sm/5 italic">Здесь не про магию или "прокачку женской энергии", а про глубинную психотерапию и работу над собой</div> */}
					<div className="bg-white rounded-[20px] py-4 pl-10 pr-6 text-sm/5 italic">Здесь не про магию или «прокачку женской энергии», а про глубинную психотерапию без волшебных таблеток и простых ответов.</div>
				</div>
			</Features>

		</main>
	)
}
