import React from 'react';
import WorldMap from './components/WorldMap';
import TurkeyMap from './components/TurkeyMap';
import useMapData from './hooks/useMapData';
import './styles/maps.css';

const App: React.FC = () => {
  const { data, loading, error, refetch } = useMapData();

  const handleRefetchWithDelay = () => {
    // 5 saniyelik bir gecikme ekleniyor (5000 ms)
    setTimeout(() => {
      refetch();
    }, 5000);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
        <button onClick={handleRefetchWithDelay} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Internet Access and Education Levels Comparison</h1>
        <div className="header-controls">
          <select className="metric-select">
            <option value="internetAccess">Internet Access Rate</option>
            <option value="education">Education Level</option>
            <option value="growthRate">Growth Rate</option>
          </select>
          <button onClick={handleRefetchWithDelay} className="refresh-button">
            Refresh Data
          </button>
        </div>
      </header>

      <main className="maps-container">
        <div className="map-section">
          <h2>Global Statistics</h2>
          <WorldMap data={data} />
        </div>
        <div className="map-section">
          <h2>Turkey Statistics</h2>
          <TurkeyMap data={data?.turkeyData} />
        </div>
      </main>

      <footer className="app-footer">
        <p>Data source: Worldometer API</p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
};

export default App;
