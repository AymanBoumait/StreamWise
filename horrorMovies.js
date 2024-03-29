const horrorMovies = [
    {
      name: 'The Exorcist',
      length: '2h 2m',
      protagonist: 'Ellen Burstyn',
      releaseDate: '1973',
      rating: 8,
      description: 'A mother seeks the help of two priests to save her daughter from demonic possession.',
    },
    {
      name: 'Psycho',
      length: '1h 49m',
      protagonist: 'Anthony Perkins',
      releaseDate: '1960',
      rating: 8,
      description: 'A woman on the run checks into the Bates Motel, run by a young man under the domination of his mother.',
    },
    {
      name: 'The Shining',
      length: '2h 26m',
      protagonist: 'Jack Nicholson',
      releaseDate: '1980',
      rating: 8,
      description: 'A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
    },
    {
      name: 'Halloween',
      length: '1h 31m',
      protagonist: 'Jamie Lee Curtis',
      releaseDate: '1978',
      rating: 7,
      description: 'On Halloween night, a masked serial killer terrorizes a small town.',
    },
    {
      name: 'The Texas Chainsaw Massacre',
      length: '1h 24m',
      protagonist: 'Marilyn Burns',
      releaseDate: '1974',
      rating: 7,
      description: 'A group of friends fall victim to a family of cannibals while on their way to visit an old homestead.',
    },
    {
      name: 'A Nightmare on Elm Street',
      length: '1h 31m',
      protagonist: 'Heather Langenkamp',
      releaseDate: '1984',
      rating: 7,
      description: 'Several teenagers fall prey to Freddy Krueger, a disfigured serial killer who hunts his victims in their dreams.',
    },
    {
      name: 'The Ring',
      length: '1h 55m',
      protagonist: 'Naomi Watts',
      releaseDate: '2002',
      rating: 7,
      description: 'A journalist investigates a mysterious videotape that causes anyone who watches it to die seven days later.',
    },
    {
      name: 'Get Out',
      length: '1h 44m',
      protagonist: 'Daniel Kaluuya',
      releaseDate: '2017',
      rating: 8,
      description: 'A young African-American man visits his white girlfriend\'s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
    },
    {
      name: 'It',
      length: '2h 15m',
      protagonist: 'Bill Skarsgård',
      releaseDate: '2017',
      rating: 7,
      description: 'In the town of Derry, the local kids are disappearing one by one. A group of young kids is forced to face their biggest fears when they square off against an evil clown named Pennywise.',
    },
    {
      name: 'The Conjuring',
      length: '1h 52m',
      protagonist: 'Vera Farmiga',
      releaseDate: '2013',
      rating: 7,
      description: 'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
    },
    {
      name: 'Scream',
      length: '1h 51m',
      protagonist: 'Neve Campbell',
      releaseDate: '1996',
      rating: 7,
      description: 'A year after the murder of her mother, a teenage girl is terrorized by a new killer who targets the girl and her friends by using horror films as part of a deadly game.',
    },
    {
      name: 'The Babadook',
      length: '1h 34m',
      protagonist: 'Essie Davis',
      releaseDate: '2014',
      rating: 7,
      description: 'A single mother, plagued by the violent death of her husband, battles with her son\'s fear of a monster lurking in the house, but soon discovers a sinister presence all around her.',
    },
    {
      name: 'Hereditary',
      length: '2h 7m',
      protagonist: 'Toni Collette',
      releaseDate: '2018',
      rating: 8,
      description: 'A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.',
    },
    {
      name: 'The Witch',
      length: '1h 33m',
      protagonist: 'Anya Taylor-Joy',
      releaseDate: '2015',
      rating: 7,
      description: 'A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.',
    },
    {
      name: 'Insidious',
      length: '1h 43m',
      protagonist: 'Patrick Wilson',
      releaseDate: '2010',
      rating: 7,
      description: 'A family looks to prevent evil spirits from trapping their comatose child in a realm called the Further.',
    },
    {
      name: 'Sinister',
      length: '1h 50m',
      protagonist: 'Ethan Hawke',
      releaseDate: '2012',
      rating: 7,
      description: 'A true-crime writer discovers a box of home videos depicting horrifying murders that suggest the work of a serial killer whose legacy stretches back decades.',
    },
    {
      name: 'The Blair Witch Project',
      length: '1h 21m',
      protagonist: 'Heather Donahue',
      releaseDate: '1999',
      rating: 7,
      description: 'Three film students vanish after traveling into a Maryland forest to film a documentary on the local Blair Witch legend, leaving only their footage behind.',
    },
    {
      name: 'It Follows',
      length: '1h 40m',
      protagonist: 'Maika Monroe',
      releaseDate: '2014',
      rating: 7,
      description: 'A young woman is followed by an unknown supernatural force after a sexual encounter.',
    },
    {
      name: 'A Quiet Place',
      length: '1h 30m',
      protagonist: 'Emily Blunt',
      releaseDate: '2018',
      rating: 8,
      description: 'In a post-apocalyptic world, a family is forced to live in silence while hiding from creatures with ultra-sensitive hearing.',
    },
    {
      name: 'The Conjuring 2',
      length: '2h 14m',
      protagonist: 'Vera Farmiga',
      releaseDate: '2016',
      rating: 7,
      description: 'Ed and Lorraine Warren travel to London to investigate a single mother and her four children who are haunted by a malicious spirit.',
    },
    {
      name: 'Don\'t Breathe',
      length: '1h 28m',
      protagonist: 'Jane Levy',
      releaseDate: '2016',
      rating: 7,
      description: 'Hoping to walk away with a massive fortune, a group of thieves break into the house of a blind man who isn\'t as helpless as he seems.',
    },
    {
      name: 'The Conjuring: The Devil Made Me Do It',
      length: '1h 52m',
      protagonist: 'Vera Farmiga',
      releaseDate: '2021',
      rating: 7,
      description: 'Paranormal investigators Ed and Lorraine Warren try to uncover the truth behind a murderer\'s claim of demonic possession.',
    },
    {
      name: 'Us',
      length: '1h 56m',
      protagonist: 'Lupita Nyong\'o',
      releaseDate: '2019',
      rating: 7,
      description: 'A family\'s serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.',
    },
    {
      name: 'Midsommar',
      length: '2h 28m',
      protagonist: 'Florence Pugh',
      releaseDate: '2019',
      rating: 7,
      description: 'A couple travels to Sweden to visit a rural hometown\'s fabled mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.',
    },
    {
      name: 'Paranormal Activity',
      length: '1h 26m',
      protagonist: 'Katie Featherston',
      releaseDate: '2007',
      rating: 7,
      description: 'After moving into a suburban home, a couple becomes increasingly disturbed by a nightly demonic presence.',
    },
    // add more horror movies here
  ];
  
  module.exports = horrorMovies;
  