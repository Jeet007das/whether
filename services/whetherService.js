const { appID, clientId, clientSecret } = require("../config");

const OAuth = require("oauth");
const header = {
	"X-Yahoo-App-Id": appID,
};
const request = new OAuth.OAuth(
	null,
	null,
	clientId,
	clientSecret,
	"1.0",
	null,
	"HMAC-SHA1",
	null,
	header,
);

const getWhetherData = (city) => {
	return new Promise(async (resolve, reject) => {
		try {
			request.get(
				`https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city},us&format=json`,
				null,
				null,
				(err, data) => {
					if (err) reject(err);
					else resolve(data);
				},
			);
		} catch (e) {
			reject(e);
			console.log("Inside catch", e);
		}
	});
};

module.exports = { getWhetherData };
