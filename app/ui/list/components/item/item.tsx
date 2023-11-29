
export function Item({ children }: { children?: React.ReactNode }) {
	return (
		<li className={'flex gap-x-2 text-gray-800'}>
			{children}
		</li>
	)
}
