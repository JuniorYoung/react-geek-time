export default {
	plugins: [
		['umi-plugin-react', {
			dva: true,
			antd: true,
		}],
	],
	// routes: [],
	// disableRedirectHoist: true,
	// history: 'hash',
	// outputPath: './dist',
	// base: '/',
	// publicPath: '/public',
	// runtimePublicPath: true,
	// cssPublicPath: '/',
	// mountElementId: 'root',
	// minimizer: 'uglifyjs',
	// hash: true,
	targets: {
		ie: 11,
	}, // default: { chrome: 49, firefox: 45, safari: 10, edge: 13, ios: 10 }
	// context: {},
	// exportStatic: false,
	// singular: true,
	// mock: {
	// 	exclude: []
	// },
	// block: {
	// 	defaultGitUrl: "https://github.com/umijs/umi-blocks",
	// },
	// ssr: false,
	// cssModulesExcludes: [],
	proxy: {
		'/api': {
			target: 'http://jsonplaceholder.typicode.com/',
			changeOrigin: true,
			pathRewrite: { "^/api" : "" }
		}
	}
};
