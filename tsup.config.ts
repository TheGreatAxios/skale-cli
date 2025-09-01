import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	outDir: 'dist',
	format: ['esm'],
	target: 'node16',
	clean: true,
	dts: false,
	splitting: false,
	shims: false,
	banner: {
		js: '#!/usr/bin/env node',
	},
});

