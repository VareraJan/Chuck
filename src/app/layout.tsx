import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { metaFavicons } from '@/config/favicons.config'
import { siteName } from '@/config/seo.config'

import './globals.css'
import MainProvider from '@/providers/MainProvider'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: siteName,
	description:
		'Чак Норрис настолько крут, что тестовое при виде Чака написалось само!',
	icons: metaFavicons,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<main className="min-h-screen">
					<MainProvider>{children}</MainProvider>
				</main>
			</body>
		</html>
	)
}
