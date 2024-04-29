let baseURL = "https://games.the-afc.com/fantasy/feeds/";
// let baseURL =
// 	"https://corsproxy.io/?https%3A%2F%2Ffantasy.premierleague.com%2Fapi%2F";
// let endURL = "%2F";

export async function fetchPlayers() {
	const url = baseURL + "players/players_1_1_en.json";
	const response = await fetch(url);
	const result = await response.json();
	const data = result.Data.Value.Players;
	return data;
}

export async function fetchTeams() {
	const url = baseURL + "composition/composition_and_teams_1_en.json";
	const response = await fetch(url);
	const result = await response.json();
	const data = result.Data.Value.teams;
	return data;
}

export async function fetchTeamsELO() {
	const data = [
		{
			name: "Japan",
			codename: "JPN:",
			group: "D,",
			rating: 1905,
		},
		{
			name: "Iran",
			codename: "IRN:",
			group: "C,",
			rating: 1828,
		},
		{
			name: "South Korea",
			codename: "KOR:",
			group: "E,",
			rating: 1803,
		},
		{
			name: "Australia",
			codename: "AUS:",
			group: "B,",
			rating: 1787,
		},
		{
			name: "Uzbekistan",
			codename: "UZB:",
			group: "B,",
			rating: 1645,
		},
		{
			name: "Iraq",
			codename: "IRQ:",
			group: "D,",
			rating: 1615,
		},
		{
			name: "Saudi Arabia",
			codename: "KSA:",
			group: "F,",
			rating: 1588,
		},
		{
			name: "Oman",
			codename: "OMA:",
			group: "F,",
			rating: 1566,
		},
		{
			name: "Qatar",
			codename: "QAT:",
			group: "A,",
			rating: 1521,
		},
		{
			name: "United Arab Emirates",
			codename: "UAE:",
			group: "A,",
			rating: 1517,
		},
		{
			name: "Jordan",
			codename: "JOR:",
			group: "E,",
			rating: 1517,
		},
		{
			name: "Bahrain",
			codename: "BHR:",
			group: "E,",
			rating: 1444,
		},
		{
			name: "China",
			codename: "CHN:",
			group: "A,",
			rating: 1431,
		},
		{
			name: "Syria",
			codename: "SYR:",
			group: "B,",
			rating: 1420,
		},
		{
			name: "Palestine",
			codename: "PLE:",
			group: "C,",
			rating: 1403,
		},
		{
			name: "Vietnam",
			codename: "VIE:",
			group: "D,",
			rating: 1392,
		},
		{
			name: "Thailand",
			codename: "THA:",
			group: "F,",
			rating: 1381,
		},
		{
			name: "Tajikistan",
			codename: "TJK:",
			group: "A,",
			rating: 1377,
		},
		{
			name: "Lebanon",
			codename: "LBN:",
			group: "A,",
			rating: 1309,
		},
		{
			name: "Malaysia",
			codename: "MAS:",
			group: "E,",
			rating: 1301,
		},
		{
			name: "India",
			codename: "IND:",
			group: "B,",
			rating: 1260,
		},
		{
			name: "Indonesia",
			codename: "IDN:",
			group: "D,",
			rating: 1259,
		},
		{
			name: "Kyrgyzstan",
			codename: "KGZ:",
			group: "F,",
			rating: 1254,
		},
		{
			name: "Hong Kong",
			codename: "HKG:",
			group: "C,",
			rating: 1081,
		},
	];
	return data;
}

export async function fetchGameweek() {
	const url = baseURL + "fixtures/fixtures_1_en.json";
	const response = await fetch(url);
	const result = await response.json();
	const data = result.Data.Value;
	return data;
}

export async function calculateWinningPercentage(teamA, teamB) {
	let dr = 0;
	if (teamA == "QAT") {
		dr = Math.abs(getEloRating(teamA) + 100 - getEloRating(teamB));
	} else if (teamB == "QAT") {
		dr = Math.abs(getEloRating(teamB) + 100 - getEloRating(teamB));
	} else {
		dr = Math.abs(getEloRating(teamA) - getEloRating(teamB));
	}
	let we = (1 / (Math.pow(10, -dr / 400) + 1)) * 100;
	return we.toFixed(2);
}

export async function calculateELODifference(teamA, teamB) {
	let dr = 0;
	if (teamA == "QAT") {
		dr = Math.abs(getEloRating(teamA) + 100 - getEloRating(teamB));
	} else if (teamB == "QAT") {
		dr = Math.abs(getEloRating(teamB) + 100 - getEloRating(teamB));
	} else {
		dr = Math.abs(getEloRating(teamA) - getEloRating(teamB));
	}
	return dr;
}

export async function higherELO(teamA, teamB) {
	let dr = 0;
	if (teamA == "QAT") {
		dr = Math.abs(getEloRating(teamA) + 100 - getEloRating(teamB));
	} else if (teamB == "QAT") {
		dr = Math.abs(getEloRating(teamB) + 100 - getEloRating(teamB));
	} else {
		dr = Math.abs(getEloRating(teamA) - getEloRating(teamB));
	}

	if (getEloRating(teamA) > getEloRating(teamB)) {
		return teamA;
	} else return teamB;
}

export const getEloRating = (teamcode) => {
	let eloRating = {
		JPN: 1905,
		IRN: 1828,
		KOR: 1803,
		AUS: 1787,
		UZB: 1645,
		IRQ: 1615,
		KSA: 1588,
		OMA: 1566,
		QAT: 1521,
		UAE: 1517,
		JOR: 1517,
		BHR: 1444,
		CHN: 1431,
		SYR: 1420,
		PLE: 1403,
		VIE: 1392,
		THA: 1381,
		TJK: 1377,
		LBN: 1309,
		MAS: 1301,
		IND: 1260,
		IDN: 1259,
		KGZ: 1254,
		HKG: 1081,
	};

	return eloRating[teamcode];
};

export const getFDR = (teamcode) => {
	let fdr = {
		JPN: 5,
		IRN: 5,
		KOR: 5,
		AUS: 4,
		UZB: 4,
		IRQ: 4,
		KSA: 3,
		OMA: 3,
		QAT: 3,
		UAE: 3,
		JOR: 3,
		BHR: 3,
		CHN: 3,
		SYR: 3,
		PLE: 3,
		VIE: 2,
		THA: 2,
		TJK: 2,
		LBN: 2,
		MAS: 2,
		IND: 2,
		IDN: 2,
		KGZ: 2,
		HKG: 1,
	};

	return fdr[teamcode];
};

export const getGroup = (teamcode) => {
	let group = {
		JPN: "D",
		IRN: "C",
		KOR: "E",
		AUS: "B",
		UZB: "B",
		IRQ: "D",
		KSA: "F",
		OMA: "F",
		QAT: "A",
		UAE: "A",
		JOR: "E",
		BHR: "E",
		CHN: "A",
		SYR: "B",
		PLE: "C",
		VIE: "D",
		THA: "F",
		TJK: "A",
		LBN: "A",
		MAS: "E",
		IND: "B",
		IDN: "D",
		KGZ: "F",
		HKG: "C",
	};

	return group[teamcode];
};
