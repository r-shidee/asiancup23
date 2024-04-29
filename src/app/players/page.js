import { fetchPlayers } from "@/utils/index";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import CardPlayer from "@/components/CardPlayer";

const allPlayers = await fetchPlayers();
const Home = () => {
	let players = allPlayers.sort(function (a, b) {
		// return b.Value - a.Value;
		return b.SelectedPercentage - a.SelectedPercentage;
	});
	return (
		<main className="overflow-hidden w-full m-auto">
			<section>
				<h3 className="font-bold text-xl my-4 ">Players</h3>
				<DataTable
					columns={columns}
					data={players}
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
					{/* {players?.map((player) => (
						<CardPlayer
							key={player.Id}
							player={player}
						/>
					))} */}
				</div>
			</section>
		</main>
	);
};

export default Home;
