module.exports = {
	title: 'Koreanische Grammatik',
	description:
		'Eine (derzeit) lose Zusammenstellung an koreanischer Grammatik mit Beispielsätzen.',
	themeConfig: {
		serviceWorker: true
	},
	nav: [
		{
			text: 'Home',
			link: '/'
		},
		{
			text: 'Kategorien',
			link: '/kategorien/',
			items: [
				{
					text: 'Abfolgende Handlungen',
					link: '/abfolgende-handlungen'
				},
				{
					text: 'Tempi',
					items: [
						{ text: 'Präsens', link: '/tempi/präsens' },
						{ text: 'Präteritum', link: '/tempi/präteritum' }
					]
				}
			]
		},
		{
			text: 'Über den Autor',
			link: '/autor.html'
		}
	],
	/* 'auto' */

	sidebar: {
		'/kategorien/': ['', 'präsens', 'präteritum']
	}
}
