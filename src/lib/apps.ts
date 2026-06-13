export interface AppConfig {
	name: string;
	url: string;
	about?: string;
	logoUrl: string;
	tags?: string[];
}

export const apps: AppConfig[] = [
	{
		name: 'Sentinel',
		url: 'https://sentinel.scottbenton.dev',
		logoUrl: '/app-icons/sentinel.svg',
		tags: ['Beta'],
		about: 'A tool to help activists and community members keep up with local government.'
	},
	{
		name: 'Iron Link',
		url: 'https://iron-link.com',
		about:
			'The follow up to Iron Fellowship and Crew Link, Iron Link allows people to play the table top roll playing games Ironsworn and Starforged online with friends.',
		logoUrl: '/app-icons/iron-link.svg',
		tags: ['Beta']
	},
	{
		name: 'Iron Fellowship',
		url: 'https://iron-fellowship.scottbenton.dev',
		about: 'An online tool to help people play the Ironsworn tabletop role playing game.',
		logoUrl: '/app-icons/iron-fellowship.svg'
	},
	{
		name: 'Crew Link',
		url: 'https://starforged-crew-link.scottbenton.dev',
		about: 'An online tool to help people play the Starforged tabletop role playing game.',
		logoUrl: '/app-icons/crew-link.svg'
	},
	{
		name: 'Pomodoro',
		url: 'https://pomodoro.scottbenton.dev',
		logoUrl: '/app-icons/pomodoro.png',
		about:
			'A simple productivity timer based on the Pomodoro Technique, with plenty of personalization options.'
	}
];

const featuredNames = ['Iron Link', 'Sentinel', 'Iron Fellowship'];
export const featuredApps: AppConfig[] = featuredNames.map(
	(name) => apps.find((app) => app.name === name)!
);
