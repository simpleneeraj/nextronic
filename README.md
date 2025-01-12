<div align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/solar--face-scan-square-line-duotone.png">
      <img alt="Next.js logo" src="./public/solar--face-scan-square-line-duotone.png" height="128">
    </picture>
  </a>
  <h2>Nextronic - Open Source Dashboard</h2>
</div>

An alternative to the Metronic Template, built with modern technologies and designed for simplicity. This template is open-source and aims to provide a clean, responsive, and highly customizable UI for building web applications.

## Tech Stack

- **Next.js 15** - A powerful React framework for building optimized web apps.
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development.
- **Next UI** - Beautiful React components to accelerate front-end development.
- **Zustand** - Simple state management solution for React.
- **Recharts** - Composable charting library for React.
- **Tailwind Variants** - Utility for managing variant-based styling in Tailwind.
- **Iconify** - A library of scalable vector icons.

## ⭐ Features

- **Minimal and Clean UI**: A sleek design focusing on user experience.
- **Fully Responsive**: Works seamlessly across all devices.
- **Customizable Layout**: Easy to adjust for your specific project needs.
- **State Management with Zustand**: Efficient and simple state management.
- **Charts with Recharts**: Integrated charting components for data visualization.
- **Tailwind Variants Support**: Easy handling of different UI variants.
- **Iconify Integration**: Access to thousands of icons for UI elements.

## 🚀 Getting Started

Clone the repository and install the dependencies to get started:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
npm install
```

Run the development server:

```bash
npm run dev
```

Your app will be available at [http://localhost:3000](http://localhost:3000).

## 🛠️ Customization

This template is fully customizable! You can modify:

- **Components**: Change or add components as required.
- **Styling**: Tailwind classes can be adjusted to suit your project.
- **State Management**: Modify Zustand store as per your needs.
- **Charts**: Add or modify charts to match your data needs using Recharts.

## 📊 Analytics

We use Recharts for displaying analytics in this template. You can easily integrate your own data or replace the default charts with your own visualizations.

Example of a simple chart using Recharts:

```javascript
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

export default function AnalyticsChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
}
```

## 📈 Stars & Analytics

If you find this template helpful, please consider giving it a ⭐ star on GitHub! It helps others find this project and supports the open-source community.

[![GitHub stars](https://img.shields.io/github/stars/your-username/your-repository.svg?style=social&label=Star)](https://github.com/your-username/your-repository)

## 🤝 Contributing

We welcome contributions! Feel free to fork the repository and submit a pull request. If you have any suggestions or issues, open an issue on GitHub.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Key Features:

- **Hero Banner**: This gives a visual appeal to your README, with the placeholder image you can replace with your own.
- **Stars Section**: Encourages users to star your project on GitHub.
- **Analytics Section**: Provides an example of how Recharts is integrated, with an example chart to show usage.
