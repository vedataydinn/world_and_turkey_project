import axios from 'axios';
import { InternetStats, EducationStats } from '../types';

const BASE_URL = 'https://api.worldometers.info/api/v1';

// Mock data structure until we have actual API access
interface MockInternetStats extends InternetStats {
  // Additional fields that might come from the API
  timestamp?: string;
  source?: string;
}

interface MockEducationStats extends EducationStats {
  // Additional fields that might come from the API
  timestamp?: string;
  source?: string;
}

export interface WorldometerResponse {
  data: MockInternetStats[] | MockEducationStats[];
  metadata?: {
    timestamp: string;
    source: string;
  };
}

export const WorldometerAPI = {
  // Get global internet access rates
  getGlobalInternetStats: async (): Promise<MockInternetStats[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/internet-stats`);
      // For now, return mock data
      return [
        {
          country: 'Global',
          accessRate: 59.5,
          growthRate: 7.3,
          year: 2023,
          totalUsers: 4950000000,
          population: 8000000000
        }
      ];
    } catch (error) {
      console.error('Error fetching global internet stats:', error);
      throw error;
    }
  },

  // Get Turkey-specific internet access rates
  getTurkeyInternetStats: async (): Promise<MockInternetStats> => {
    try {
      const response = await axios.get(`${BASE_URL}/internet-stats/turkey`);
      // For now, return mock data
      return {
        country: 'Turkey',
        accessRate: 77.7,
        growthRate: 4.3,
        year: 2023,
        totalUsers: 65000000,
        population: 84000000
      };
    } catch (error) {
      console.error('Error fetching Turkey internet stats:', error);
      throw error;
    }
  },

  // Get global education levels
  getGlobalEducationStats: async (): Promise<MockEducationStats[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/education-stats`);
      // For now, return mock data
      return [
        {
          country: 'Global',
          literacyRate: 86.5,
          primaryEnrollment: 89.4,
          secondaryEnrollment: 76.2,
          tertiaryEnrollment: 38.0,
          year: 2023
        }
      ];
    } catch (error) {
      console.error('Error fetching global education stats:', error);
      throw error;
    }
  },

  // Get Turkey-specific education levels
  getTurkeyEducationStats: async (): Promise<MockEducationStats> => {
    try {
      const response = await axios.get(`${BASE_URL}/education-stats/turkey`);
      // For now, return mock data
      return {
        country: 'Turkey',
        literacyRate: 96.7,
        primaryEnrollment: 93.2,
        secondaryEnrollment: 85.7,
        tertiaryEnrollment: 44.1,
        year: 2023
      };
    } catch (error) {
      console.error('Error fetching Turkey education stats:', error);
      throw error;
    }
  }
};
