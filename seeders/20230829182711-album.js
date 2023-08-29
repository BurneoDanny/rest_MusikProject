'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('album', [{"idAlbum":1,"titulo":"Fearless","anio":"2008-11-11","descripcion":"Álbum de estudio de Taylor Swift, conocido por éxitos como \"Love Story\".","Artista_idArtista":1},{"idAlbum":2,"titulo":"1989","anio":"2014-10-27","descripcion":"Álbum pop de Taylor Swift, incluye canciones como \"Shake It Off\".","Artista_idArtista":1},{"idAlbum":3,"titulo":"Reputation","anio":"2017-11-10","descripcion":"Álbum que incluye sencillos como \"Look What You Made Me Do\".","Artista_idArtista":1},{"idAlbum":4,"titulo":"+","anio":"2011-09-09","descripcion":"Álbum debut de Ed Sheeran con canciones como \"The A Team\".","Artista_idArtista":2},{"idAlbum":5,"titulo":"x","anio":"2014-06-23","descripcion":"Álbum exitoso con sencillos como \"Sing\" y \"Thinking Out Loud\".","Artista_idArtista":2},{"idAlbum":6,"titulo":"÷","anio":"2017-03-03","descripcion":"Álbum que incluye éxitos como \"Shape of You\" y \"Castle on the Hill\".","Artista_idArtista":2},{"idAlbum":7,"titulo":"Yours Truly","anio":"2013-08-30","descripcion":"Álbum debut de Ariana Grande con canciones como \"The Way\".","Artista_idArtista":3},{"idAlbum":8,"titulo":"My Everything","anio":"2014-08-25","descripcion":"Álbum que incluye sencillos como \"Problem\" y \"Bang Bang\".","Artista_idArtista":3},{"idAlbum":9,"titulo":"Dangerous Woman","anio":"2016-05-20","descripcion":"Álbum con éxitos como \"Dangerous Woman\" y \"Into You\".","Artista_idArtista":3},{"idAlbum":10,"titulo":"Doo-Wops & Hooligans","anio":"2010-10-04","descripcion":"Álbum debut de Bruno Mars con éxitos como \"Just the Way You Are\".","Artista_idArtista":4},{"idAlbum":11,"titulo":"Unorthodox Jukebox","anio":"2012-12-07","descripcion":"Álbum que incluye sencillos como \"Locked Out of Heaven\" y \"Treasure\".","Artista_idArtista":4},{"idAlbum":12,"titulo":"24K Magic","anio":"2016-11-18","descripcion":"Álbum con éxitos como \"24K Magic\" y \"That's What I Like\".","Artista_idArtista":4},{"idAlbum":13,"titulo":"When We All Fall Asleep, Where Do We Go?","anio":"2019-03-29","descripcion":"Álbum debut de Billie Eilish con canciones como \"Bad Guy\".","Artista_idArtista":5},{"idAlbum":14,"titulo":"Happier Than Ever","anio":"2021-07-30","descripcion":"Álbum que incluye sencillos como \"Therefore I Am\" y \"Happier Than Ever\".","Artista_idArtista":5},{"idAlbum":15,"titulo":"Justified","anio":"2002-11-04","descripcion":"Álbum debut en solitario de Justin Timberlake con éxitos como \"Cry Me a River\".","Artista_idArtista":6},{"idAlbum":16,"titulo":"FutureSex/LoveSounds","anio":"2006-09-08","descripcion":"Álbum que incluye sencillos como \"SexyBack\" y \"My Love\".","Artista_idArtista":6},{"idAlbum":17,"titulo":"One of the Boys","anio":"2008-06-17","descripcion":"Álbum debut de Katy Perry con canciones como \"I Kissed a Girl\" y \"Hot n Cold\".","Artista_idArtista":7},{"idAlbum":18,"titulo":"Teenage Dream","anio":"2010-08-24","descripcion":"Álbum que incluye sencillos exitosos como \"California Gurls\" y \"Firework\".","Artista_idArtista":7},{"idAlbum":19,"titulo":"Prism","anio":"2013-10-18","descripcion":"Álbum que incluye éxitos como \"Roar\" y \"Dark Horse\".","Artista_idArtista":7},{"idAlbum":20,"titulo":"Good Girl Gone Bad","anio":"2007-06-05","descripcion":"Álbum que marcó la transición de Rihanna a un sonido más pop y bailable, incluyendo sencillos como \"Umbrella\".","Artista_idArtista":8},{"idAlbum":21,"titulo":"Loud","anio":"2010-11-12","descripcion":"Álbum con sencillos exitosos como \"Only Girl (In the World)\" y \"What's My Name?\".","Artista_idArtista":8},{"idAlbum":22,"titulo":"Anti","anio":"2016-01-28","descripcion":"Álbum que muestra la evolución artística de Rihanna e incluye canciones como \"Work\" y \"Needed Me\".","Artista_idArtista":8},{"idAlbum":23,"titulo":"19","anio":"2008-01-28","descripcion":"Álbum debut de Adele con éxitos como \"Chasing Pavements\" y \"Hometown Glory\".","Artista_idArtista":9},{"idAlbum":24,"titulo":"21","anio":"2011-01-19","descripcion":"Álbum que catapultó la carrera de Adele con canciones como \"Rolling in the Deep\" y \"Someone Like You\".","Artista_idArtista":9},{"idAlbum":25,"titulo":"25","anio":"2015-11-20","descripcion":"Álbum que continúa el éxito de Adele con sencillos como \"Hello\" y \"When We Were Young\".","Artista_idArtista":9},{"idAlbum":26,"titulo":"Songs About Jane","anio":"2002-06-25","descripcion":"Álbum debut de Maroon 5 con canciones como \"This Love\" y \"She Will Be Loved\".","Artista_idArtista":10},{"idAlbum":27,"titulo":"It Won't Be Soon Before Long","anio":"2007-05-16","descripcion":"Álbum que incluye sencillos como \"Makes Me Wonder\" y \"Wake Up Call\".","Artista_idArtista":10},{"idAlbum":28,"titulo":"V","anio":"2014-08-29","descripcion":"Álbum que incluye éxitos como \"Maps\" y \"Sugar\".","Artista_idArtista":10},{"idAlbum":29,"titulo":"Abbey Road","anio":"1969-09-26","descripcion":"Uno de los álbumes más icónicos de The Beatles, conocido por canciones como \"Come Together\" y \"Here Comes the Sun\".","Artista_idArtista":11},{"idAlbum":30,"titulo":"Sgt. Pepper's Lonely Hearts Club Band","anio":"1967-06-01","descripcion":"Otro álbum emblemático de The Beatles, aclamado por su innovación y canciones como \"Lucy in the Sky with Diamonds\".","Artista_idArtista":11},{"idAlbum":31,"titulo":"A Night at the Opera","anio":"1975-11-21","descripcion":"Álbum que contiene la famosa canción \"Bohemian Rhapsody\" y otras composiciones icónicas de Queen.","Artista_idArtista":12},{"idAlbum":32,"titulo":"The Game","anio":"1980-06-27","descripcion":"Álbum con éxitos como \"Another One Bites the Dust\" y \"Crazy Little Thing Called Love\".","Artista_idArtista":12},{"idAlbum":33,"titulo":"Led Zeppelin IV","anio":"1971-11-08","descripcion":"Conocido como \"Untitled\" o \"Four Symbols\", este álbum incluye la icónica \"Stairway to Heaven\".","Artista_idArtista":13},{"idAlbum":34,"titulo":"Physical Graffiti","anio":"1975-02-24","descripcion":"Álbum doble que contiene canciones como \"Kashmir\" y \"Trampled Under Foot\".","Artista_idArtista":13},{"idAlbum":35,"titulo":"Sticky Fingers","anio":"1971-04-23","descripcion":"Álbum con sencillos como \"Brown Sugar\" y \"Wild Horses\".","Artista_idArtista":14},{"idAlbum":36,"titulo":"Let It Bleed","anio":"1969-12-05","descripcion":"Álbum que incluye \"Gimme Shelter\" y \"You Can't Always Get What You Want\".","Artista_idArtista":14},{"idAlbum":37,"titulo":"A Rush of Blood to the Head","anio":"2002-08-26","descripcion":"Álbum que incluye canciones como \"Clocks\" y \"The Scientist\".","Artista_idArtista":15},{"idAlbum":38,"titulo":"Parachutes","anio":"2000-07-10","descripcion":"Álbum debut de Coldplay, con éxitos como \"Yellow\" y \"Trouble\".","Artista_idArtista":15},{"idAlbum":39,"titulo":"The Joshua Tree","anio":"1987-03-09","descripcion":"Álbum icónico de U2, con canciones como \"With or Without You\" y \"Where the Streets Have No Name\".","Artista_idArtista":16},{"idAlbum":40,"titulo":"Achtung Baby","anio":"1991-11-19","descripcion":"Álbum que marcó un cambio en el sonido de U2, incluye sencillos como \"One\" y \"Mysterious Ways\".","Artista_idArtista":16},{"idAlbum":41,"titulo":"Nevermind","anio":"1991-09-24","descripcion":"Álbum emblemático de Nirvana, conocido por \"Smells Like Teen Spirit\" y su influencia en el grunge.","Artista_idArtista":17},{"idAlbum":42,"titulo":"In Utero","anio":"1993-09-13","descripcion":"Álbum que refleja un sonido más crudo de Nirvana, incluye canciones como \"Heart-Shaped Box\".","Artista_idArtista":17},{"idAlbum":43,"titulo":"The Dark Side of the Moon","anio":"1973-03-01","descripcion":"Uno de los álbumes más influyentes de Pink Floyd, conocido por su concepto y canciones como \"Money\" y \"Time\".","Artista_idArtista":18},{"idAlbum":44,"titulo":"The Wall","anio":"1979-11-30","descripcion":"Álbum doble conceptual de Pink Floyd, que incluye éxitos como \"Another Brick in the Wall\" y \"Comfortably Numb\".","Artista_idArtista":18},{"idAlbum":45,"titulo":"OK Computer","anio":"1997-05-21","descripcion":"Álbum icónico de Radiohead, conocido por su innovación y canciones como \"Paranoid Android\" y \"Karma Police\".","Artista_idArtista":19},{"idAlbum":46,"titulo":"Kid A","anio":"2000-10-02","descripcion":"Álbum experimental de Radiohead que rompió con las expectativas, incluye canciones como \"Everything in Its Right Place\".","Artista_idArtista":19},{"idAlbum":47,"titulo":"Who's Next","anio":"1971-08-14","descripcion":"Álbum icónico de The Who con éxitos como \"Baba O'Riley\" y \"Behind Blue Eyes\".","Artista_idArtista":20},{"idAlbum":48,"titulo":"Quadrophenia","anio":"1973-10-26","descripcion":"Álbum conceptual de The Who, conocido por su narrativa y canciones como \"Love, Reign o'er Me\".","Artista_idArtista":20},{"idAlbum":49,"titulo":"good kid, m.A.A.d city","anio":"2012-10-22","descripcion":"Álbum conceptual de Kendrick Lamar que relata su vida en Compton, incluye sencillos como \"Swimming Pools (Drank)\".","Artista_idArtista":21},{"idAlbum":50,"titulo":"To Pimp a Butterfly","anio":"2015-03-16","descripcion":"Álbum influyente que aborda temas sociales y raciales, incluye canciones como \"Alright\" y \"King Kunta\".","Artista_idArtista":21},{"idAlbum":51,"titulo":"Take Care","anio":"2011-11-15","descripcion":"Álbum exitoso de Drake con sencillos como \"Headlines\" y \"Take Care\".","Artista_idArtista":22},{"idAlbum":52,"titulo":"Nothing Was the Same","anio":"2013-09-24","descripcion":"Álbum que incluye canciones como \"Started from the Bottom\" y \"Hold On, We're Going Home\".","Artista_idArtista":22},{"idAlbum":53,"titulo":"The Marshall Mathers LP","anio":"2000-05-23","descripcion":"Álbum influyente de Eminem, conocido por \"The Real Slim Shady\" y \"Stan\".","Artista_idArtista":23},{"idAlbum":54,"titulo":"The Eminem Show","anio":"2002-05-26","descripcion":"Álbum exitoso que incluye canciones como \"Without Me\" y \"Lose Yourself\".","Artista_idArtista":23},{"idAlbum":55,"titulo":"The Blueprint","anio":"2001-09-11","descripcion":"Álbum influyente de Jay-Z, conocido por su producción y canciones como \"Takeover\" y \"Izzo (H.O.V.A.)\".","Artista_idArtista":24},{"idAlbum":56,"titulo":"The Black Album","anio":"2003-11-14","descripcion":"Álbum que se anunció como la retirada de Jay-Z, incluye sencillos como \"Dirt Off Your Shoulder\" y \"99 Problems\".","Artista_idArtista":24},{"idAlbum":57,"titulo":"Pink Friday","anio":"2010-11-22","descripcion":"Álbum debut de Nicki Minaj con sencillos como \"Super Bass\" y \"Moment 4 Life\".","Artista_idArtista":25},{"idAlbum":58,"titulo":"The Pinkprint","anio":"2014-12-12","descripcion":"Álbum que incluye canciones como \"Anaconda\" y \"Pills N Potions\".","Artista_idArtista":25},{"idAlbum":59,"titulo":"My Beautiful Dark Twisted Fantasy","anio":"2010-11-22","descripcion":"Álbum innovador de Kanye West, conocido por su producción y canciones como \"Runaway\" y \"Monster\".","Artista_idArtista":26},{"idAlbum":60,"titulo":"The Life of Pablo","anio":"2016-02-14","descripcion":"Álbum que experimenta con el sonido y presenta sencillos como \"Famous\" y \"Ultralight Beam\".","Artista_idArtista":26},{"idAlbum":61,"titulo":"Aquemini","anio":"1998-09-29","descripcion":"Álbum influyente de OutKast que fusiona géneros, incluye canciones como \"Rosa Parks\" y \"Skew It on the Bar-B\".","Artista_idArtista":27},{"idAlbum":62,"titulo":"Speakerboxxx/The Love Below","anio":"2003-09-23","descripcion":"Álbum doble que presenta las producciones individuales de Big Boi y André 3000, incluye éxitos como \"Hey Ya!\" y \"The Way You Move\".","Artista_idArtista":27},{"idAlbum":63,"titulo":"Thriller","anio":"1982-11-30","descripcion":"El álbum más vendido de todos los tiempos, con éxitos como \"Thriller\" y \"Billie Jean\".","Artista_idArtista":140},{"idAlbum":64,"titulo":"Off the Wall","anio":"1979-08-10","descripcion":"Álbum que ayudó a consolidar la carrera en solitario de Michael Jackson con canciones como \"Don't Stop 'Til You Get Enough\".","Artista_idArtista":140},{"idAlbum":65,"titulo":"Bad","anio":"1987-08-31","descripcion":"Álbum exitoso con sencillos como \"The Way You Make Me Feel\" y \"Smooth Criminal\".","Artista_idArtista":140},{"idAlbum":66,"titulo":"Saturday Night Fever","anio":"1977-11-15","descripcion":"Banda sonora icónica de la película con canciones como \"Stayin' Alive\" y \"How Deep Is Your Love\".","Artista_idArtista":134},{"idAlbum":67,"titulo":"Main Course","anio":"1975-06-01","descripcion":"Álbum que marcó un cambio hacia la música disco, con éxitos como \"Jive Talkin'\" y \"Nights on Broadway\".","Artista_idArtista":134},{"idAlbum":68,"titulo":"Spirits Having Flown","anio":"1979-02-05","descripcion":"Álbum que incluye canciones como \"Tragedy\" y \"Too Much Heaven\", destacando la influencia en la música pop.","Artista_idArtista":134},{"idAlbum":69,"titulo":"Twicetagram","anio":"2017-10-30","descripcion":"Álbum debut de TWICE con éxitos como \"Likey\" y \"Heart Shaker\".","Artista_idArtista":155},{"idAlbum":70,"titulo":"Fancy You","anio":"2019-04-22","descripcion":"Álbum que presenta canciones como \"Fancy\" y \"Stuck in My Head\".","Artista_idArtista":155},{"idAlbum":71,"titulo":"Eyes Wide Open","anio":"2020-10-26","descripcion":"Álbum que incluye sencillos como \"I Can't Stop Me\" y \"More & More\".","Artista_idArtista":155},{"idAlbum":72,"titulo":"One Love","anio":"2009-08-21","descripcion":"Álbum que presenta colaboraciones en la música electrónica y sencillos como \"When Love Takes Over\".","Artista_idArtista":121},{"idAlbum":73,"titulo":"Nothing But the Beat","anio":"2011-08-26","descripcion":"Álbum con colaboraciones de artistas pop y dance, incluye canciones como \"Titanium\" y \"Turn Me On\".","Artista_idArtista":121},{"idAlbum":74,"titulo":"Listen","anio":"2014-11-21","descripcion":"Álbum que presenta éxitos como \"Dangerous\" y \"Hey Mama\", explorando diferentes estilos musicales.","Artista_idArtista":121},{"idAlbum":75,"titulo":"Purple Rain","anio":"1984-06-25","descripcion":"Banda sonora icónica y álbum más exitoso de Prince, incluye canciones como \"Purple Rain\" y \"When Doves Cry\".","Artista_idArtista":98},{"idAlbum":76,"titulo":"Sign \"O\" the Times","anio":"1987-03-31","descripcion":"Álbum que presenta la versatilidad musical de Prince y canciones como \"Sign \"O\" the Times\" y \"U Got the Look\".","Artista_idArtista":98},{"idAlbum":77,"titulo":"1999","anio":"1982-10-27","descripcion":"Álbum que incluye el éxito \"1999\" y contribuyó a la popularidad de Prince en los años 80.","Artista_idArtista":98},{"idAlbum":78,"titulo":"Master of Puppets","anio":"1986-03-03","descripcion":"Álbum influyente en el heavy metal con canciones como \"Battery\" y \"Master of Puppets\".","Artista_idArtista":102},{"idAlbum":79,"titulo":"Metallica (Black Album)","anio":"1991-08-12","descripcion":"Álbum homónimo conocido por canciones como \"Enter Sandman\" y \"The Unforgiven\".","Artista_idArtista":102},{"idAlbum":80,"titulo":"Ride the Lightning","anio":"1984-07-27","descripcion":"Álbum que sigue la senda del thrash metal de Metallica e incluye sencillos como \"Fade to Black\" y \"Creeping Death\".","Artista_idArtista":102},{"idAlbum":81,"titulo":"Rust in Peace","anio":"1990-09-24","descripcion":"Álbum influyente en el thrash metal con canciones como \"Holy Wars... The Punishment Due\" y \"Hangar 18\".","Artista_idArtista":106},{"idAlbum":82,"titulo":"Peace Sells... but Who's Buying?","anio":"1986-09-19","descripcion":"Álbum que ayudó a establecer a Megadeth en el mundo del metal con canciones como \"Peace Sells\" y \"Wake Up Dead\".","Artista_idArtista":106},{"idAlbum":83,"titulo":"Countdown to Extinction","anio":"1992-07-14","descripcion":"Álbum exitoso con canciones como \"Symphony of Destruction\" y \"Sweating Bullets\".","Artista_idArtista":106},{"idAlbum":84,"titulo":"Homework","anio":"1997-01-20","descripcion":"Álbum debut que contribuyó al auge de la música electrónica, con canciones como \"Around the World\" y \"Da Funk\".","Artista_idArtista":128},{"idAlbum":85,"titulo":"Discovery","anio":"2001-03-12","descripcion":"Álbum que presenta un enfoque más pop y contiene éxitos como \"One More Time\" y \"Harder, Better, Faster, Stronger\".","Artista_idArtista":128},{"idAlbum":86,"titulo":"Random Access Memories","anio":"2013-05-17","descripcion":"Álbum aclamado que fusiona elementos de electrónica y funk, incluye \"Get Lucky\" y \"Instant Crush\".","Artista_idArtista":128},{"idAlbum":87,"titulo":"Doggystyle","anio":"1993-11-23","descripcion":"Álbum debut que ayudó a establecer a Snoop Dogg como una figura influyente en el hip-hop con sencillos como \"Gin and Juice\".","Artista_idArtista":170},{"idAlbum":88,"titulo":"Tha Doggfather","anio":"1996-11-12","descripcion":"Álbum que sigue el éxito de Doggystyle e incluye canciones como \"Snoop's Upside Ya Head\" y \"Vapors\".","Artista_idArtista":170},{"idAlbum":89,"titulo":"Doggumentary","anio":"2011-03-29","descripcion":"Álbum que presenta colaboraciones y sencillos como \"Wet\" y \"Boom\".","Artista_idArtista":170},{"idAlbum":90,"titulo":"Love Yourself: Answer","anio":"2018-08-24","descripcion":"Álbum que forma parte de la serie \"Love Yourself\" con canciones como \"Idol\" y \"Fake Love\".","Artista_idArtista":152},{"idAlbum":91,"titulo":"Map of the Soul: 7","anio":"2020-02-21","descripcion":"Álbum que explora temas profundos y presenta sencillos como \"ON\" y \"Black Swan\".","Artista_idArtista":152},{"idAlbum":92,"titulo":"BE","anio":"2020-11-20","descripcion":"Álbum lanzado durante la pandemia que refleja los sentimientos y experiencias de BTS en ese momento.","Artista_idArtista":152}], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('album', null, {});
  }
};

