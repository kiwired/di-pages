import type { Metadata } from 'next'
import { EpkPage } from './epk-page'

export const metadata: Metadata = {
	title: 'Плохие люди',
	description: 'Блог для тех, кто хочет перестать заслуживать любовь и поверить, что с ними всё так',
}

export default function HomePage() {
	return (
		<EpkPage />
	)
}
