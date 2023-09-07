const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/rest_usuario.js', './routes/rest_artista.js','./routes/rest_cancion.js','./routes/rest_genero.js','./routes/rest_album.js','./routes/rest_listadereproduccion.js','./routes/rest_usuario_artista.js','./routes/rest_usuario_lista.js','./routes/rest_lyric.js','./routes/rest_artista_genero.js','./routes/rest_cancion_genero.js','./routes/rest_album_genero.js','./routes/rest_lista_cancion.js','./routes/rest_artista_imagen.js']




swaggerAutogen(outputFile, endpointsFiles)