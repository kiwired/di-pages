import { TelegramIcon } from "@/src/shared/ui";

export const CTALink = () => {
	return (
		<a
			className='relative w-full animate-btn-pulse rounded-full bg-[#7C96B8] text-white text-xl/6 font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C96B8] px-6 py-5 inline-flex flex-row justify-evenly items-center gap-2'
			href='https://t.me/zapiski_ot_di'
		>
			Перейти в телеграм
			<TelegramIcon className='w-6 h-6' />
		</a>
	);
}