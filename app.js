
const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

app.use(express.static(__dirname + "/public"))



app.get('/', (req, res) => {
    res.render('index', {titulo:'Mi respuesta desde Express con EJS'})    //localhost:3000/
})

app.get('/servicios', (req, res) => {
    res.render('servicios', {titulox: 'estas en la pagina dinámica de servicios'})  //localhost:3000/servicios
})

app.use((req, res, next) => {
    res.status(404).render('404',{
        titulo: '404',
        descripcion: 'No encontrado'
    })
})

app.listen(port, () => {
    console.log('servidor a su servicio', port)
})