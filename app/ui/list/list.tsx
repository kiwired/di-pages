import clsx from 'clsx'
import { Item } from './components'

type Type = 'bullet' | 'number'

type Spacing = 'extraTight' | 'loose'

export interface ListProps {
	/**
	 * Determines the space between list items
	 * @default 'loose'
	 */
	gap?: Spacing;
	/**
	 * Type of list to display
	 * @default 'bullet'
	 */
	type?: Type;
	/** List item elements */
	children?: React.ReactNode;
}

export const List: React.FunctionComponent<ListProps> & {
	Item: typeof Item;
} = function List({ children, gap = 'loose', type = 'bullet' }: ListProps) {

	const ListElement = type === 'bullet' ? 'ul' : 'ol';

	const className = clsx(
		'text-gray-800',
		{
			'space-y-2': gap === 'extraTight',
			'space-y-5': gap === 'loose',
		}
	)

	return <ListElement className={className} role="list">{children}</ListElement>
}

List.Item = Item