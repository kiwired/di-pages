import { type ReactNode } from 'react'
import clsx from 'clsx'

type Element =
	| 'dt'
	| 'dd'
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'span'
	| 'strong'
	| 'legend'

type Variant =
	| 'headingSm'
	| 'headingMd'
	| 'headingLg'
	| 'headingXl'
	| 'heading2xl'
	| 'heading3xl'
	| 'bodySm'
	| 'bodyMd'
	| 'bodyLg'

type Alignment = 'start' | 'center' | 'end' | 'justify'

type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold'

type Tone = 'indigo' | 'blue' | 'cyan' | 'subdued'

type TextDecorationLine = 'line-through'

export interface TextProps {
	/** Adjust horizontal alignment of text */
	alignment?: Alignment
	/** The element type */
	as: Element
	/** Prevent text from overflowing */
	breakWord?: boolean
	/** Text to display */
	children: ReactNode
	/** Adjust tone of text */
	tone?: Tone
	/** Adjust weight of text */
	fontWeight?: FontWeight
	/** HTML id attribute */
	id?: string
	/** Truncate text overflow with ellipsis */
	truncate?: boolean
	/** Typographic style of text */
	variant?: Variant
	/** Visually hide the text */
	visuallyHidden?: boolean
	/** Add a line-through to the text */
	textDecorationLine?: TextDecorationLine
}

export const Text = ({
	alignment,
	as,
	breakWord,
	children,
	tone,
	fontWeight,
	id,
	truncate = false,
	variant,
	visuallyHidden = false,
	textDecorationLine,
}: TextProps) => {
	const Component =
		as || ((visuallyHidden ? 'span' : 'p') as keyof JSX.IntrinsicElements)

	const className = clsx('', {
		'text-xl': variant == 'headingXl',
		'text-2xl': variant == 'heading2xl',
		'text-3xl': variant == 'heading3xl',
		'text-sm': variant == 'bodySm',
		'text-base': variant == 'bodyMd',
		'text-lg': variant == 'bodyLg',
		// font weight
		'font-normal' : fontWeight == 'regular',
		'font-medium' : fontWeight == 'medium',
		'font-semibold' : fontWeight == 'semibold',
		'font-bold' : fontWeight == 'bold',

		'text-gray-800': tone == undefined,
		'text-gray-500': tone == 'subdued',
		'text-indigo-500': tone == 'indigo',
		'text-cyan-500': tone == 'cyan',
		'text-blue-500': tone == 'blue',

		'text-center': alignment == 'center',

		// variant && styles[variant],
		// (alignment || truncate) && styles.block,
		// breakWord && styles.break,
		// tone && styles[tone],
		// truncate && styles.truncate,
		// visuallyHidden && styles.visuallyHidden,
		// textDecorationLine && styles[textDecorationLine]
	})

	return (
		<Component className={className} {...(id && { id })}>
			{children}
		</Component>
	)
}
