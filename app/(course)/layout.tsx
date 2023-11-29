import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>

			<div className="absolute top-0 left-0 w-full">
				<Image
					src='/logo.svg'
					alt='Диана Позднякова - психолог, гештальт—терапевт'
					width={215}
					height={55}
					className='w-max-full w-auto h-15 mx-auto my-5'
				/>
			</div>


			{children}
		</>
	)
}