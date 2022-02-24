const express = require('express')
const app = express()
const port = process.env.PORT
const fluent = require('fluent-ffmpeg')


app.get('/', (req, res) => {

    fluent('prueba.mp4').toFormat('mp3').audioBitrate('128k').audioCodec('libmp3lame').save('./prueba.mp3').on('end',()=>{
        res.download('prueba.mp3')

    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
