import Image from "next/image";

type FeaturesProps = React.PropsWithChildren & {};

export const Features = ({ children }: FeaturesProps) => {
	return (
		<div className="bg-white relative">
			<Image src='/epk/features-v1.jpg' alt="" width={375} height={275} className="w-full h-full object-cover absolute top-0 left-0" />
			<div className="max-w-sm mx-auto space-y-7 px-5 pt-9 pb-10 relative z-10">
				{children}
			</div>
		</div>
	);
}