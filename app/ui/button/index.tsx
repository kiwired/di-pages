import clsx from 'clsx';
import type { BaseButton } from './types';
// import { classNames, variationName } from '../../utilities/css';
// import { handleMouseUpByBlurring } from '../../utilities/focus';
// import type { MouseUpBlurHandler } from '../../utilities/focus';
// import { Spinner } from '../Spinner';
// import { UnstyledButton } from '../UnstyledButton';
// import type { UnstyledButtonProps } from '../UnstyledButton';

export interface ButtonProps extends BaseButton {
	/** The content to display inside the button */
	children?: string | string[];
	/**
	 * Changes the size of the button, giving it more or less padding
	 * @default 'medium'
	 */
	size?: 'micro' | 'slim' | 'medium' | 'large';
	/** Changes the inner text alignment of the button */
	textAlign?: 'left' | 'right' | 'center' | 'start' | 'end';
	/** Allows the button to grow to the width of its container */
	fullWidth?: boolean;
	/** Icon to display to the left of the button content */
	// icon?: React.ReactElement | IconSource;
	/** Indicates whether or not the button is the primary navigation link when rendered inside of an `IndexTable.Row` */
	dataPrimaryLink?: boolean;
	/** Sets the color treatment of the Button. */
	tone?: 'critical' | 'success';
	/** Changes the visual appearance of the Button. */
	variant?: 'plain' | 'primary' | 'tertiary' | 'monochromePlain';
}

interface CommonButtonProps
	extends Pick<
		ButtonProps,
		| 'id'
		| 'accessibilityLabel'
		| 'ariaDescribedBy'
		| 'role'
		| 'onClick'
		| 'onFocus'
		| 'onBlur'
		| 'onMouseEnter'
		| 'onTouchStart'
	> {
	// className: UnstyledButtonProps['className'];
	// onMouseUp: MouseUpBlurHandler;
	'data-primary-link'?: boolean;
}

type LinkButtonProps = Pick<ButtonProps, 'url' | 'external' | 'download' | 'target'>

type ActionButtonProps = Pick<
	ButtonProps,
	| 'submit'
	| 'disabled'
	| 'loading'
	| 'ariaControls'
	| 'ariaExpanded'
	| 'ariaChecked'
>;

const DEFAULT_SIZE = 'medium';

export function Button({
	id,
	children,
	url,
	disabled,
	external,
	download,
	target,
	submit,
	loading,
	role,
	// icon,
	size = DEFAULT_SIZE,
	fullWidth,
	tone,
	variant,
}: ButtonProps) {

	const isDisabled = disabled || loading;

	const className = clsx(
		// styles.Button,
		// fullWidth && styles.fullWidth,
		// icon && children == null && styles.iconOnly,
		// isDisabled && styles.disabled,
		// loading && styles.loading,
		// size && size !== DEFAULT_SIZE && styles[variationName('size', size)],
		// textAlign && styles[variationName('textAlign', textAlign)],
		// tone && styles[variationName('tone', tone)],
		// variant && styles[variationName('variant', variant)],
	);

	const childMarkup = children ? (
		<span
			className={clsx(
				// styles.Text,
			)}
			// Fixes Safari bug that doesn't re-render button text to correct color
			key={disabled ? 'text-disabled' : 'text'}
		>
			{children}
		</span>
	) : null;

	const commonProps: CommonButtonProps = {
		id,
		role,
	}

	const linkProps: LinkButtonProps = {
		url,
		external,
		download,
		target,
	}

	const actionProps: ActionButtonProps = {
		submit,
		disabled: isDisabled,
		loading,
	}

	const buttonMarkup = (
		<UnstyledButton {...commonProps} {...linkProps} {...actionProps}>
			<span className={'styles.Content'}>
				{childMarkup}
			</span>
		</UnstyledButton>
	);

	return buttonMarkup;
}