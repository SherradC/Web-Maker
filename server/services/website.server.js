module.exports = function(app){
    //   find all websites for given user id.
    app.get("/api/user/:uid/website", (req, res) => {
        const uid = req.params["uid"];
        const result = websites.filter(
            (website) => (
                website.developerId === uid
            )
        )
        res.json(result);
    })

    // create new website
    app.post('/api/website', (req, res) => {
        const newWeb = req.body;
        websites.push(newWeb);
        res.json(newWeb);
    })

    // delete website with given wid
    app.delete('/api/website/:wid', (req, res) => {
        const wid = req.params["wid"];
        const web = websites.find((website) => (website._id === wid));
        const index = websites.indexOf(web);
        websites.splice(index, 1);
        res.json(web);
    })

    // update website
    app.put("/api/website", (req, res) => {
        const newWeb = req.body;
        websites = websites.map(
            (website) => {
                if (website._id === newWeb._id) {
                    website = newWeb
                }
                return website;
            }
        )
        res.json(newWeb);
    })
}