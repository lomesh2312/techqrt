import React, { useState } from 'react';
import { Search, BarChart3, Download, ChevronDown, MoreHorizontal } from 'lucide-react';
import TrendChart from './TrendChart';
import Pagination from './Pagination';

const SpendingList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const spendingData = [
    {
      id: 'AD-001294',
      datePublished: 'Thu Mar 05 2024 22:48',
      yesterdaySpending: 654.72,
      todaySpending: 165.07,
      totalSpending: 538.28,
      remaining: 959.68,
      trend: [12, 19, 15, 25, 22, 30, 28]
    },
    {
      id: 'AD-007234',
      datePublished: 'Sat Feb 29 2024 09:15',
      yesterdaySpending: 552.94,
      todaySpending: 634.60,
      totalSpending: 264.50,
      remaining: 419.86,
      trend: [8, 15, 12, 20, 18, 25, 23]
    },
    {
      id: 'AD-001254',
      datePublished: 'Thu Jun 23 2024 17:47',
      yesterdaySpending: 570.07,
      todaySpending: 179.76,
      totalSpending: 584.30,
      remaining: 686.81,
      trend: [15, 22, 18, 28, 25, 35, 32]
    },
    {
      id: 'AD-001294',
      datePublished: 'Tue Nov 19 2024 20:59',
      yesterdaySpending: 305.70,
      todaySpending: 592.12,
      totalSpending: 223.18,
      remaining: 201.67,
      trend: [10, 17, 14, 24, 21, 31, 28]
    },
    {
      id: 'AD-001294',
      datePublished: 'Sun May 17 2024 20:13',
      yesterdaySpending: 697.01,
      todaySpending: 532.64,
      totalSpending: 573.80,
      remaining: 261.36,
      trend: [18, 25, 21, 31, 28, 38, 35]
    },
    {
      id: 'AD-001294',
      datePublished: 'Sun Sep 06 2024 16:03',
      yesterdaySpending: 761.63,
      todaySpending: 315.54,
      totalSpending: 480.30,
      remaining: 82.29,
      trend: [14, 21, 17, 27, 24, 34, 31]
    },
    {
      id: 'AD-001294',
      datePublished: 'Sat Feb 29 2024 22:45',
      yesterdaySpending: 691.47,
      todaySpending: 50.49,
      totalSpending: 787.50,
      remaining: 145.56,
      trend: [16, 23, 19, 29, 26, 36, 33]
    },
    {
      id: 'AD-001294',
      datePublished: 'Tue Jan 14 2024 03:36',
      yesterdaySpending: 81.04,
      todaySpending: 607.51,
      totalSpending: 405.93,
      remaining: 886.24,
      trend: [11, 18, 14, 24, 21, 31, 28]
    },
    {
      id: 'AD-001294',
      datePublished: 'Mon Nov 23 2024 06:14',
      yesterdaySpending: 291.74,
      todaySpending: 6.74,
      totalSpending: 354.20,
      remaining: 381.77,
      trend: [13, 20, 16, 26, 23, 33, 30]
    }
  ];

  const filteredData = spendingData.filter(item =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.datePublished.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const formatCurrency = (amount) => {
    return `$ ${amount.toFixed(2)}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Spending List</h1>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              <BarChart3 size={16} />
              <span className="text-sm font-medium">View analytics</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
              <Download size={16} />
              <span className="text-sm font-medium">Download PDF</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreHorizontal size={20} className="text-gray-500" />
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-sm">Newest</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Tabs and Search */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-6">
            <button className="text-orange-500 border-b-2 border-orange-500 pb-2 font-medium">Ads ID</button>
            <button className="text-gray-500 hover:text-gray-700 pb-2">Date Published</button>
            <button className="text-gray-500 hover:text-gray-700 pb-2">Yesterday Spending</button>
            <button className="text-gray-500 hover:text-gray-700 pb-2">Today Spending</button>
            <button className="text-gray-500 hover:text-gray-700 pb-2">Total Spending</button>
            <button className="text-gray-500 hover:text-gray-700 pb-2">Remaining</button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left">
                <input type="checkbox" className="rounded border-gray-300" />
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Ads ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date Published</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Yesterday Spending</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Today Spending</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Total Spending</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Remaining</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Trend</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <input type="checkbox" className="rounded border-gray-300" />
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-blue-600">{item.id}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">{item.datePublished}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-gray-800">{formatCurrency(item.yesterdaySpending)}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-gray-800">{formatCurrency(item.todaySpending)}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-gray-800">{formatCurrency(item.totalSpending)}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-gray-800">{formatCurrency(item.remaining)}</span>
                </td>
                <td className="px-6 py-4">
                  <TrendChart data={item.trend} />
                </td>
                <td className="px-6 py-4">
                  <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                    <MoreHorizontal size={16} className="text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing {startIndex + 1} from {Math.min(startIndex + itemsPerPage, filteredData.length)} data
        </p>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default SpendingList;