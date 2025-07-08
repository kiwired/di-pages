import { berold } from "@/src/shared/ui";
import Image from "next/image";

export const HeaderImage = ({ title, img }: { title: string, img?: string }) => {
	return (
		<div className="relative -mt-12">
			<div className="absolute top-0 left-0 w-full h-full bg-black/20" />
			{img && <Image src={img} alt={title} width={375} height={275} className="w-full h-full object-cover absolute top-0 left-0" />}
			<div className="max-w-xs mx-auto space-y-7 px-3 pt-28 pb-16 relative z-10">
				<div className={berold.className}>
					<h2 className='text-3xl/8 pr-20 text-white'>{title}</h2>
				</div>
			</div>
		</div>
	);
}