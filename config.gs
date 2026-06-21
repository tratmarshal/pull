/*
function myFunction() {
  
}
a// ========== config.gs ==========
// ⚙️ Environment & Configuration Variables
// ใช้ไฟล์นี้เก็บตัวแปรสำหรับหลายๆ Environment (dev / staging / production)

const GAS_ENVIRONMENT = "production"; // dev / staging / production

// 🔗 Frontend URLs & IDs (สลับตามสภาพแวดล้อม)
const CONFIG = {
  development: {
    GAS_URL: "https://script.google.com/macros/d/[YOUR_DEV_ID]/usercontent",
    LIFF_ID: "1234567890-dev",
    environment: "development"
  },
  staging: {
    GAS_URL: "https://script.google.com/macros/d/[YOUR_STAGING_ID]/usercontent",
    LIFF_ID: "1234567890-staging",
    environment: "staging"
  },
  production: {
    GAS_URL: "https://script.google.com/macros/d/[YOUR_PROD_ID]/usercontent",
    LIFF_ID: "1234567890-production",
    environment: "production"
  }
};

function getConfig() {
  return CONFIG[GAS_ENVIRONMENT] || CONFIG.production;
}

function getGasUrl() {
  return getConfig().GAS_URL;
}

function getLiffId() {
  return getConfig().LIFF_ID;
}

function getEnvironment() {
  return getConfig().environment;
}*/