import CardTeam from "@/components/CardTeam";
import { fetchTeams } from "@/utils/index";
import Image from "next/image";

const allTeams = await fetchTeams();
const Nation = () => {
	let groupA = allTeams.filter(function (team) {
		return (
			team.ShortName == "QAT" ||
			team.ShortName == "CHN" ||
			team.ShortName == "TJK" ||
			team.ShortName == "LBN"
		);
	});

	let groupB = allTeams.filter(function (team) {
		return (
			team.ShortName == "AUS" ||
			team.ShortName == "UZB" ||
			team.ShortName == "SYR" ||
			team.ShortName == "IND"
		);
	});
	let groupC = allTeams.filter(function (team) {
		return (
			team.ShortName == "IRN" ||
			team.ShortName == "UAE" ||
			team.ShortName == "HKG" ||
			team.ShortName == "PLE"
		);
	});
	let groupD = allTeams.filter(function (team) {
		return (
			team.ShortName == "JPN" ||
			team.ShortName == "IRQ" ||
			team.ShortName == "VIE" ||
			team.ShortName == "IDN"
		);
	});
	let groupE = allTeams.filter(function (team) {
		return (
			team.ShortName == "KOR" ||
			team.ShortName == "BHR" ||
			team.ShortName == "JOR" ||
			team.ShortName == "MAS"
		);
	});
	let groupF = allTeams.filter(function (team) {
		return (
			team.ShortName == "KSA" ||
			team.ShortName == "THA" ||
			team.ShortName == "KGZ" ||
			team.ShortName == "OMA"
		);
	});
	return (
		<main className="overflow-hidden w-full m-auto">
			<section>
				<h3 className="font-bold text-xl my-4 ">Group A</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
					{groupA?.map((team) => (
						<CardTeam
							key={team.TeamId}
							team={team}
						/>
					))}
				</div>
				<h3 className="font-bold text-xl my-4 ">Group B</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
					{groupB?.map((team) => (
						<CardTeam
							key={team.TeamId}
							team={team}
						/>
					))}
				</div>
				<h3 className="font-bold text-xl my-4 ">Group C</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
					{groupC?.map((team) => (
						<CardTeam
							key={team.TeamId}
							team={team}
						/>
					))}
				</div>
				<h3 className="font-bold text-xl my-4 ">Group D</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
					{groupD?.map((team) => (
						<CardTeam
							key={team.TeamId}
							team={team}
						/>
					))}
				</div>
				<h3 className="font-bold text-xl my-4 ">Group E</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
					{groupE?.map((team) => (
						<CardTeam
							key={team.TeamId}
							team={team}
						/>
					))}
				</div>
				<h3 className="font-bold text-xl my-4 ">Group F</h3>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
					{groupF?.map((team) => (
						<CardTeam
							key={team.TeamId}
							team={team}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default Nation;
