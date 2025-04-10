const weekInsights = () => {
  return (
    <div className="container mx-auto py-6">
      <h3 className="text-xl font-semibold mb-4">Weekly Trends</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Consistent Volume</h4>
          <p>Lead submissions remained steady across the last 4 weeks, ensuring reliable partner performance.</p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Stable Conversion Rate</h4>
          <p>A slight upward trend in conversion rate indicates consistent lead quality and targeting.</p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Improving Turnaround Time</h4>
          <p>TAT has been reducing week-over-week, reflecting operational efficiency.</p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Decreased Rejection Rate</h4>
          <p>15% drop in rejected leads compared to the previous week, showing improved data accuracy.</p>
        </div>

      </div>
    </div>
  );
};

export default weekInsights;
