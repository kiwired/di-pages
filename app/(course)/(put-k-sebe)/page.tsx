import type { Metadata } from "next";
import Image from "next/image"
import { BtnAction } from "./btn-action";

import { BlockThree } from "./block-three";
import { BlockTarget } from "./block-target";
import { BlockWhy } from "./block-why";
import { BlockPlan } from "./block-plan";
import { BlockMemory } from "./block-memory";


export const metadata: Metadata = {
	metadataBase: new URL('https://di.wishoy.com/'),
	title: 'Путь к себе - Авторский курс ‌Дианы Поздняковой',
	description: 'Улучши отношения с собой ‌за 3 недели',
	authors: {
		url: 'https://t.me/psicho_di',
		name: 'Диана Позднякова',
	},
	openGraph: {
		title: 'Путь к себе - Авторский курс ‌Дианы Поздняковой',
		description: 'Улучши отношения с собой ‌за 3 недели',
		siteName: '‌Психолог Диана Позднякова',
		images: [
			'/img-01.jpg'
		]
	}
}

export default function Home() {
	return (
		<main className="flex min-h-screen max-w-sm mx-auto flex-col p-5 gap-10">

			<Image
				src="/img-01.jpg"
				alt="‌Диана Позднякова"
				width={600}
				height={400}
				className="w-full h-auto"
			/>

			<div className="text-center">
				<p className="text-base font-semibold text-indigo-500">
					Авторский курс <strong className="font-semibold text-indigo-600">Дианы Поздняковой</strong>
				</p>
				<h1 className="mt-2 text-4xl tracking-tight text-gray-800">
					<span className="text-2xl text-gray-500">«</span>
					<strong className="font-bold">Путь к себе</strong>
					<span className="text-2xl font-normal text-gray-500">»</span>
				</h1>
				<p className="mt-2 text-lg text-gray-800">
					улучши отношения с собой ‌за 3 недели
				</p>
			</div>

			<div className="border-t border-gray-200"></div>

			<BlockTarget />

			<div className="border-t border-gray-200"></div>

			<BlockWhy />

			<Image
				src="/img-02.jpg"
				alt="‌Диана Позднякова"
				width={600}
				height={400}
				className="w-full h-auto"
			/>

			<BlockPlan />

			<BlockThree />

			<div className="border-t border-gray-200"></div>

			<BlockMemory />

			<div className="">
				<p className="text-base font-semibold text-indigo-500">
					Стоимость курса
				</p>
				<div className="flex items-end justify-between">
					<h1 className="mt-2 text-3xl tracking-tight text-gray-800">
						<strong className="text-4xl text-semibold">4 000</strong> ₽
					</h1>
					<div className="flex items-center gap-2 text-gray-800">
						<span className="w-4 h-4 p-1 rounded-full bg-green-100">
							<span className="block w-2 h-2 rounded-full bg-green-400" />
						</span>
						Осталось <strong className="font-bold">2</strong> места!
					</div>
				</div>
				<p className="mt-2 text-sm italic text-gray-500">
					для людей из БД спец.условия
				</p>
				<p className="mt-5">
					<BtnAction title="Хочу на курс!" size='large' block />
				</p>
			</div>

		</main>
	)
}
