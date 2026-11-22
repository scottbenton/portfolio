export interface IronLinkScheme {
	key: string;
	label: string;
	/** Gradient stops (top-left to bottom-right), matching Iron Link's own logo/favicon gradient for this scheme. */
	iconColors: string[];
}

export const ironLinkSchemes: IronLinkScheme[] = [
	{
		key: 'default',
		label: 'Sunrise',
		iconColors: ['oklch(71.92% 0.169 13.43)', 'oklch(68.22% 0.1465 71.47)']
	},
	{
		key: 'cinder',
		label: 'Cinder',
		iconColors: ['oklch(71.06% 0.1661 22.22)', 'oklch(44.37% 0.1613 26.9)']
	},
	{
		key: 'eidolon',
		label: 'Eidolon',
		iconColors: ['oklch(90.52% 0.1657 98.11)', 'oklch(47.62% 0.1034 61.91)']
	},
	{
		key: 'hinterlands',
		label: 'Hinterlands',
		iconColors: ['oklch(84.52% 0.1299 164.98)', 'oklch(43.18% 0.0865 166.91)']
	},
	{
		key: 'myriad',
		label: 'Myriad',
		iconColors: ['oklch(86.51% 0.1153 207.08)', 'oklch(48.82% 0.2172 264.38)']
	},
	{
		key: 'mystic',
		label: 'Mystic',
		iconColors: ['oklch(70.9% 0.1592 293.54)', 'oklch(43.83% 0.1983 303.72)']
	},
	{
		key: 'orchid',
		label: 'Orchid',
		iconColors: ['oklch(74.77% 0.207 322.16)', 'oklch(52.46% 0.199 3.96)']
	},
	{
		key: 'gloaming',
		label: 'Gloaming',
		iconColors: [
			'oklch(65.59% 0.2118 354.31)',
			'oklch(55.75% 0.2525 302.32)',
			'oklch(62.31% 0.188 259.81)'
		]
	},
	{
		key: 'pride_traditional',
		label: 'Pride',
		iconColors: [
			'oklch(63.7% 0.237 25.331)',
			'oklch(70.5% 0.213 47.604)',
			'oklch(79.5% 0.184 86.047)',
			'oklch(69.6% 0.17 162.48)',
			'oklch(62.3% 0.214 259.815)',
			'oklch(60.6% 0.25 292.717)'
		]
	}
];
