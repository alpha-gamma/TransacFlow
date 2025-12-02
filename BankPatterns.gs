/**
 * TransacFlow - Custom Bank Patterns
 * 
 * ⚠️ MOST USERS DON'T NEED TO EDIT THIS FILE!
 * 
 * Common banks are already built into Code.gs:
 * - HDFC Bank (Credit Card, UPI)
 * - Axis Bank (Credit Card)
 * - And more...
 * 
 * ONLY edit this file if:
 * 1. Your bank is NOT already supported
 * 2. You want to customize existing bank patterns
 * 
 * @project TransacFlow
 * @repository https://github.com/alpha-gamma/transacflow
 */

/**
 * Define your custom bank patterns here
 * Leave empty [] if you don't need custom patterns
 */
function getBankPatterns() {
  return [
    
    // ============================================
    // ADD YOUR CUSTOM BANKS HERE
    // ============================================
    
    // Example pattern - uncomment and customize:
    /*
    {
      // Display name in "Source" column
      name: 'My Bank Credit Card',
      
      // Sender email (use \\. for dots)
      senderPattern: 'alerts@mybank\\.com',
      
      // Subject line keywords (use | for OR)
      subjectPattern: 'transaction alert|payment successful',
      
      // Body text to uniquely identify (optional but recommended)
      bodyPattern: 'credit card ending \\d{4}',
      
      // Extract amount (capture number in parentheses)
      amountPattern: 'Rs\\.?\\s*([\\d,]+\\.?\\d*)',
      
      // Extract card/account number
      accountPattern: 'card ending\\s+(\\d{4})',
      
      // Extract merchant name
      merchantPattern: 'at\\s+([A-Za-z0-9\\s]+?)\\s+on',
      
      // Extract date & time
      datePattern: 'on\\s+(\\d{2}[/-]\\d{2}[/-]\\d{4}\\s+\\d{2}:\\d{2})',
      
      // Date format (DD-MM-YYYY, DD-MMM-YYYY, or DD-MM-YY)
      dateFormat: 'DD-MM-YYYY',
    },
    */
    
  ];
}

/**
 * NEED HELP?
 * ==========
 * 
 * Don't want to write regex patterns?
 * 
 * Option 1: Request Support
 * - Open a Feature Request on GitHub
 * - Attach 2-3 sample transaction emails (remove sensitive data)
 * - We'll create the pattern for you!
 * 
 * Option 2: Use Sample Email Tool (Coming Soon)
 * - Paste your email
 * - Auto-generate pattern
 * - Copy & use!
 * 
 * GitHub: https://github.com/alpha-gamma/transacflow
 */
