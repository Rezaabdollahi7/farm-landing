import React from 'react';
import {
    GlobeAltIcon, ChartBarIcon, WifiIcon, CogIcon, ShieldCheckIcon, InformationCircleIcon, Battery50Icon, BellAlertIcon, CubeIcon, ChartBarSquareIcon
    , CloudIcon
} from '@heroicons/react/20/solid';

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
            <div className='text-2xl flex justify-start items-start lg:items-center gap-3 text-gray-800 '>
                <InformationCircleIcon className='w-8 h-8' />
                <h3>Product & Technology Overview</h3>
            </div>
            <div className='table-wrapper overflow-x-scroll lg:overflow-x-hidden'>
                <table className="min-w-full border-collapse border border-green-300 text-left mt-8">
                    <thead className="bg-green-500 text-white">
                        <tr>
                            {tableData.headers.map((header, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-2 text-sm lg:text-base  font-semibold border border-green-300 text-center"
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
                                className={rowIndex % 2 === 0 ? "bg-green-100" : "bg-green-200"}
                            >
                                <td className="flex items-center px-2 py-2 text-xs  lg:text-base  font-semibold text-gray-700 ">
                                    <row.icon className="h-5 w-5 text-green-700 mr-2" />
                                    {row.feature}
                                </td>
                                {row.values.map((value, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className="px-4 py-2 text-gray-700 text-xs  sm:text-base  border border-green-300 text-center"
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
