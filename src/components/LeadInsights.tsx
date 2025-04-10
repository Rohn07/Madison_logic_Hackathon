const LeadInsights = () => {
  return (
    <div className="container mx-auto py-6">
      <h3 className="text-xl font-semibold mb-4">Lead Insights</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Top Industries</h4>
          <p>Fintech, Retail, EdTech</p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Top Regions</h4>
          <p>Delhi, Mumbai, Tier-2 Cities</p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Recent Activity</h4>
          <p>Last lead: <span className="font-semibold">April 7, 2025</span></p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">On-Time Delivery</h4>
          <p><span className="font-semibold">87%</span></p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Conversion Rate</h4>
          <p><span className="font-semibold">22.5%</span></p>
        </div>

        <div className="card p-3 bg-red-50 border border-red-200 rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2 text-red-700">Invalid Emails</h4>
          <p className="text-red-700"><span className="font-semibold">50%</span> invalid</p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Turnaround Time</h4>
          <p><span className="font-semibold">36 hours</span></p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">ICP Match Score</h4>
          <p><span className="font-semibold">76%</span></p>
        </div>
      </div>
    </div>
  );
};

export default LeadInsights;
