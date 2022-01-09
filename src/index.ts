// AiOS bootstrapper

import 'module-alias/register';

import * as chalk from 'chalk';
import * as request from 'request-promise-native';
const promiseRetry = require('promise-retry');

import sakanadebot from './ai';
import config from './config';
import _log from './utils/log';
const pkg = require('../package.json');

import CoreModule from './modules/core';
import EmojiModule from './modules/emoji';
import EmojiReactModule from './modules/emoji-react';
import KeywordModule from './modules/keyword';
import FollowModule from './modules/follow';
import NotingModule from './modules/noting';
import PingModule from './modules/ping';
import FortuneModule from './modules/fortune';

console.log('SAKANADE BOT');


function log(msg: string): void {
	_log(`[Boot]: ${msg}`);
}

log(chalk.bold(`Ai v${pkg._v}`));

promiseRetry(retry => {
	log(`Account fetching... ${chalk.gray(config.host)}`);

	// アカウントをフェッチ
	return request.post(`${config.apiUrl}/i`, {
		json: {
			i: config.i
		}
	}).catch(retry);
}, {
	retries: 3
}).then(account => {
	const acct = `@${account.username}`;
	log(chalk.green(`Account fetched successfully: ${chalk.underline(acct)}`));

	log('Starting SAKANADE BOT...');

	// 藍起動
	new sakanadebot(account, [
		new CoreModule(),
		new EmojiModule(),
		new EmojiReactModule(),
		new FollowModule(),
		new NotingModule(),
		new PingModule(),
		new FortuneModule(),
	]);
}).catch(e => {
	log(chalk.red('Failed to fetch the account'));
});
