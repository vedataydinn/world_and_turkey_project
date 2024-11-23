// Data structures for internet access statistics
export interface InternetStats {
  country: string;
  accessRate: number;
  growthRate: number;
  year: number;
  totalUsers: number;
  population: number;
}

// Data structures for education statistics
export interface EducationStats {
  country: string;
  literacyRate: number;
  primaryEnrollment: number;
  secondaryEnrollment: number;
  tertiaryEnrollment: number;
  year: number;
}

// Region specific data for Turkey
export interface TurkeyRegionData {
  regionName: string;
  internetStats: {
    accessRate: number;
    growthRate: number;
    totalUsers: number;
  };
  educationStats: {
    literacyRate: number;
    primaryEnrollment: number;
    secondaryEnrollment: number;
    tertiaryEnrollment: number;
  };
}

// Combined data structure for map visualization
export interface MapData {
  internetStats: InternetStats[];
  educationStats: EducationStats[];
  turkeyData?: {
    regions: TurkeyRegionData[];
    national: {
      internetStats: InternetStats;
      educationStats: EducationStats;
    };
  };
}

// Color scales for visualization
export interface ColorScale {
  min: number;
  max: number;
  colors: string[];
}

// Map feature properties
export interface MapFeatureProperties {
  name: string;
  value: number;
  data: InternetStats | EducationStats;
}
