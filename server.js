const express = require('express')
const app = express()

app.get('/:msg', (req, res) => {
    const msg = req.params.msg
    res.send('Hello, ' + msg)
})
app.listen(8000, function () {
    console.log('server listening to port 8000')
}
)
