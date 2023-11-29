import { BoltIcon, HeartIcon, MinusIcon, SunIcon } from "@heroicons/react/20/solid";

export function BlockThree() {

	const three = [
		{
			name: <>1 неделя. <strong className="font-bold">Чувства</strong></>,
			icon: HeartIcon,
			content: (
				<>
					<p>Будем учиться осознавать себя в моменте и справляться со сложными переживаниями. Также будет сделан акцент на телесном проживании чувств</p>
					<ul className="grid cols-span-1 gap-y-2 mt-2">
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">как и зачем принимать и осознавать свои чувства?</span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">про негативные чувства</span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">три зоны ответственности </span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">про тревогу, вину и стыд, зависть, обиду и злость</span>
						</li>
					</ul>
				</>
			)
		},
		{
			name: <>2 неделя. <strong className="font-bold">Желания</strong></>,
			icon: SunIcon,
			content: (
				<>
					<p>Будем учиться отслеживать свои истинные потребности, скрытые за нашими желаниями, а также будем учиться брать на себя ответственность</p>
					<ul className="grid cols-span-1 gap-y-2 mt-2">
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">о чем все ваши желания</span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">негативные установки </span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">когда желания не угадывают </span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">про ответственность</span>
						</li>
					</ul>
				</>
			)
		},
		{
			name: <>3 неделя. <strong className="font-bold">Действия</strong></>,
			icon: BoltIcon,
			content: (
				<>
					<p>Будем учиться идти в новый опыт и менять представления о себе, через перестройку нейронных связей</p>
					<ul className="grid cols-span-1 gap-y-2 mt-2">
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">про нейронные связи и новый опыт</span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">«отношения — это большое количество ошибок»</span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">что не так с близостью </span>
						</li>
						<li className="flex items-start gap-2">
							<MinusIcon className="mt-1 w-5" />
							<span className="flex-1">главный признак любви к себе</span>
						</li>
					</ul>
				</>
			)
		},
	]

	return (
		<div className="-mt-5">

			<dl className="mt-6 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10">
				{three.map((val, key) => (
					<div key={key} className="relative pl-16">
						<dt className="text-base leading-7 text-indigo-600">
							<div className="absolute left-0 top-0 flex h-10 w-10 items-start justify-center rounded-lg bg-indigo-600">
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

		</div>
	)
}
