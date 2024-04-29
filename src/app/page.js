import Image from "next/image";
import CardTeam from "@/components/CardTeam";
import {
	fetchTeams,
	fetchGameweek,
	getEloRating,
	calculateWinningPercentage,
} from "@/utils/index";

const allGameweek = await fetchGameweek();
const allTeams = await fetchTeams();

const Home = () => {
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
				<div className="grid grid-col-2 lg:grid-cols-6 gap-2">
					<div className="flex flex-col gap-2">
						<h3 className="font-bold text-xl">Group A</h3>
						<div className="flex flex-col">
							{groupA?.map((team) => (
								<CardTeam
									key={team.TeamId}
									team={team}
								/>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="font-bold text-xl">Group B</h3>
						<div className="flex flex-col">
							{groupB?.map((team) => (
								<CardTeam
									key={team.TeamId}
									team={team}
								/>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="font-bold text-xl">Group C</h3>
						<div className="flex flex-col">
							{groupC?.map((team) => (
								<CardTeam
									key={team.TeamId}
									team={team}
								/>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="font-bold text-xl">Group D</h3>
						<div className="flex flex-col">
							{groupD?.map((team) => (
								<CardTeam
									key={team.TeamId}
									team={team}
								/>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="font-bold text-xl">Group E</h3>
						<div className="flex flex-col">
							{groupE?.map((team) => (
								<CardTeam
									key={team.TeamId}
									team={team}
								/>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<h3 className="font-bold text-xl">Group F</h3>
						<div className="flex flex-col">
							{groupF?.map((team) => (
								<CardTeam
									key={team.TeamId}
									team={team}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
