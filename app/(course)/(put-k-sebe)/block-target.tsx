import { SparklesIcon } from "@heroicons/react/20/solid";
import { TextH2 } from "./text-h2";
import { BtnAction } from "./btn-action";

export function BlockTarget() {

	const features = [
		{
			name: 'Перестанете страдать от тревоги и внутреннего недовольства',
			icon: SparklesIcon,
		},
		{
			name: 'Научишься прощать свои ошибки и неидеальность',
			icon: SparklesIcon,
		},
		{
			name: 'Познакомишься с внутренними препятствиями на пути к счастливой жизни',
			icon: SparklesIcon,
		},
		{
			name: 'Научишься работать со своими страхами и критичностью ',
			icon: SparklesIcon,
		},
		{
			name: 'Улучшить отношения с собой и окружающими',
			icon: SparklesIcon,
		},
		{
			name: 'Поймешь свои настоящие чувства и желания',
			icon: SparklesIcon,
		},
	]

	return (
		<div className="">
			<TextH2 title="Что даст вам курс:" />

			<ul role="list" className="mt-6 space-y-7 text-gray-800">
				{features.map((feature, key) => (
					<li key={key} className="flex gap-x-2">
						<feature.icon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
						<span>
							{feature.name}
						</span>
					</li>
				))}
			</ul>

			<p className="mt-6 text-center">
				<BtnAction title="Программа" href="#program" />
			</p>
		</div>
	)
}
