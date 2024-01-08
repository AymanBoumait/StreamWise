const crimeSeries = [
    {
      name: 'Breaking Bad',
      episodes: 62,
      releaseDate: '2008-2013',
      rating: 9.5,
      director: 'Vince Gilligan',
      genre: 'Crime, Drama, Thriller',
      description: 'A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family\'s financial future as he battles terminal lung cancer.'
    },
    {
      name: 'The Wire',
      episodes: 60,
      releaseDate: '2002-2008',
      rating: 9.3,
      director: 'David Simon',
      genre: 'Crime, Drama, Thriller',
      description: 'Told from the perspectives of both the police and their targets, the series captures a universe of subterfuge and surveillance, where easy distinctions between good and evil, and crime and punishment, are challenged at every turn.'
    },
    {
      name: 'Mindhunter',
      episodes: 19,
      releaseDate: '2017-2019',
      rating: 8.6,
      director: 'David Fincher',
      genre: 'Crime, Drama, Thriller',
      description: 'In the late 1970s, two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.'
    },
    {
      name: 'Peaky Blinders',
      episodes: 30,
      releaseDate: '2013-2022',
      rating: 8.8,
      director: 'Steven Knight',
      genre: 'Crime, Drama',
      description: 'A gangster family epic set in Birmingham, England, in 1919, several months after the end of the First World War.'
    },
    {
      name: 'True Detective',
      episodes: 24,
      releaseDate: '2014-present',
      rating: 9.0,
      director: 'Nic Pizzolatto',
      genre: 'Crime, Drama, Mystery',
      description: 'An anthology crime drama series that follows different detectives and their dark, twisted, and often supernatural investigations.'
    },
    {
      name: 'Narcos',
      episodes: 30,
      releaseDate: '2015-2017',
      rating: 8.8,
      director: 'Chris Brancato',
      genre: 'Biography, Crime, Drama',
      description: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar and the Medellín Cartel.'
    },
    {
      name: 'Ozark',
      episodes: 34,
      releaseDate: '2017-present',
      rating: 8.4,
      director: 'Bill Dubuque',
      genre: 'Crime, Drama, Thriller',
      description: 'A financial planner relocates his family to a dangerous area in the Ozarks after a money-laundering scheme goes wrong, and he must pay off a debt to a Mexican drug lord.'
    },
    {
      name: 'The Sopranos',
      episodes: 86,
      releaseDate: '1999-2007',
      rating: 9.2,
      director: 'David Chase',
      genre: 'Crime, Drama',
      description: 'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life, which affects his mental state and ends up seeking professional psychiatric counseling.'
    },
    {
      name: 'Better Call Saul',
      episodes: 63,
      releaseDate: '2015-2022',
      rating: 8.7,
      director: 'Vince Gilligan',
      genre: 'Crime, Drama',
      description: 'The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.'
    },
    {
      name: 'The Americans',
      episodes: 75,
      releaseDate: '2013-2018',
      rating: 8.4,
      director: 'Joseph Weisberg',
      genre: 'Crime, Drama, Mystery',
      description: 'Two Soviet intelligence agents pose as a married couple to spy on the American government during the Cold War.'
    },
    {
      name: 'The Night Of',
      episodes: 8,
      releaseDate: '2016',
      rating: 8.5,
      director: 'Steven Zaillian',
      genre: 'Crime, Drama, Mystery',
      description: 'After a night of partying with a female stranger, a man wakes up to find her stabbed to death and is charged with her murder.'
    },
    {
      name: 'Fargo',
      episodes: 40,
      releaseDate: '2014-present',
      rating: 8.9,
      director: 'Noah Hawley',
      genre: 'Crime, Drama, Thriller',
      description: 'Various chronicles of deception, intrigue, and murder in and around frozen Minnesota.'
    },
    {
      name: 'The Fall',
      episodes: 17,
      releaseDate: '2013-2016',
      rating: 8.2,
      director: 'Allan Cubitt',
      genre: 'Crime, Drama, Thriller',
      description: 'A psychological thriller that examines the lives of two hunters: one is a serial killer who stalks his victims in and around Belfast, Northern Ireland, and the other is a talented Detective Superintendent brought in to catch him.'
    },
    {
      name: 'Sherlock',
      episodes: 15,
      releaseDate: '2010-2017',
      rating: 9.1,
      director: 'Mark Gatiss, Steven Moffat',
      genre: 'Crime, Drama, Mystery',
      description: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st-century London.'
    },
    {
      name: 'Line of Duty',
      episodes: 41,
      releaseDate: '2012-present',
      rating: 8.7,
      director: 'Jed Mercurio',
      genre: 'Crime, Drama, Mystery',
      description: 'DS Steve Arnott is transferred to the anti-corruption unit after he refuses to participate in a cover-up involving an innocent man\'s death. Alongside DC Kate Fleming, they are assigned to investigate AC-12, a controversial police anticorruption unit.'
    },
    {
      name: 'Broadchurch',
      episodes: 24,
      releaseDate: '2013-2017',
      rating: 8.4,
      director: 'Chris Chibnall',
      genre: 'Crime, Drama, Mystery',
      description: 'The murder of a young boy in a small coastal town brings a media frenzy, which threatens to tear the community apart.'
    },
    {
      name: 'Killing Eve',
      episodes: 41,
      releaseDate: '2018-present',
      rating: 8.3,
      director: 'Phoebe Waller-Bridge',
      genre: 'Action, Adventure, Drama',
      description: 'After a series of events, the lives of a security operative and an assassin become inextricably linked.'
    },
    {
      name: 'The Killing',
      episodes: 44,
      releaseDate: '2011-2014',
      rating: 8.2,
      director: 'Veena Sud',
      genre: 'Crime, Drama, Mystery',
      description: 'A police investigation, the saga of a grieving family, and a Seattle mayoral campaign all interlock after the body of a 17-year-old girl is found in a trunk at the bottom of a lake.'
    },
    {
      name: 'The Blacklist',
      episodes: 171,
      releaseDate: '2013-present',
      rating: 8.0,
      director: 'Jon Bokenkamp',
      genre: 'Crime, Drama, Mystery',
      description: 'A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.'
    },
    {
      name: 'Bodyguard',
      episodes: 6,
      releaseDate: '2018',
      rating: 8.1,
      director: 'Jed Mercurio',
      genre: 'Crime, Drama, Thriller',
      description: 'A contemporary thriller featuring the Royalty and Specialist Protection Branch of London\'s Metropolitan Police Service.'
    },
    // Add more crime series here...
  ];
  
  module.exports = crimeSeries;
  