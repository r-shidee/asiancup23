import { fetchPlayers } from "@/utils/index";
import CardPlayer from "@/components/CardPlayer";
import { groupBy } from "core-js/actual/array/group-by";
import { DataTable } from "../data-table";
import { columns } from "../columns";
const allPlayers = await fetchPlayers();

const Players = ({ params }) => {
	let players = allPlayers.filter(function (player) {
		return player.Skill == params.slug;
	});

	players = players.sort(function (a, b) {
		return b.Value - a.Value;
	});
	return (
		<main className="overflow-hidden w-full m-auto">
			<section>
				<h3 className="font-bold text-xl my-4 ">Players</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
					{players?.map((player) => (
						<CardPlayer
							key={player.Id}
							player={player}
						/>
					))}
				</div>
				<div>
					<div className="container mx-auto py-10">
						<DataTable
							columns={columns}
							data={players}
						/>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Players;
