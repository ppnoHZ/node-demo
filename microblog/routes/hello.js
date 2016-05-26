exports.hello = function (req, res) {
    res.send('time is '+new Date().toString())
}