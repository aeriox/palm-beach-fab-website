// IDX Broker Configuration
// =========================
// 
// To complete your IDX Broker integration:
// 
// 1. Sign up at https://www.idxbroker.com
// 2. Get approved by your MLS boards:
//    - Stellar MLS (Orlando area)
//    - BeachesMLS (Palm Beach area)
// 3. Get your Account ID from the IDX Broker dashboard
// 4. Add your Account ID below
// 5. Optionally add custom CSS in src/styles/idx-custom.css

export const IDX_CONFIG = {
  // Your IDX Broker Account ID (get this from your IDX Broker dashboard)
  // Example: 'a012345'
  accountId: '',
  
  // MLS boards you're connected to
  mlsBoards: [
    { name: 'Stellar MLS', region: 'Orlando Metro' },
    { name: 'BeachesMLS', region: 'Palm Beach County' },
  ],
  
  // Default search settings
  defaultSearch: {
    propertyTypes: ['Residential', 'Condo', 'Townhouse'],
    minPrice: 0,
    maxPrice: 10000000,
  },
  
  // Widget settings
  widgets: {
    search: {
      enabled: true,
      showMap: true,
    },
    featured: {
      enabled: true,
      limit: 6,
    },
  },
};

// Check if IDX is configured
export const isIDXConfigured = () => {
  return IDX_CONFIG.accountId && IDX_CONFIG.accountId.length > 0;
};
