import localFont from "next/font/local";

export const berold = localFont({
	src: [
		{
			path: './assets/Berold-regular.otf',
			weight: '400',
			style: 'normal',
		},
	],
})

export const georgia = localFont({
	src: [
		{
			path: './assets/Georgia-regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './assets/Georgia-regular-italic.ttf',
			weight: '400',
			style: 'italic',
		},
		{
			path: './assets/Georgia-bold.ttf',
			weight: '600',
			style: 'normal',
		},
	],
})
