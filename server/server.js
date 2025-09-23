const http = require('http')

const hostname = '127.0.0.1' // localhost
const port = 5000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Serveur Node.js fonctionne !\n')
})

server.listen(port, hostname, () => {
    console.log(`Serveur en cours d'exécution sur http://${hostname}:${port}/`)
})
