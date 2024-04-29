import { fetchPlayers } from "@/utils/index";
import CardPlayer from "@/components/CardPlayer";
import CardGK from "@/components/CardGK";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const allPlayers = await fetchPlayers();

const Players = ({ params }) => {
	let teamName = params.slug.toUpperCase();
	let players = allPlayers.filter(function (player) {
		return player.TeamShortCode == teamName;
	});

	players = players.sort(function (a, b) {
		return b.SelectedPercentage - a.SelectedPercentage;
		// return b.Value - a.Value;
	});

	let gk = players.filter(function (player) {
		return player.Skill == 1;
	});
	let def = players.filter(function (player) {
		return player.Skill == 2;
	});
	let mid = players.filter(function (player) {
		return player.Skill == 3;
	});
	let strikers = players.filter(function (player) {
		return player.Skill == 4;
	});
	return (
		<div className="overflow-hidden w-full m-auto">
			<div>
				<h3 className="font-bold text-xl my-4 ">Goalkeepers</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
					{gk?.map((player) => (
						<CardPlayer
							key={player.Id}
							player={player}
						/>
					))}
				</div>
				<h3 className="font-bold text-xl my-4 ">Defenders</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
					{def?.map((player) => (
						<CardPlayer
							key={player.Id}
							player={player}
						/>
					))}
				</div>
				<h3 className="font-bold text-xl my-4 ">Midfielders</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
					{mid?.map((player) => (
						<CardPlayer
							key={player.Id}
							player={player}
						/>
					))}
				</div>
				<h3 className="font-bold text-xl my-4 ">Strikers</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
					{strikers?.map((player) => (
						<CardPlayer
							key={player.Id}
							player={player}
						/>
					))}
				</div>
			</div>
			{/* <div>
				<div className="container mx-auto py-10">
					<DataTable
						columns={columns}
						data={players}
					/>
				</div>
			</div> */}
		</div>
	);
};

export default Players;
