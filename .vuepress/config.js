module.exports = {
	title: 'Koreanische Grammatik',
	description:
		'Eine (derzeit) lose Zusammenstellung an koreanischer Grammatik mit Beispielsätzen.',
	serviceWorker: true,
	themeConfig: {
		nav: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Kategorien',
				items: [
					{
						text: 'Kategorie 1',
						link: '/kategorien/kat1'
					},
					{
						text: 'Kategorie 2',
						link: '/kategorien/kat2'
					},
					{
						text: 'Kategorie 3',
						link: '/kategorien/kat3'
					}
				]
			},
			{
				text: 'Über den Autor',
				link: '/autor.html'
			}
		],
		/* 'auto' */

		sidebar: 'auto'
		// {
		// 	'/kategorien/': ['', 'kat1', 'präteritum']
		// }
	}
}
