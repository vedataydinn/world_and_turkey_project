import { useState, useEffect } from 'react';
import { WorldometerAPI } from '../services/api';
import { MapData, TurkeyRegionData } from '../types';
import { processMapData } from '../utils/mapUtils';

interface UseMapDataReturn {
  data: MapData | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// Mock data for Turkey's regions
const mockTurkeyRegions: TurkeyRegionData[] = [
  {
    regionName: 'Marmara',
    internetStats: {
      accessRate: 85.3,
      growthRate: 3.2,
      totalUsers: 21000000
    },
    educationStats: {
      literacyRate: 98.2,
      primaryEnrollment: 95.1,
      secondaryEnrollment: 88.4,
      tertiaryEnrollment: 48.7
    }
  },
  {
    regionName: 'Aegean',
    internetStats: {
      accessRate: 82.1,
      growthRate: 3.8,
      totalUsers: 9500000
    },
    educationStats: {
      literacyRate: 97.8,
      primaryEnrollment: 94.8,
      secondaryEnrollment: 87.2,
      tertiaryEnrollment: 46.3
    }
  },
  {
    regionName: 'Central Anatolia',
    internetStats: {
      accessRate: 79.4,
      growthRate: 4.1,
      totalUsers: 12000000
    },
    educationStats: {
      literacyRate: 97.1,
      primaryEnrollment: 93.9,
      secondaryEnrollment: 86.5,
      tertiaryEnrollment: 45.2
    }
  }
  // Add more regions as needed
];

export const useMapData = (): UseMapDataReturn => {
  const [data, setData] = useState<MapData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        globalInternet,
        globalEducation,
        turkeyInternet,
        turkeyEducation
      ] = await Promise.all([
        WorldometerAPI.getGlobalInternetStats(),
        WorldometerAPI.getGlobalEducationStats(),
        WorldometerAPI.getTurkeyInternetStats(),
        WorldometerAPI.getTurkeyEducationStats()
      ]);

      // Create the final data structure
      const mapData: MapData = {
        internetStats: globalInternet,
        educationStats: globalEducation,
        turkeyData: {
          regions: mockTurkeyRegions, // Using mock data for regions
          national: {
            internetStats: turkeyInternet,
            educationStats: turkeyEducation
          }
        }
      };

      setData(mapData);
    } catch (err) {
      setError('Failed to fetch data. Please try again later.');
      console.error('Error fetching map data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData
  };
};

export default useMapData;
