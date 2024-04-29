import CardPlayer from "@/components/CardPlayer";
import { fetchPlayers } from "@/utils/index";

const allPlayers = await fetchPlayers();
const Captain = () => {
	let players = allPlayers.sort(function (a, b) {
		// return b.Value - a.Value;
		const a_eo = a.SelectedCapPer + a.SelectedPercentage;
		const b_eo = b.SelectedCapPer + b.SelectedPercentage;
		return b_eo - a_eo;
	});
	return (
		<main className="overflow-hidden w-full m-auto">
			<section>
				<h3 className="font-bold text-xl my-4 ">Effective Ownership</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
					{players?.map((player) => (
						<CardPlayer
							key={player.Id}
							player={player}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default Captain;
