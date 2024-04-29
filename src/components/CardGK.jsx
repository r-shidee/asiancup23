import React from "react";
import Image from "next/image";
const CardGK = ({ player }) => {
	return (
		<div
			key={player.Id}
			className="flex overflow-hidden">
			<div className="flex flex-col w-full border rounded-xl p-3 relative">
				<div className="flex flex-wrap">
					<div className="flex justify-between w-full relative">
						<div className="flex">
							<div className=" flex flex-col gap-1 h-10 w-10 justify-center items-center ">
								<Image
									src={
										"https://games.the-afc.com/fantasy/static-assets/build/images/clubs/" +
										player.TeamId +
										".svg"
									}
									alt={player.TeamName}
									width={40}
									height={40}
								/>
								<p className="text-xs">{player.TeamShortCode}</p>
							</div>
							<div className="ml-2">
								<h2 className="font-bold text-lg leading-5">
									<span>{player.DisplayName.toLowerCase()}</span>
								</h2>
								<p className="text-xs">
									{player.PlayerFirstName.toLowerCase()}
									&nbsp;{player.PlayerLastName.toLowerCase()}
								</p>
								<p className="lowercase text-xs">{player.SkillDesc}</p>
								<p className="lowercase text-xs">
									{player.SelectedPercentage}%
								</p>
							</div>
						</div>
						<div className="bg-black text-white rounded flex h-10 w-10 justify-center items-center relative">
							{player.Value}
						</div>
					</div>
					<div className="flex flex-col">
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
								<p className="text-xs">Goals Conceded</p>
								<p className="font-bold">{player.GoalConceded}</p>
							</div>
							<div className="flex flex-col">
								<p className="text-xs">Clean Sheets</p>
								<p className="font-bold">{player.CleanSheet}</p>
							</div>
							<div className="flex flex-col">
								<p className="text-xs">Saves</p>
								<p className="font-bold">{player.ShotSaved}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardGK;
