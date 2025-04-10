const RecommandInsights = () => {
  return (
    <div className="container mx-auto py-6">
      <h3 className="text-xl font-semibold mb-4">Recommendations</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Clean Your Email Lists</h4>
          <p>Historical data shows a high bounce rate from invalid or outdated email addresses. Use email verification tools before submitting leads.</p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Improve Submission Timeliness</h4>
          <p>Leads submitted late tend to underperform. Aim to maintain or improve your current on-time delivery rate.</p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Ensure Complete Lead Profiles</h4>
          <p>Many rejections came from missing fields (e.g., company size, phone number). Make sure all essential fields are filled in before submission.</p>
        </div>

        <div className="card p-3 bg-white rounded shadow-sm">
          <h4 className="text-sm font-medium mb-2">Aim for Elite Tier Incentives</h4>
          <p>Improving lead score, delivery consistency, and conversion rates can move you to the Elite tier, unlocking higher volume and bonuses.</p>
        </div>

    
      </div>
    </div>
  );
};

export default RecommandInsights;
