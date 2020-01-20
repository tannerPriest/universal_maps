const index = (req, res) => {
    res.render('index/index', {
        title: "Universal Studios Hollywood Map!",
        user: req.user,
    })
}

module.exports = {
    index,
}