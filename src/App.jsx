import React from 'react';
import "./global.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: '6/30/2024 - 7/6/2024', orders: 4, sales: 1.5, avgOrderValue: 351 },
  { name: '7/7/2024 - 7/13/2024', orders: 2, sales: 0.8, avgOrderValue: 351 },
  { name: '7/21/2024 - 7/27/2024', orders: 2, sales: 1, avgOrderValue: 351 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li>Inventory</li>
          <li>Order</li>
          <li>Returns</li>
          <li>Customers</li>
          <li>Shipping</li>
          <li>Channel</li>
          <li>Integrations</li>
          <li>Calculators</li>
          <li>Reports</li>
          <li>Account</li>
        </ul>
      </div>
      <div className="content">
        <h1>Dashboard</h1>
        <div className="chart">
          <h2>Sales vs Orders</h2>
          <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#f5f5f5" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="orders" stroke="#FFBB28" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="sales" stroke="#00C49F" activeDot={{ r: 8 }} />
          </LineChart>
        </div>
        <div className="chart">
          <h2>Portion of Sales</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={[
                { name: 'WooCommerce Store', value: 55.8 },
                { name: 'Shopify Store', value: 44.2 },
              ]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;