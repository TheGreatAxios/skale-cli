import { Command } from 'commander';
import chalk from 'chalk';
import { isAddressWhitelisted } from './configController/isAddressWhitelisted';

const program = new Command();

program
	.name('skale')
	.description('A simple CLI to greet someone')
	.version('1.0.0');

isAddressWhitelisted(program);

// program
// 	.command('hello <name>')
// 	.description('Greet a person by name')
// 	.option('-u, --uppercase', 'Uppercase the greeting')
// 	.action((name: string, options: { uppercase?: boolean }) => {
// 		let message = `Hello, ${name}!`;
// 		if (options.uppercase) {
// 			message = message.toUpperCase();
// 		}
// 		console.log(chalk.green(message));
// 	});

program.parse();

