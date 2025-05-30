import { useEffect, useState } from 'react';
import historyService from '../service/historyService'; // Adjust path if needed

export default function UserStats() {
	const [userStats, setUserStats] = useState([]);

	useEffect(() => {
		// Get all history entries
		const allHistory = historyService.getAllHistory();

		// Aggregate stats per user
		const statsMap = {};
		allHistory.forEach(({ email }) => {
			if (!statsMap[email]) {
				statsMap[email] = { email, actions: 0 };
			}
			statsMap[email].actions += 1;
		});

		setUserStats(Object.values(statsMap));
	}, []);

	return (
		<div className="p-8 bg-[#f4e7e1] min-h-screen">
		 <div
        className="absolute top-20 left-16 opacity-20 z-20 pointer-events-none text-[60px]"
      >🐾</div>
      <div
        className="absolute bottom-20 right-20 opacity-15 z-20 pointer-events-none text-[80px]"
      >🐾</div>
		<div className="max-w-2xl mx-auto mt-28 p-6 bg-white rounded-lg shadow">
			<h2 className="text-2xl font-bold mb-6 text-orange-400">User Stats</h2>
			<table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
				<thead>
					<tr className="bg-gray-100">
						<th className="py-3 px-4 text-left font-semibold text-[#D5451B]">Email</th>
						<th className="py-3 px-4 text-left font-semibold text-[#D5451B]">
							Logged in count
						</th>
					</tr>
				</thead>
				<tbody>
					{userStats.length === 0 ? (
						<tr>
							<td colSpan={2} className="py-4 px-4 text-center text-[#FF9B45] ">
								No user stats available.
							</td>
						</tr>
					) : (
						userStats.map((user) => (
							<tr
								key={user.email}
								className="border-t border-gray-100 hover:bg-gray-50"
							>
								<td className="py-3 px-4">{user.email}</td>
								<td className="py-3 px-4">{user.actions}</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
		</div>
	);
}