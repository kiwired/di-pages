import localFont from 'next/font/local'

const evolventa = localFont({
	src: [
		{
			path: './fonts/Evolventa-Regular.woff',
			weight: '400',
			style: 'normal',
		},
	]
})

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={evolventa.className}>
			{children}
		</div>
	)
}