import { TextH2 } from "./text-h2";

export function BlockPlan() {
	return (
		<div id="program" className="">

			<TextH2 title="Программа:" />

			<dl className="mt-6 grid grid-cols-3 gap-x-3">
				<div className="border-t-4 border-indigo-600">
					<dt className="mt-2 text-indigo-600">3 недели</dt>
				</div>
				<div className="border-t-4 border-indigo-600">
					<dt className="mt-2 text-indigo-600">3 темы</dt>
				</div>
				<div className="border-t-4 border-indigo-600">
					<dt className="mt-2 text-indigo-600">3 практики</dt>
				</div>
			</dl>

			<p className="mt-6 text-gray-800">
				Изначально каждый заходит на курс с разными личными запросами, которые являются отправной точкой для погружения в себя.
			</p>

			<p className="mt-6 text-gray-800">
				Темы, которые будут изучаться на трех неделях, являются основополагающими для любых перемен в концепции <strong className="font-bold">гештальт - терапии</strong> 
			</p>

		</div>
	)
}

