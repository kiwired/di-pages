'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowDownIcon } from '@heroicons/react/20/solid';


export const Btn = () => {

	const ref = useRef<HTMLAnchorElement>(null)

	useEffect(() => {
		const onClick = (event: MouseEvent) => {
			event.preventDefault()
			const node = document.querySelector('#programm')
			if (node) {
				node.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
			}
		}
		ref.current?.addEventListener('click', onClick)
		return () => {
			ref.current?.removeEventListener('click', onClick)
		}
	}, [])

	return (
		<Link
			ref={ref}
			className='inline-flex items-center justify-center gap-2 px-10 py-3 rounded bg-blue-400 font-semibold uppercase text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
			href='#programm'
		>
			Программа <ArrowDownIcon className='animate-bounce h-5 w-5' />
		</Link>
	)
}
