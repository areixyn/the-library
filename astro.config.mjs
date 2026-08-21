// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	site: 'https://areixyn.github.io',
	base: '/the-library',
	integrations: [
		starlight({
			plugins: [
				starlightCatppuccin({
					dark: {flavor: "macchiato", accent: "lavender"},
					light: {flavor: "latte", accent: "lavender"},
				}),
				starlightSidebarTopics(
					[
          				{
            				label: {
								en: 'Summermist Academy',
								'zh-TW': '夏嵐學院',
							},
            				link: '/sma/sma',
            				items: [
								'sma/sma',
								{
									label: 'Characters',
									translations: {
										'zh-TW': '角色',
									},
									items: [{ autogenerate: { directory: '/sma/Characters' } }],
								},
								{
									label: 'Worldbuilding',
									translations: {
										'zh-TW': '世界觀',
									},
									items: [{ autogenerate: { directory: '/sma/Worldbuilding' } }],
								},
							],
          				},
          				{
            				label: 'Project RE',
            				link: '/re/project-re',
            				items: [
								're/project-re',
								{
									label: 'Characters',
									translations: {
										'zh-TW': '角色',
									},
									items: [{ autogenerate: { directory: '/re/Characters' } }],
								},
								{
									label: 'Worldbuilding',
									translations: {
										'zh-TW': '世界觀',
									},
									items: [{ autogenerate: { directory: '/re/Worldbuilding' } }],
								},
							],
          				},
						{
            				label: {
								en: 'Noxeris',
								'zh-TW': '凝夢',
							},
            				link: '/noxeris/noxeris',
							id: 'nox',
            				items: [
								//{ autogenerate: { directory: '/noxeris' } }
								'noxeris/noxeris', 'noxeris/reality', 'noxeris/areixyn', 'noxeris/metsys', 'noxeris/stargazer',
							],
          				},
        			],
					{
            			topics: {
              			// Associate custom pages with the "Guides" topic.
              			nox: ['/noxeris/andrepelandrebel'],
            			},
          			},
				),
				
			],
			title: {
				en: 'Library',
				'zh-TW': '圖書館',
			},
			defaultLocale: 'en',
			locales: {
				en: {
					label: 'English',
				},
				'zh-tw': {
					label: '繁體中文',
					lang: 'zh-TW',
				},
			},
			logo: {
				light: './src/assets/logo-light-2.PNG',
				dark: './src/assets/logo-dark-2.PNG',
			},
			//disable404Route: true,
			customCss: [
				'./src/styles/wikiThumb.css'
			],
			pagination: false,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
			social: [
					{ icon: 'star', label: 'Tumblr', href: 'https://areixyn-en.tumblr.com/'},
					{ icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/areixyn.bsky.social'},
					{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/areixyn'},
					{ icon: 'youtube', label: 'Youtube', href: 'https://www.youtube.com/@areixyn'},
					{ icon: 'github', label: 'GitHub', href: 'https://github.com/areixyn' },
			],
			
		}),
	],
});
