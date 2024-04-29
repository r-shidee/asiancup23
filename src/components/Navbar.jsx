import Link from "next/link";
import { fetchTeams } from "@/utils/index";

const allTeams = await fetchTeams();

const Navbar = () => {
	return (
		<div className="fixed top-0  w-full bg-purple-900 text-white z-10  shadow-sm p-2">
			<div className="w-[1120px] m-auto flex flex-col gap-2">
				<div className="flex gap-2 text-xs">
					<div className="border p-1">
						<Link href={"/"}>Home</Link>
					</div>
					{allTeams?.map((team) => (
						<div
							key={team.TeamId}
							className="border p-1">
							<Link href={"/players/teams/" + team.ShortName.toLowerCase()}>
								{team.ShortName}
							</Link>
						</div>
					))}
				</div>
				<div className="flex gap-2 text-xs">
					<div className="border p-1">
						<Link href={"/players/1/"}>gk</Link>
					</div>
					<div className="border p-1">
						<Link href={"/players/2/"}>def</Link>
					</div>
					<div className="border p-1">
						<Link href={"/players/3/"}>mid</Link>
					</div>
					<div className="border p-1">
						<Link href={"/players/4/"}>for</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
