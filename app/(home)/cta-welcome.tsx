import { berold } from "@/src/shared/ui";
import Image from "next/image";

type CTAWelcomeProps = React.PropsWithChildren & {
	title: string;
};

export const CTAWelcome = ({ title, children }: CTAWelcomeProps) => {
	return (
		<div className="bg-white rounded-[50px] z-10">
			<div className="max-w-xs mx-auto space-y-7 px-3 pt-9 pb-10 text-center">
				<div className={berold.className}>
					<h2 className='text-3xl'>{title}</h2>
				</div>
				<div>
					<Image src='/epk/tg-preview.jpg' alt="" width={320} height={320} className="w-full max-w-[110px] h-auto mx-auto rounded-full" />
					<h3 className="text-xl font-bold mt-3">Плохие люди | психология</h3>
					<p className="text-sm text-gray-500">790 подписчиков</p>
				</div>
				{/* <p>Как справиться с <b>внутренним критиком</b> и <b>страхом отвержения</b>, научиться ценить себя и <b>снизить тревожность</b>, перестать быть "хорошей" и начать ставить себя на первое место без чувства вины и стыда</p> */}
				<p>Здесь ты сможешь <b>исследовать</b> свой страх <b>отвержения и оценки</b>, а также понять, что на глубинном уровне мешает тебе почувствать себя уверенной и ценной</p>
				{children}
			</div>
		</div>
	);
}