import Image from "next/image";
import { getEloRating, getFDR } from "@/utils/index";

const CardTeam = ({ team }) => {
	return (
		<div
			key={team.TeamId}
			className="flex flex-col border p-2">
			<div className="flex justify-between">
				<div className="flex gap-2 justify-center items-center">
					<Image
						src={
							"https://games.the-afc.com/fantasy/static-assets/build/images/clubs/" +
							team.TeamId +
							".svg"
						}
						alt={team.TeamName}
						width={20}
						height={20}
					/>
					<h2 className="font-bold">{team.ShortName}</h2>
				</div>
				<div className="flex gap-4">
					<div className="flex flex-col">
						<p className="text-xs">ELO</p>
						<p className="font-bold">{getEloRating(team.ShortName)}</p>
					</div>
					{/* <div className="flex flex-col">
						<p className="text-xs">FDR</p>
						<p className="font-bold">{getFDR(team.ShortName)}</p>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default CardTeam;
