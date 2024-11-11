
export default function BaseTable() {
    return (
        <table className="w-full border-collapse">
            <thead>
                <tr className="border-b-2 border-gray-300 text-sm">
                    <th className="text-left py-2 px-4 font-semibold">Characteristic</th>
                    <th className="text-center py-2 px-4 font-semibold">Dexamethasone Group<br />(N = 2104)</th>
                    <th className="text-center py-2 px-4 font-semibold">Usual Care<br />(N = 4321)</th>
                </tr>
            </thead>
            <tbody>
                <tr className='bg-gray-100 text-xs'>
                    <td className="font-bold text-left py-2 px-4 border-t border-gray-300">Age</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300"></td>
                    <td className="text-center py-2 px-4 border-t border-gray-300"></td>
                </tr>
                <tr>
                    <td className="text-xs py-2 px-4 border-t border-gray-300">Mean - yr.</td>
                    <td className="text-xs text-center py-2 px-4 border-t border-gray-300">66.9±15.4</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300 text-xs">62.3 ± 9.2</td>
                </tr>
                <tr className="bg-gray-100 text-xs">
                    <td className="text-left py-2 px-4 border-t border-gray-300">&lt; 70</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">1141 (54)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">2505 (58)</td>
                </tr>
                <tr className="text-xs">
                    <td className="text-left py-2 px-4 border-t border-gray-300">70 - 79</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">469 (22)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">859 (20)</td>
                </tr>
                <tr className="text-xs bg-gray-100">
                    <td className="text-left py-2 px-4 border-t border-gray-300">&gt; 80</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">494 (23)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">957 (22)</td>
                </tr>
                <tr className="text-xs">
                    <td className="font-bold text-left py-2 px-4 border-t border-gray-300">Sex - no (%)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300"></td>
                    <td className="text-center py-2 px-4 border-t border-gray-300"></td>
                </tr>
                <tr className="text-xs bg-gray-100">
                    <td className="text-left py-2 px-4 border-t border-gray-300">Male</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">1338 (64)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">2749 (64)</td>
                </tr>
                <tr className="text-xs">
                    <td className="text-left py-2 px-4 border-t border-gray-300">Female</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">766 (36)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">1572 (36)</td>
                </tr>
                <tr className="bg-gray-100 text-xs">
                    <td className="font-bold text-left py-2 px-4 border-t border-gray-300">Race or Ethnic Group - no (%)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300"></td>
                    <td className="text-center py-2 px-4 border-t border-gray-300"></td>
                </tr>
                <tr className="text-xs">
                    <td className="text-left py-2 px-4 border-t border-gray-300">White</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">1550 (74)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">3139 (73)</td>
                </tr>
                <tr className="text-xs bg-gray-100">
                    <td className="text-left py-2 px-4 border-t border-gray-300">Black, Asian, or minority ethnic group</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">364 (17)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">783 (18)</td>
                </tr>
                <tr className="text-xs">
                    <td className="text-left py-2 px-4 border-t border-gray-300">Median no. of days since symptom onset (IQR)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">8 (5–13)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">9 (5–13)</td>
                </tr>
                <tr className="text-xs bg-gray-100">
                    <td className="text-left py-2 px-4 border-t border-gray-300">Median no. of days since hospitalization (IQR)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">2 (1-5)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">2 (1-5)</td>
                </tr>
                <tr className="text-xs">
                    <td className="font-bold text-left py-2 px-4 border-t border-gray-300">Respiratory support received — no. (%)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300"></td>
                    <td className="text-center py-2 px-4 border-t border-gray-300"></td>
                </tr>
                <tr className="text-xs bg-gray-100">
                    <td className="text-left py-2 px-4 border-t border-gray-300">No Oxygen</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">501 (24)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">1034 (24)</td>
                </tr>
                <tr className="text-xs">
                    <td className="text-left py-2 px-4 border-t border-gray-300">Oxygen only</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">1279 (61)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">2604 (60)</td>
                </tr>
                <tr className="text-xs bg-gray-100">
                    <td className="text-left py-2 px-4 border-t border-gray-300">Invasive Mechanical Ventilation</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">324 (15)</td>
                    <td className="text-center py-2 px-4 border-t border-gray-300">683 (16)</td>
                </tr>
            </tbody>
        </table>

    )
}
