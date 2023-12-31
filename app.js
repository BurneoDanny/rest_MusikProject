var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

/* MÓDULO dotenv */
const dotenv = require("dotenv");

/* CARGA DE DATOS DE CONFIGURACION EN MEMORIA */
dotenv.config();

var cors = require("cors"); //!!important if localhost used

var indexRouter = require("./routes/index");
var usuarioRouter = require("./routes/rest_usuario");
var artistaRouter = require("./routes/rest_artista");
var cancionRouter = require("./routes/rest_cancion");
var albumRouter = require("./routes/rest_album");
var generoRouter = require("./routes/rest_genero");
var listaRouter = require("./routes/rest_listadereproduccion");
var lyricRouter = require("./routes/rest_lyric");
var usuario_artistaRouter = require("./routes/rest_usuario_artista");
var usuario_listaRouter = require("./routes/rest_usuario_lista");
var artista_generoRouter = require("./routes/rest_artista_genero");
var cancion_generoRouter = require("./routes/rest_cancion_genero");
var album_generoRouter = require("./routes/rest_album_genero");
var lista_cancionRouter = require("./routes/rest_lista_cancion");
var artista_imagenRouter = require("./routes/rest_artista_imagen");

/* REFERENCIA AL MÓDULO */
const swaggerUi = require("swagger-ui-express");

/* REFERENCIA AL ARCHIVO GENERADO */
const swaggerFile = require("./swagger_output.json");

/* CARGA DEL MIDDLEWARE authenticateJWT */
var authenticateJWT = require('./middleware/auth');

var app = express();

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(cors()); //!!important

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
//app.use("/rest/usuario", authenticateJWT, usuarioRouter);
app.use("/rest/usuario", usuarioRouter);
app.use("/rest/artista", artistaRouter);
app.use("/rest/cancion", cancionRouter);
app.use("/rest/album", albumRouter);
app.use("/rest/genero", generoRouter);
app.use("/rest/listadereproduccion", listaRouter);
app.use("/rest/lyric", lyricRouter)
app.use("/rest/usuario_artista", usuario_artistaRouter);
app.use("/rest/usuario_lista", usuario_listaRouter);
app.use("/rest/artista_genero", artista_generoRouter)
app.use("/rest/cancion_genero", cancion_generoRouter)
app.use("/rest/album_genero", album_generoRouter)
app.use("/rest/lista_cancion", lista_cancionRouter)
app.use("/rest/artista_imagen", artista_imagenRouter )


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
