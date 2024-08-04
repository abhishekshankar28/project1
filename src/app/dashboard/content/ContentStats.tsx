import React from 'react';
import ContentDynamicChart from './ContentDynamicChart';
import TopArticleContent from './TopArticleContent';

const ContentStats = () => {
  const stats = [
    { value: '324', label: 'Appointments this month', icon: '👥' },
    { value: '22', label: 'Certified Consultants', icon: '👨‍⚕️' },
    { value: '4000', label: 'Registered Users', icon: '👥' },
    { value: '324', label: 'Appointments this month', icon: '👥' },
    { value: '22', label: 'Certified Consultants', icon: '👨‍⚕️' },
    { value: '4000', label: 'Registered Users', icon: '👥' },
  ];

  return (
    <>
      <div style={{width: "600px"}}>
      <div className="dashboard-container">
        <div className="stats-row">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-content">
                <div className="stat-value" style={{color: "#2C297E"}}>{stat?.value}</div>
                <div className="stat-icon">{stat.icon}</div>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <ContentDynamicChart />
      <TopArticleContent />
      </div>
    </>
  );
};

export default ContentStats;