import { FingerPrintIcon, LightBulbIcon, RocketLaunchIcon } from "@heroicons/react/20/solid";
import { TextH2 } from "./text-h2";

export function BlockWhy() {

	const features = [
		{
			name: <>уровень <strong className="font-bold">чувств</strong></>,
			icon: FingerPrintIcon,
		},
		{
			name: <>уровень <strong className="font-">желаний / мыслей</strong></>,
			icon: LightBulbIcon,
		},
		{
			name: <>уровень <strong className="font-">действий</strong></>,
			icon: RocketLaunchIcon,
		},
	]

	return (
		<div className="">

			<TextH2 title="Суть курса:" />

			<p className="mt-6 text-gray-800">
				Большинство проблем в жизни сводятся к одному: вы плохо осознаете себя на одном или нескольких уровнях.
			</p>

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

			<p className="mt-6 text-gray-800">Чем лучше вы понимаете себя, тем продуктивнее, счастливее и качественнее ваша жизнь.</p>
			<p className="mt-6 text-gray-800">Именно поэтому на курсе мы будем учиться слушать и слышать себя, работать над непродуктивными стратегиями вашего поведения и учиться <strong className="font-bold">выстраивать отношения с собой по—новому!</strong> </p>

		</div>
	)
}

