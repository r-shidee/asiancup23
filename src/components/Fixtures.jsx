import { fetchGameweek } from "@/utils/index";

import Image from "next/image";
const allGameweek = await fetchGameweek();
const Fixtures = () => {
	return (
		<div className="mt-20 ">
			<h2>Fixtures</h2>
			<div>
				{allGameweek?.map((gameweek) => (
					<div
						key={gameweek.PhaseId}
						className="flex flex-col gap-2 mt-14 p-2">
						{gameweek.match?.map((match) => (
							<div
								key={match.MatchId}
								className="flex flex-col border">
								<div className="flex gap-2 p-1">
									<Image
										src={
											"https://games.the-afc.com/fantasy/static-assets/build/images/clubs/" +
											match.HomeTeamId +
											".svg"
										}
										alt={match.HomeTeamCode}
										width={20}
										height={20}
									/>
									<div className="text-xs font-bree-serif">
										{match.HomeTeamCode}
									</div>
								</div>
								<div className="flex gap-2 p-1 border-t">
									<Image
										src={
											"https://games.the-afc.com/fantasy/static-assets/build/images/clubs/" +
											match.AwayTeamId +
											".svg"
										}
										alt={match.AwayTeamCode}
										width={20}
										height={20}
									/>
									<div className="text-xs">{match.AwayTeamCode}</div>
								</div>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Fixtures;
