import { configure } from "@storybook/react"
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

const theme1 = {
	name: 'Theme 1',
	button: {
		color: '#00ff00',
	},
	progressBar: {
		progressSkin: {
			height: '.5rem',
			width: '100%',
			backgroundColor: '#C0C0C0'
		},
		progressCovered: {
			height: '100%',
			backgroundColor: '#E95F74'
		},
		indicator: {
			display: 'block',
			position: 'absolute',
			zIndex: '1',
			marginTop: '-5px',
			marginLeft: '-10px',
			width: '10px',
			height: '10px',
			border: '4px solid #D3D5DF',
			borderTopColor: '#D3D5DF',
			borderRightColor: '#D3D5DF',
			transform: 'rotate(45deg)',
			borderRadius: '100%',
			backgroundColor: '#fff',
			boxShadow: '0 1px 6px rgba(0, 0, 0, .2)',
			cursor:'pointer'
		}
	}
};

const theme2 = {
	name: 'Theme 2',
	button: {
		color: '#ff0000'
	},
	progressBar: {
		progressSkin: {
			height: '.5rem',
			width: '100%',
			backgroundColor: '#e9ecef'
		},
		progressCovered: {
			height: '100%',
			backgroundColor: '#ffc107'
		},
		indicator: {
			display: 'block',
			position: 'absolute',
			zIndex: '1',
			marginTop: '-5px',
			marginLeft: '-10px',
			width: '10px',
			height: '10px',
			border: '4px solid #D3D5DF',
			borderTopColor: '#D3D5DF',
			borderRightColor: '#D3D5DF',
			transform: 'rotate(45deg)',
			borderRadius: '100%',
			backgroundColor: '#fff',
			boxShadow: '0 1px 6px rgba(0, 0, 0, .2)',
			cursor:'pointer'
		}
	}
};

const themes = [theme1, theme2];
addDecorator(withThemesProvider(themes));

const req = require.context("../src/component", true, /.stories.tsx$/)
function loadStories() {
	req.keys().forEach(req)
}

configure(loadStories, module);