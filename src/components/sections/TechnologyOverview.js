import React from 'react';
import {
    GlobeAltIcon, ChartBarIcon, WifiIcon, CogIcon, ShieldCheckIcon, Battery50Icon, BellAlertIcon, CubeIcon, ChartBarSquareIcon
    , CloudIcon
} from '@heroicons/react/20/solid';
import FarmLeafIcon from "../../assets/icons/farmLeaf.png"
const tableData = {
    headers: ["Features", "FARM Sens 1", "FARM Sens 2", "FARM Sens 3"],
    rows: [
        {
            feature: "FARM App",
            icon: GlobeAltIcon,
            values: ["Irrigation and Nutrient Management", "Irrigation and Nutrient Management", "Irrigation and Nutrient Management with Automation"],
        },
        {
            feature: "WC-EC-Temp",
            icon: ChartBarIcon,
            values: ["4 Sensors", "4 Sensors", "4 Sensors"],
        },
        {
            feature: "Tensiometer",
            icon: ChartBarSquareIcon,
            values: ["-", "2 Sensors", "-"],
        },
        {
            feature: "Data Logger",
            icon: CogIcon,
            values: ["1", "1", "Data logger with automation"],
        },
        {
            feature: "Weather Station",
            icon: CloudIcon,
            values: ["-", "1", "-"],
        },
        {
            feature: "Wi-Fi",
            icon: WifiIcon,
            values: ["1", "1", "1"],
        },
        {
            feature: "Installation Support",
            icon: CubeIcon,
            values: ["Holding Rod", "Holding Rod", "Holding Rod"],
        },
        {
            feature: "End Season Report",
            icon: BellAlertIcon,
            values: ["1 Season", "2 Season", "1 Season"],
        },
        {
            feature: "Battery",
            icon: Battery50Icon,
            values: ["1", "1", "1"],
        },
        {
            feature: "Warranty",
            icon: ShieldCheckIcon,
            values: ["1 Year", "1 Year", "1 Year"],
        },
    ],
};

function TechnologyOverview() {
    return (
        <section id='TechOverview' className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">


            <h2 className="text-3xl font-bold tracking-tight text-primaryDark flex gap-2 justify-center items-center">
                <img src={FarmLeafIcon} alt='farm leaf ixon' className='w-10 h-10 rounded-full' />
                Technology Overview & Products</h2>

            <div className='table-wrapper overflow-x-scroll lg:overflow-x-hidden'>
                <table className="min-w-full    text-left mt-8">
                    <thead className="bg-[#488245] text-white">
                        <tr>
                            {tableData.headers.map((header, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-2 text-sm lg:text-xl  font-semibold border border-green-800 text-center"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.rows.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className={rowIndex % 2 === 0 ? "bg-[#bfd3be]" : "bg-[#dae6da]"}
                            >
                                <td className="flex items-center px-2 py-2 text-xs  lg:text-base  font-semibold text-gray-700 ">
                                    <row.icon className="h-8 w-8 text-green-700 mr-2" />
                                    {row.feature}
                                </td>
                                {row.values.map((value, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className="px-4 py-2 text-gray-700 text-xs  sm:text-base  border border-green-800/50 text-center"
                                    >
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default TechnologyOverview;
