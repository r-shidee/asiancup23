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
		accessorKey: "TeamName",
		header: "TeamName",
	},
	{
		accessorKey: "SkillDesc",
		header: "Position",
	},
	{
		accessorKey: "Value",
		header: () => <div className="font-bold">Amount</div>,
		// cell: ({}) => <div className="text-right font-bold"></div>,
		// cell: ({ row }) => {
		// 	const amount = parseFloat(row.getValue("amount"));
		// 	const formatted = new Intl.NumberFormat("en-US", {
		// 		style: "currency",
		// 		currency: "USD",
		// 	}).format(amount);

		// 	return <div className="text-right font-medium">{formatted}</div>;
		// },
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
];
