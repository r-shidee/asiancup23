import { Bree_Serif } from "next/font/google";
import Image from "next/image";
import {
	calculateELODifference,
	calculateWinningPercentage,
	getEloRating,
	getFDR,
	higherELO,
} from "@/utils";
const bree_serif = Bree_Serif({
	weight: "400",
	subsets: ["latin"],
});
const CardPlayer = ({ player }) => {
	return (
		<div
			key={player.Id}
			className="flex overflow-hidden">
			<div className="flex flex-col w-full border rounded-xl p-2 relative">
				<div className={"flex flex-wrap card--" + player.TeamShortCode}>
					<div className="flex justify-between w-full relative border-b rounded-tl-lg card__header">
						<div className="flex p-2 gap-2">
							{/* <div className=" flex flex-col gap-1 h-10 w-10 justify-center items-center ">
								<Image
									src={
										"https://games.the-afc.com/fantasy/static-assets/build/images/jerseys/" +
										player.TeamId +
										".png"
									}
									alt={player.TeamName}
									width={40}
									height={40}
								/>
							</div> */}
							{/* <Image
								src={
									"https://games.the-afc.com/fantasy/static-assets/build/images/clubs/" +
									player.TeamId +
									".svg"
								}
								alt={player.TeamName}
								width={40}
								height={40}
							/> */}
							<div className={"card--" + player.TeamShortCode}>
								<h2 className={bree_serif.className + "  text-xl leading-5"}>
									<span>{player.DisplayName.toLowerCase()}</span>
								</h2>
								<p className="text-xs">
									{/* {player.PlayerFirstName.toLowerCase()} */}
									{/* &nbsp;{player.PlayerLastName.toLowerCase()} */}
									<p className="lowercase text-xs">{player.SkillDesc}</p>
								</p>
							</div>
						</div>
						<div
							className={
								" w-10 h-10 items-center justify-center rounded flex text-xl flex-col relative"
							}>
							{/* <p className="lowercase text-xs">{player.SkillDesc}</p> */}
							<p className={bree_serif.className}>{player.Value}</p>
						</div>
					</div>
					<div className="flex flex-col w-full">
						<div className="flex items-center justify-between py-2">
							<div className="flex gap-2 p-1">
								<div className="flex flex-col bg-neutral-100 p-2 rounded">
									<p className="text-xs">Selected %</p>
									<p className="font-bold">{player.SelectedPercentage}%</p>
								</div>
								<div className="flex flex-col bg-neutral-100 p-2 rounded">
									<p className="text-xs">Captain %</p>
									<p className="font-bold">
										{player.SelectedCapPer.toFixed(2)}%
									</p>
								</div>
								<div className="flex flex-col bg-neutral-100 p-2 rounded">
									<div className="text-xs">EO</div>
									<p className="font-bold">
										{(
											player.SelectedPercentage + player.SelectedCapPer
										).toFixed(2)}
										%
									</p>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-between p-2">
							<div className="flex gap-4">
								<div className="flex flex-col">
									<p className="text-xs">MD{player.GamedayId}</p>
									<p className="font-bold">{player.CurrGamedayPoints}pts</p>
								</div>
							</div>
							<div className="flex gap-2">
								<div className="flex flex-col">
									<div className="text-xs">Total Pts</div>
									<p className="font-bold">{player.Overallpoints}pts</p>
								</div>
							</div>
						</div>
						<div className="flex items-center w-full p-2">
							<div className="flex gap-4 w-full justify-between">
								<div className="flex flex-col w-full">
									<div className="flex justify-between bg-[#1D1240] text-white px-2 py-1">
										<p className={bree_serif.className + ""}>Next Match</p>
										<p>
											{higherELO(
												player.TeamShortCode,
												player.UpComingMatchesList[0].VsTeamShortCode
											)}{" "}
											to win{" "}
											{calculateWinningPercentage(
												player.TeamShortCode,
												player.UpComingMatchesList[0].VsTeamShortCode
											)}
											%
										</p>
									</div>
									<div className="flex w-full">
										<div
											className={
												"flex w-full justify-between items-center px-2 py-1 rounded-bl-xl fixture--level-" +
												getFDR(player.TeamShortCode)
											}>
											<div className="flex gap-1">
												<Image
													src={
														"https://games.the-afc.com/fantasy/static-assets/build/images/clubs/" +
														player.TeamId +
														".svg"
													}
													alt={player.TeamName}
													width={20}
													height={20}
												/>
												<p className={bree_serif.className}>
													{player.TeamShortCode}
												</p>
											</div>

											<div className={bree_serif.className}>
												{getEloRating(player.TeamShortCode)}
											</div>
										</div>
										<div
											className={
												bree_serif.className +
												" text-lg py-1 px-2 bg-[#1D1240] text-white"
											}>
											{calculateELODifference(
												player.TeamShortCode,
												player.UpComingMatchesList[0].VsTeamShortCode
											)}
										</div>
										{player.UpComingMatchesList?.map((match) => (
											<div
												key={match.VsTeamId}
												className={
													"flex px-2 py-1 w-full justify-between items-center rounded-br-xl fixture--level-" +
													getFDR(match.VsTeamShortCode)
												}>
												<p className={bree_serif.className}>
													{getEloRating(match.VsTeamShortCode)}
												</p>
												<div className="flex gap-1">
													<p className={bree_serif.className}>
														{match.VsTeamShortCode}
													</p>
													<Image
														src={
															"https://games.the-afc.com/fantasy/static-assets/build/images/clubs/" +
															match.VsTeamId +
															".svg"
														}
														alt={player.VsTeamShortCode}
														width={20}
														height={20}
													/>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="flex gap-2 mt-2">
							<div className="flex flex-col">
								<p className="text-xs">Minutes</p>
								<p className="font-bold">{player.MinutesInGame}</p>
							</div>
							<div className="flex flex-col">
								<p className="text-xs">MD Points</p>
								<p className="font-bold">{player.CurrGamedayPoints}</p>
							</div>
							<div className="flex flex-col">
								<p className="text-xs">Total Points</p>
								<p className="font-bold">{player.Overallpoints}</p>
							</div>
						</div>
						<div className="flex gap-2 mt-2">
							<div className="flex flex-col">
								<p className="text-xs">Goals</p>
								<p className="font-bold">{player.GoalScored}</p>
							</div>

							<div className="flex flex-col">
								<p className="text-xs">PK Goals</p>
								<p className="font-bold">{player.GoalByPenalty}</p>
							</div>

							<div className="flex flex-col">
								<p className="text-xs">Assists</p>
								<p className="font-bold">{player.GoalAssist}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardPlayer;
