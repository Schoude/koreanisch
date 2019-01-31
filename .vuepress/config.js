module.exports = {
	title: 'Koreanische Grammatikstrukturen',
	description:
		'Eine (derzeit) lose Zusammenstellung an koreanischer Grammatik mit Beispielsätzen.',
	themeConfig: {
		serviceWorker: {
			updatePopup: {
				message: 'Es sind neue Inhalte verfügbar!',
				buttonText: 'Neu laden!'
			}
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
}
