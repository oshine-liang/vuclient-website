import mdItCustomAttrs from "markdown-it-custom-attrs";
import {defineConfig} from "vitepress";
import {set_sidebar} from "../guide/set_sidebar.mjs";

export default defineConfig({
	base: "/vitepress-template",//部署到GitHub Pages时的仓库名
	title: "VC网络连接器",
	lang: "zh-CN",
	description: "VC网络连接器产品简介",
	head: [
		["meta", {name: "author", content: "大喵不是猫"}],
		["meta", {name: "keywords", content: "VC网络连接器"}],
		["link", {rel: "icon", href: "/favicon.ico"}],
		["link", {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"}],
		["script", {src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"}],
	],
	markdown: {config: (md) => md.use(mdItCustomAttrs, "image", {"data-fancybox": "gallery"})},
	lastUpdated: true,
	themeConfig: {
		logo: "/icon.png",
		//搜索
		search: {
			provider: "local"
		},
		outline: {
			level: [2, 4], // 显示2-4级标题
			// level: 'deep', // 显示2-6级标题
			label: '当前页大纲' // 文字显示
		},
		// algolia: {
		//     appId: "xxx",
		//     apiKey: "xxx",
		//     indexName: "111",
		// },
		socialLinks: [{icon: "github", link: "https://github.com/oshine-liang/vuclient-website"}],
		footer: {
			message: "MIT License.",
			copyright: "Copyright © 2024 喵星人专属备案号🐱😺😸😹😻😼😽🙀😿😾",
		},
		nav: [
			{text: "使用指引", link: "/guide/introduce/introduce/introduce", activeMatch: "/guide/introduce/"},
			{text: "常见问题", link: "/guide/docs/doc", activeMatch: "/guide/docs/"},
			{
				text: "相关链接",
				items: [
					{
						text: "Github 仓库",
						link: "https://github.com/oshine-liang/vuclient-website"
					},
				]
			},
			{text: "🍵 加入群组", link: "/sponsor/index"},
		],

		sidebar: {
			"/guide/introduce/": set_sidebar('/guide/introduce',false),
			"/guide/docs/": set_sidebar('/guide/docs'),
		},
	},
	vite: {
		plugins: [],
	},
});
