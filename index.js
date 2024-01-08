const config = require('./config');

const { Client } = require('discord.js');
const actionMovies = require('./actionMovies');
const horrorMovies = require('./horrorMovies');
const crimeMovies = require('./crimeMovies');
const dramaMovies = require('./dramaMovies');
const top250Movies = require('./top250Movies');
const helpCommand = require('./help');
const activities = require('./activities');
const crimeSeries = require('./series/crimeSeries');
const comedySeries = require('./series/comedySeries');
const fantasyMovies = require('./fantasyMovies');
const dramaSeries = require('./series/dramaSeries');
const movieQuotes = require('./features/movieQuotes');
const romanceMovies = require('./romanceMovies');
const keepAlive = require("./server");


const mySecret = config.TOKEN;



const actionMoviesCommand = {
  name: 'actionmovies',
  description: 'Displays a randomly selected action movie',
};

const horrorMoviesCommand = {
  name: 'horrormovies',
  description: 'Displays a randomly selected horror movie',
};

const crimeMoviesCommand = {
  name: 'crimemovies',
  description: 'Displays a randomly selected crime movie',
};

const dramaMoviesCommand = {
  name: 'dramamovies',
  description: 'Displays a randomly selected drama movie',
};

const top250Command = {
  name: 'top250',
  description: 'Displays a randomly selected movie from the top 250 list',
};

const crimeSeriesCommand = {
  name: 'crimeseries',
  description: 'Displays a randomly selected crime series',
};

const comedySeriesCommand = {
  name: 'comedyseries',
  description: 'Displays a randomly selected comedy series',
};

const fantasyMoviesCommand = {
  name: 'fantasymovies',
  description: 'Displays a randomly selected fantasy movie',
};

const dramaSeriesCommand = {
  name: 'dramaseries',
  description: 'Displays a randomly selected drama series',
};

const romanceMoviesCommand = {
  name: 'romancemovies',
  description: 'Displays a randomly selected romance movie',
};

const supportCommand = {
  name: 'support',
  description: 'Displays support information',
};


// Movie Quotes Command
const movieQuotesCommand = {
  name: 'moviequotes',
  description: 'Displays a random movie quote',
};

const commands = [
  helpCommand,
  actionMoviesCommand,
  horrorMoviesCommand,
  crimeMoviesCommand,
  dramaMoviesCommand,
  top250Command,
  crimeSeriesCommand,
  comedySeriesCommand,
  fantasyMoviesCommand,
  romanceMoviesCommand,
  dramaSeriesCommand,
  movieQuotesCommand,
  supportCommand,
];

const client = new Client({ intents: [] });

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  setInterval(() => {
    let random = Math.floor(Math.random() * activities.length);
    client.user.setActivity(activities[random]);
  }, 600000);

  await client.application.commands.set(commands);
});

// Function to format movie or series details
function formatDetails(item, isMovie = true, includeDirectorAndGenre = false, includeProtagonist = true, includeEpisodes = false) {
  let details = `Name: ${item.name}`;

  if (isMovie && item.length) {
    details += `\nLength: ${item.length}`;
  }

  details += `\nRelease Date: ${item.releaseDate}\nRating: ${item.rating} ⭐`;

  if (includeDirectorAndGenre && item.director && item.genre) {
    details += `\nDirector: ${item.director}\nGenre: ${item.genre}`;
  } else if (item.genre) {
    details += `\nGenre: ${item.genre}`;
  }

  if (isMovie && includeProtagonist && item.protagonist) {
    details += `\nProtagonist: ${item.protagonist}`;
  }

  if (!isMovie && includeEpisodes && item.episodes) {
    details += `\nEpisodes: ${item.episodes}`;
  }

  details += `\nDescription: ${item.description}`;

  return details;
}

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'actionmovies') {
    const randomIndex = Math.floor(Math.random() * actionMovies.length);
    const randomMovie = actionMovies[randomIndex];

    const movieDetails = formatDetails(randomMovie, true, true);

    interaction.reply(`🎬 Get ready for an action-packed adventure!\n\n${movieDetails}\n\nEnjoy the excitement! 💥`);
  } else if (interaction.commandName === 'horrormovies') {
    const randomIndex = Math.floor(Math.random() * horrorMovies.length);
    const randomMovie = horrorMovies[randomIndex];

    const movieDetails = formatDetails(randomMovie, true, true);

    interaction.reply(`👻 Get ready to be spooked!\n\n${movieDetails}\n\nEnjoy the fright! 🎃`);

  } else if (interaction.commandName === 'crimemovies') {
    const randomIndex = Math.floor(Math.random() * crimeMovies.length);
    const randomMovie = crimeMovies[randomIndex];

    const movieDetails = formatDetails(randomMovie, true, true);

    interaction.reply(`🔍 Get ready for a thrilling crime story!\n\n${movieDetails}\n\nEnjoy the suspense! 🕵️`);

  } else if (interaction.commandName === 'dramamovies') {
    const randomIndex = Math.floor(Math.random() * dramaMovies.length);
    const randomMovie = dramaMovies[randomIndex];

    const movieDetails = formatDetails(randomMovie, true, true);

    interaction.reply(`🎭 Get ready for an emotional drama!\n\n${movieDetails}\n\nEnjoy the story! 🎭`);

  } else if (interaction.commandName === 'top250') {
    const randomIndex = Math.floor(Math.random() * top250Movies.length);
    const randomMovie = top250Movies[randomIndex];

    const movieDetails = formatDetails(randomMovie, true, true, false);

    interaction.reply(`🏆 Get ready for a movie from the top 250 list!\n\n${movieDetails}\n\nEnjoy the cinematic excellence! 🎥🌟`);
  } else if (interaction.commandName === 'crimeseries') {
    const randomIndex = Math.floor(Math.random() * crimeSeries.length);
    const randomSeries = crimeSeries[randomIndex];

    const seriesDetails = formatDetails(randomSeries, false, true, false, true);

    interaction.reply(`🔍 Get ready for an intense crime series!\n\n${seriesDetails}\n\nEnjoy the suspense and mystery! 🕵️‍♀️`);
  } else if (interaction.commandName === 'comedyseries') {
    const randomIndex = Math.floor(Math.random() * comedySeries.length);
    const randomSeries = comedySeries[randomIndex];

    const seriesDetails = formatDetails(randomSeries, false, true, false, true);

    interaction.reply(`😄 Get ready for some laughs!\n\n${seriesDetails}\n\nEnjoy the humor and fun! 🤣`);
  } else if (interaction.commandName === 'fantasymovies') {
    const randomIndex = Math.floor(Math.random() * fantasyMovies.length);
    const randomMovie = fantasyMovies[randomIndex];

    const movieDetails = formatDetails(randomMovie, true, true);

    interaction.reply(`🧙‍♂️ Get ready for a magical adventure!\n\n${movieDetails}\n\nImmerse yourself in a world of fantasy and wonder! ✨`);
  } else if (interaction.commandName === 'dramaseries') {
    const randomIndex = Math.floor(Math.random() * dramaSeries.length);
    const randomSeries = dramaSeries[randomIndex];

    const seriesDetails = formatDetails(randomSeries, false, true, false, true);

    interaction.reply(`🎭 Get ready for captivating dramas!\n\n${seriesDetails}\n\nImmerse yourself in compelling stories! 🎬`);
  } else if (interaction.commandName === 'moviequotes') {
    const randomIndex = Math.floor(Math.random() * movieQuotes.length);
    const randomQuote = movieQuotes[randomIndex];

    interaction.reply(`🎥 Lights, camera, action!\n\n"${randomQuote}"\n\nFeel inspired! 🌟`);
  } else if (interaction.commandName === 'romancemovies') {
    // Handle romancemovies command
    const randomIndex = Math.floor(Math.random() * romanceMovies.length);
    const randomMovie = romanceMovies[randomIndex];

    const movieDetails = formatDetails(randomMovie, true, true);

    interaction.reply(`💕 Get ready for a romantic movie night!\n\n${movieDetails}\n\nExperience the power of love! ❤️`);
  } else if (interaction.commandName === 'help') {
    const commandList = commands.map((command) => `/${command.name} - ${command.description}`).join('\n');
    interaction.reply(`Here is a list of available commands:\n\n${commandList}`);
  } else if (interaction.commandName === 'support') {
    const supportEmail = 'ayman.b.dev@gmail.com';
    const supportMessage = `For support or suggestions, please contact us at:\n\n${supportEmail}\n\nWe are here to assist you with any issues you encounter while adding the bot to your server or to listen to your movie/series ideas.`;

    interaction.reply(supportMessage);
  }

});
keepAlive();
client.login("MTEyMzQxOTk5MzczMjgyMTA0Mg.Gc7yx-.bLbIzW_MEIaBTYzwu7ZwcIr3VPHvw_kvq158d4");
