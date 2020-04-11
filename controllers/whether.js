const { getWhetherData } = require("../services/whetherService");
const controller = {
	getWhetherInfo: async (req, res) => {
		try {
			const { cities } = req.body;
			if (cities.length) {
				//Processing whether service
				//If more than one cities then iterate whether services.
				let whetherInfo = {};
				for (let i = 0; i < cities.length; i++) {
					const response = await getWhetherData(cities[i]);
					whetherInfo[cities[i]] = JSON.parse(response);
				}
				res.send({ code: 1, whetherInfo });
			} else {
				//If zip codes is missing then return this message.
				res.send({ code: 0, message: "City is not found." });
			}
		} catch (e) {
			console.log(e);
			res.send({ code: 0, message: e.message });
		}
	},
};

module.exports = controller;
