'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import clsx from 'clsx'

type Size = 'small' | 'medium' | 'large';

export const BtnAction = ({ href, title, size = 'medium', block }: { href?: string, title: string, size?: Size, block?: boolean }) => {

	const ref = useRef<HTMLAnchorElement>(null)

	useEffect(() => {
		if (!href) {
			return
		}
		const onClick = (event: MouseEvent) => {
			event.preventDefault()
			const node = document.querySelector(href)
			if (node) {
				node.scrollIntoView({ behavior: "smooth", inline: "nearest" });
			}
		}
		ref.current?.addEventListener('click', onClick)
		return () => {
			ref.current?.removeEventListener('click', onClick)
		}
	}, [href])

	const className = clsx(
		'rounded bg-indigo-600 font-semibold text-white uppercase shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-center',
		{
			'inline-block': block !== true,
			'block': block === true,
			'text-sm px-3 py-2': size === 'small',
			'text-sm px-6 py-3': size === 'medium',
			'text-md px-10 py-5': size === 'large',
		}
	)
	return (
		<Link
			ref={ref}
			href={href || 'https://t.me/soaring_seagull'}
			className={className}
			// aria-label="Записаться на курс"
			// target="_blank"
			>
			{title}
		</Link>
	)
}
