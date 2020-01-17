const index = (req, res, next) => {
    res.render('maps-v/main',{
        title: "Universal Main Park Map", user: req.user,
    })
}

module.exports = {
    index,
}