'use client';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

// Функция, которая наблюдает за элементом с помощью IntersectionObserver
const useIntersectionObserver = (setIsVisible: React.Dispatch<React.SetStateAction<boolean>>) => {
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Если элемент пересекает видимую часть окна, обновляем состояние
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // Отсоединяем, чтобы наблюдение происходило только один раз
				}
			},
			{
				threshold: 0.1, // Срабатывает, когда хотя бы 10% элемента видимо
			}
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.disconnect(); // Отсоединяем при размонтировании компонента
			}
		};
	}, [setIsVisible]);

	return ref;
};

type ScrollRevealProps = {
	children: React.ReactNode;
	delay?: 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
};

export const ScrollReveal = ({ children, delay }: ScrollRevealProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useIntersectionObserver(setIsVisible);

	const className = clsx(
		'transition-opacity duration-1000',
		{
			'opacity-0': !isVisible,
			'delay-75': delay === 75,
			'delay-100': delay === 100,
			'delay-150': delay === 150,
			'delay-200': delay === 200,
			'delay-300': delay === 300,
			'delay-500': delay === 500,
			'delay-700': delay === 700,
			'delay-1000': delay === 1000,
		}
	)

	return (
		<div
			ref={ref}
			className={className}
		>
			{children}
		</div>
	);
};
