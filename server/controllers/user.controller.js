class userController {
    async index(req, res) {
        res.json({ message: "Welcome user controller." });
    }

    async store(req, res) {
        res.json({ message: "Store user controller." });
    }

    async edit(req, res) {
        res.json({ message: "Edit user controller." });
    }

    async update(req, res) {
        res.json({ message: "Update user controller." });
    }

    async destroy(req, res) {
        res.json({ message: "Destroy user controller." });
    }
}

module.exports = new userController();