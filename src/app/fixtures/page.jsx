import Image from "next/image";
import { bree_serif } from "../fonts";
import {
	fetchGameweek,
	getEloRating,
	calculateWinningPercentage,
} from "@/utils/index";

const allGameweek = await fetchGameweek();
const page = () => {
	return (
		<div>
			<div className="mt-2 font-sans">
				<div className="mt-20 ">
					<h2 className={bree_serif.className + " text-xl"}>Fixtures</h2>
					<div>
						{allGameweek?.map((gameweek) => (
							<div
								key={gameweek.Matchday}
								className="">
								<h3 className="text-lg my-2">Matchday {gameweek.GamedayId}</h3>
								<div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
									{gameweek.match?.map((match) => (
										<div
											key={match.MatchId}
											className="flex border justify-between">
											<div className="flex w-full justify-between">
												<div className="flex flex-col items-center gap-2 p-2">
													<Image
														src={
															"https://games.the-afc.com/fantasy/static-assets/build/images/clubs/" +
															match.HomeTeamId +
															".svg"
														}
														alt={match.HomeTeamCode}
														width={40}
														height={40}
													/>
													<div className="flex flex-col items-center">
														<div className="font-serif">
															{match.HomeTeamCode}
														</div>
														<div className="font-mono text-xs">
															{getEloRating(match.HomeTeamCode)}
														</div>
													</div>
												</div>
												<div className="flex items-center justify-center flex-col">
													<div className="p-1 border rounded-tl-lg  items-center flex flex-col gap-1">
														<div className="font-serif">
															{calculateWinningPercentage(
																match.HomeTeamCode,
																match.AwayTeamCode
															)}
															%
														</div>
														<div className="text-xs">
															{Math.abs(
																getEloRating(match.HomeTeamCode) -
																	getEloRating(match.AwayTeamCode)
															)}
														</div>
													</div>
												</div>

												<div className="flex flex-col items-center gap-2 p-2">
													<Image
														src={
															"https://games.the-afc.com/fantasy/static-assets/build/images/clubs/" +
															match.AwayTeamId +
															".svg"
														}
														alt={match.AwayTeamCode}
														width={40}
														height={40}
													/>
													<div className="flex flex-col items-center">
														<div className="font-serif">
															{match.AwayTeamCode}
														</div>
														<div className="font-mono text-xs">
															{getEloRating(match.AwayTeamCode)}
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
