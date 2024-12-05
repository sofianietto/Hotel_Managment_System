const { PORT } = require("./config/settings");
const express = require("express");
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser'); 
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./database.json')
const db = low(adapter)

app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(cookieParser());

const corsOptions = {
    credentials: true, // Allow credentials (cookies) to be sent to/from origin
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET, POST, PUT, PATCH, DELETE', // Allow these methods
};
app.use(cors(corsOptions));

const jwtSecretKey = '12345678'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require("./config/mongoose.config");

const ReservaRouter = require("./routes/reserva.route");
app.use("/api/reserva", ReservaRouter);

const HabitacionRouter = require("./routes/habitacion.route");
app.use("/api/habitacion", HabitacionRouter);

const ClienteRouter = require("./routes/cliente.route");
app.use("/api/cliente", ClienteRouter);

const UserRouter = require("./routes/user.route");
app.use("/api/auth", UserRouter);



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));