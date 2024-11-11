import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Fan, Lightbulb, RefrigeratorIcon, Wind } from 'lucide-react';
import './PowerAnalyticsDashboard.css';


const PowerAnalyticsDashboard = () => {
  // Static data for the line chart
  const historicalData = [
    { year: 2019, value: 800 },
    { year: 2020, value: 1200 },
    { year: 2021, value: 600 },
    { year: 2022, value: 900 },
    { year: 2023, value: 750 },
    { year: 2024, value: 850 },
  ];

  // Static data for current consumption
  const currentConsumptionData = Array(14).fill(null).map((_, i) => ({
    day: i + 1,
    value: Math.floor(Math.random() * (1800 - 1400) + 1400),
  }));

  const navItems = [
    'Dashboard',
    'Schedule',
    'Monitors',
    'Schedule',
    'Elements',
    'Forms',
    'Tables',
    'Charts',
    'Maps',
    'Profile'
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-lg font-semibold">Power Analytics</span>
          </div>
        </div>
        <nav className="p-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${index === 0 ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
            >
              <span>{item}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Fan className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Fan</div>
                <div className="text-2xl font-semibold">27</div>
                <div className="text-xs text-gray-400">Power Consumption: 270</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-3 bg-orange-100 rounded-full">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Light</div>
                <div className="text-2xl font-semibold">65</div>
                <div className="text-xs text-gray-400">Power Consumption: 876</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <RefrigeratorIcon className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Refrigerator</div>
                <div className="text-2xl font-semibold">4</div>
                <div className="text-xs text-gray-400">Power Consumption: 852</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-full">
                <Wind className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                <div className="text-sm text-gray-500">Air Condition</div>
                <div className="text-2xl font-semibold">65</div>
                <div className="text-xs text-gray-400">Power Consumption: 65</div>
                </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Power Usage Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-semibold">Power Consumption</h3>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold">2,095</div>
                  <div className="text-sm text-gray-500">Heater</div>
                </div>
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-lg font-semibold">17%</div>
                    <div className="text-sm text-gray-500 ml-1">saved</div>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold">2,360</div>
                  <div className="text-sm text-gray-500">Lights</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Power Consumption Chart */}
          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Current Power Consumption (kW/h)</h3>
                <div className="text-3xl font-bold text-blue-600">1635.00</div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#2563eb"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PowerAnalyticsDashboard;
