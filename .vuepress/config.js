module.exports = {
	title: 'Koreanische Grammatik',
	description:
		'Eine (derzeit) lose Zusammenstellung an koreanischer Grammatik mit Beispielsätzen für erfahrene Lerner.',
	serviceWorker: {
		updatePopup: {
			message: 'Es sind neue Inhalte verfügbar!',
			buttonText: 'Neu laden!'
		}
	},
	themeConfig: {
		nav: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Sektionen',
				items: [
					{
						text: 'Sektion 1',
						link: '/sektionen/sek1'
					},
					{
						text: 'Sektion 2',
						link: '/sektionen/sek2'
					},
					{
						text: 'Sektion 3',
						link: '/sektionen/sek3'
					}
				]
			},
			{
				text: 'Lernressroucen',
				link: '/ressourcen.html'
			},
			{
				text: 'Über den Autor',
				link: '/autor.html'
			}
		],

		sidebar: 'auto'
		// {
		// 	'/sektionen/': [''],
		// 	'/sektionen/sek1.html': ['']
		// }
	}
}
