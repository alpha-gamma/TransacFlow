/**
 * TransacFlow - Configuration File
 * 
 * ⚠️ REQUIRED: Update SHEET_ID below
 * 📖 Setup guide: Extensions → Apps Script → Run setupAutomation()
 */

// ==================== REQUIRED SETTINGS ====================

/**
 * Your Google Sheet ID
 * Find it in your sheet URL: docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
 */
const SHEET_ID = 'YOUR_SHEET_ID_HERE';

const SHEET_NAME = 'Transactions';
const NICKNAMES_SHEET_NAME = 'Account Nicknames';


// ==================== EMAIL SEARCH ====================

/**
 * Days to search back for transaction emails
 * Recommended: 7 (daily), 30 (initial setup), 90 (historical import)
 */
const EMAIL_SEARCH_DAYS = 90;

/**
 * Maximum emails to process per run (prevents timeout)
 */
const MAX_EMAILS_PER_RUN = 50;

/**
 * Search mode: 'DYNAMIC' (auto from patterns) or 'MANUAL' (custom query)
 */
const SEARCH_QUERY_MODE = 'DYNAMIC';

/**
 * Manual search query (only if SEARCH_QUERY_MODE = 'MANUAL')
 */
const MANUAL_SEARCH_QUERY = [
  'subject:(transaction alert OR payment alert OR debited OR credited OR UPI)',
  'newer_than:' + EMAIL_SEARCH_DAYS + 'd'
].join(' ');


// ==================== BEHAVIOR ====================

const MARK_EMAILS_AS_READ = true;  // Mark processed emails as read
const LOG_LEVEL = 'INFO';          // 'DEBUG', 'INFO', or 'ERROR' (use INFO to see dashboard updates)


// ==================== CURRENCY ====================

const CURRENCY_SYMBOL = '₹';  // ₹, $, €, £, ¥
const CURRENCY_CODE = 'INR';  // INR, USD, EUR, GBP, JPY

const AMOUNT_FORMAT = CURRENCY_SYMBOL + '#,##0.00';

/**
 * Currency parsing rules - add your currency if not listed
 */
const CURRENCY_FORMATS = {
  'INR': { symbols: ['₹', 'Rs.', 'Rs', 'INR'], thousandsSeparator: ',', decimalSeparator: '.' },
  'USD': { symbols: ['$', 'USD'], thousandsSeparator: ',', decimalSeparator: '.' },
  'EUR': { symbols: ['€', 'EUR'], thousandsSeparator: ',', decimalSeparator: '.' },
  'GBP': { symbols: ['£', 'GBP'], thousandsSeparator: ',', decimalSeparator: '.' },
  'JPY': { symbols: ['¥', '円', 'JPY'], thousandsSeparator: ',', decimalSeparator: '.' },
};

function getCurrencyFormat() {
  return CURRENCY_FORMATS[CURRENCY_CODE] || CURRENCY_FORMATS['INR'];
}


// ==================== SHEET FORMATTING ====================

const SHEET_HEADERS = [
  'Date',
  'Time',
  `Amount (${CURRENCY_SYMBOL})`,
  'Account/Card/UPI',
  'Account Name',
  'Merchant/Description',
  'Category',
  'Source',
  'Email ID'
];

const HEADER_STYLE = {
  backgroundColor: '#4285f4',
  fontColor: '#ffffff',
  fontWeight: 'bold'
};


// ==================== ADVANCED (Optional) ====================

const SEND_ERROR_NOTIFICATIONS = false;   // Email on errors
const SEND_SUMMARY_NOTIFICATIONS = false; // Email after each run
const TIMEZONE = null;                    // null = auto, or 'Asia/Kolkata', etc.


// ==================== DASHBOARD SETTINGS ====================

/**
 * Monthly budget targets (edit these to set your budget goals)
 */
const MONTHLY_BUDGETS = {
  'Food & Dining': 10000,
  'Transportation': 5000,
  'Shopping': 15000,
  'Groceries': 8000,
  'Entertainment': 3000,
  'Bills & Utilities': 5000,
  'Other': 5000
};

/**
 * Auto-update dashboard when new transactions are processed
 */
const AUTO_UPDATE_DASHBOARD = true;  // Set to false to disable auto-update


// ==================== INTERNAL FUNCTIONS ====================

function getSearchQuery() {
  return SEARCH_QUERY_MODE === 'MANUAL' ? MANUAL_SEARCH_QUERY : buildSearchQueryFromPatterns();
}

function getTimezone() {
  return TIMEZONE || Session.getScriptTimeZone();
}

function validateConfig() {
  const errors = [];
  
  if (SHEET_ID === 'YOUR_SHEET_ID_HERE') {
    errors.push('❌ SHEET_ID not configured. Update it in Config.gs');
  }
  
  if (EMAIL_SEARCH_DAYS < 1 || EMAIL_SEARCH_DAYS > 365) {
    errors.push('⚠️ EMAIL_SEARCH_DAYS should be between 1 and 365');
  }
  
  if (MAX_EMAILS_PER_RUN < 1 || MAX_EMAILS_PER_RUN > 500) {
    errors.push('⚠️ MAX_EMAILS_PER_RUN should be between 1 and 500');
  }
  
  if (!['DYNAMIC', 'MANUAL'].includes(SEARCH_QUERY_MODE)) {
    errors.push('❌ SEARCH_QUERY_MODE must be "DYNAMIC" or "MANUAL"');
  }
  
  if (errors.length > 0) {
    console.log('=== CONFIGURATION ERRORS ===');
    errors.forEach(err => console.log(err));
    console.log('\nFix these errors in Config.gs');
    return false;
  }
  
  console.log('✓ Configuration valid');
  return true;
}

function showConfig() {
  console.log('=== CONFIGURATION ===');
  console.log(`Sheet ID: ${SHEET_ID}`);
  console.log(`Sheet Name: ${SHEET_NAME}`);
  console.log(`Search Days: ${EMAIL_SEARCH_DAYS}`);
  console.log(`Max Emails: ${MAX_EMAILS_PER_RUN}`);
  console.log(`Search Mode: ${SEARCH_QUERY_MODE}`);
  console.log(`Mark Read: ${MARK_EMAILS_AS_READ}`);
  console.log(`Log Level: ${LOG_LEVEL}`);
  console.log(`Currency: ${CURRENCY_CODE} (${CURRENCY_SYMBOL})`);
  console.log(`Timezone: ${getTimezone()}`);
  console.log('\n=== SEARCH QUERY ===');
  console.log(getSearchQuery());
  console.log('\n=== VALIDATION ===');
  validateConfig();
}
