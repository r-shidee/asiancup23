"use client";

import { ColumnDef } from "@tanstack/react-table";
export const columns = [
	{
		accessorKey: "DisplayName",
		header: ({ column }) => {
			return (
				<div
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Name
					{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
				</div>
			);
		},
	},
	{
		accessorKey: "SkillDesc",
		header: ({ column }) => {
			return (
				<div
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Position{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
				</div>
			);
		},
	},
	{
		accessorKey: "Value",
		header: ({ column }) => {
			return (
				<div
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Price{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
				</div>
			);
		},
	},
	{
		accessorKey: "SelectedPercentage",
		header: ({ column }) => {
			return (
				<div
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Selected %{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
				</div>
			);
		},
	},
	{
		accessorKey: "SelectedCapPer",
		header: ({ column }) => {
			return (
				<div
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Captain %{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
				</div>
			);
		},
	},
	{
		accessorKey: "MinutesInGame",
		header: ({ column }) => {
			return (
				<div
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Total Minutes{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
				</div>
			);
		},
	},
	{
		accessorKey: "Overallpoints",
		header: ({ column }) => {
			return (
				<div
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Total Points{/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
				</div>
			);
		},
	},
];
