import express from 'express';
import chalk from 'chalk';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const env = app.get('env').trim();

// Example API Calls
// app.get('/hello', async (req, res) => {
// 	res.json('Hello world');
// });

// app.get('/faction/:id', async (req, res) => {
// 	if(req.params.id === 'adMech') {
// 		res.status(200).json({
// 			name: 'Adeptus Mechanicus',
// 			wins: 4,
// 			numOfPlayers: 3,
// 			gamesPlayed: 3
// 		});
// 	}
// 	else {
// 		res.status(404).json({
// 			message: `Faction #${req.params.id} does not exist`
// 		});
// 	}
// });

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  


// Runs app
app.listen(8080, () => {
	if(env === 'development') {
		console.log(chalk.magenta('-----------------------------------------------------------------------'));
		console.log(chalk.magenta(`Server running at http://localhost:8080. Environment is "${env}."`));
		console.log(chalk.magenta('-----------------------------------------------------------------------'));
	}
});