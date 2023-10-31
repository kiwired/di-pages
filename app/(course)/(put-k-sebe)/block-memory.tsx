import { SparklesIcon } from "@heroicons/react/20/solid";
import { TextH2 } from "./text-h2";


export function BlockMemory() {

	const features = [
		{
			name: 'каждодневные практики ',
			icon: SparklesIcon,
		},
		{
			name: 'обратная связь от психолога в виде личной переписки',
			icon: SparklesIcon,
		},
		{
			name: 'групповые созвоны ',
			icon: SparklesIcon,
		},
		{
			name: 'рекомендации и доп.материалы от психолога',
			icon: SparklesIcon,
		},
		{
			name: 'бережное и поддерживающее пространство',
			icon: SparklesIcon,
		},
	]

	return (
		<div className="">

			<TextH2 title="Вас ожидают:" />

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

			<p className="mt-6 text-gray-800">
				Я могу гарантировать максимум вовлечения в вас и в ваши истории. Также я гарантирую высокое качество тех знаний, которые будут транслироваться на курсе. Но <strong className="font-bold">ваш результат зависит так же и от вас</strong>. Если вы готовы поработать над собой и взять ответственность за свою жизнь, то добро пожаловать на курс!
			</p>

		</div>
	)
}

