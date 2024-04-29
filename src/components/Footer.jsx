import Link from "next/link";
import { fetchTeams } from "@/utils/index";

const allTeams = await fetchTeams();
const Footer = () => {
	return (
		<div className="w-full bg-slate-300 mt-4">
			<div className="w-[1120px] m-auto flex gap-8">
				<div className="flex flex-col py-4">
					<h5 className="mb-2 font-bold">Players</h5>
					<div className="flex flex-col gap-2 text-xs">
						<div className="p-1">
							<Link href={"/players/1/"}>gk</Link>
						</div>
						<div className=" p-1">
							<Link href={"/players/2/"}>def</Link>
						</div>
						<div className=" p-1">
							<Link href={"/players/3/"}>mid</Link>
						</div>
						<div className=" p-1">
							<Link href={"/players/4/"}>for</Link>
						</div>
					</div>
				</div>
				<div className="flex w-1/2 flex-col py-4">
					<h5 className="mb-2 font-bold">Teams</h5>
					<div className="grid grid-cols-4 gap-2 text-xs">
						{allTeams?.map((team) => (
							<div
								key={team.TeamId}
								className=" p-1">
								<Link href={"/players/teams/" + team.ShortName.toLowerCase()}>
									{team.WebName}
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
