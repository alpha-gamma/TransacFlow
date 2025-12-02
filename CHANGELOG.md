# Changelog

All notable changes to TransacFlow.

---

## [1.2.0] - 2025-12-02

### 📊 Analytics Dashboard Release

**Major Feature:** Comprehensive analytics dashboard with spending insights!

### ✨ New Features

**Analytics Dashboard**
- ✅ **Monthly Summary** - Total spent, transaction count, averages, highest transaction
- ✅ **Top 5 Merchants** - Identify where you spend the most money
- ✅ **Account-wise Spending** - Compare usage across all cards/UPI accounts
- ✅ **Category Breakdown** - Auto-categorized spending analysis
- ✅ **6-Month Trends** - Visual spending patterns with sparkline charts
- ✅ **Budget vs Actual** - Set monthly budgets and track progress with color-coded status
- ✅ Beautiful formatting with conditional formatting and visual indicators

**Smart Categorization**
- ✅ **Auto-categorization** engine with 10+ categories
- ✅ Categories: Food & Dining, Transportation, Shopping, Groceries, Entertainment, Bills & Utilities, Health & Fitness, Education, Insurance, Investments, Transfer, Other
- ✅ 100+ merchant keywords for accurate classification
- ✅ `CategoryMapper` class with intelligent pattern matching
- ✅ `addCategoriesToTransactions()` function to categorize existing data

**New Functions**
- ✅ `updateDashboard()` - Creates/refreshes comprehensive analytics dashboard
- ✅ `addCategoriesToTransactions()` - Adds category column and categorizes all transactions
- ✅ Auto-creates hidden "Category Data" sheet for data processing

**Configuration**
- ✅ `MONTHLY_BUDGETS` config in Config.gs for setting budget targets
- ✅ `AUTO_UPDATE_DASHBOARD` option (optional auto-update after processing)
- ✅ Customizable budget thresholds per category

### 🎨 Visual Enhancements
- ✅ Color-coded sections (green for categories, blue for headers)
- ✅ Conditional formatting for budget status (green = under, red = over)
- ✅ Sparkline charts for trend visualization
- ✅ Professional dashboard layout with merged cells and borders
- ✅ Auto-resizing columns for optimal viewing

### 📈 Technical Improvements
- ✅ `DashboardManager` class for modular dashboard creation
- ✅ `CategoryMapper` class for intelligent categorization
- ✅ Formula-based dynamic updates (no manual refresh needed for most metrics)
- ✅ Efficient data processing with hidden sheets
- ✅ Toast notifications for user feedback

### 📖 Documentation Updates
- ✅ README updated with Analytics Dashboard section
- ✅ New function documentation in code headers
- ✅ Updated version to 1.2.0
- ✅ Enhanced feature comparison table

---

## [1.0.0] - 2025-12-01

### 🎉 Initial Release

**TransacFlow** - Automatically log your bank transactions from Gmail to Google Sheets.

### ✨ Core Features

**Automation**
- ✅ Runs every 10 minutes automatically
- ✅ Scans Gmail for transaction alert emails
- ✅ Extracts transaction details (date, amount, merchant, account)
- ✅ Logs to Google Sheets automatically
- ✅ Prevents duplicates using email IDs

**Multi-Bank Support**
- ✅ Built-in patterns for 8+ banks/UPI providers
- ✅ HDFC Bank (Credit Card, Debit Card, UPI - Debit Account, UPI - RuPay Credit Card)
- ✅ Axis Bank (Credit Card)
- ✅ ICICI Bank (Credit Card)
- ✅ SBI (Debit Card)
- ✅ IndusInd Bank (Credit Card)
- ✅ OneCard (Credit Card)
- ✅ Paytm, Google Pay, PhonePe (UPI)

**Smart Features**
- ✅ **Account Nicknames**: Auto-creates "Account Nicknames" sheet
- ✅ Auto-discovers new accounts as emails are processed
- ✅ Auto-generates smart names like "Axis Bank Credit Card (8024)"
- ✅ Edit nicknames in sheet - all transactions update automatically!
- ✅ `onEdit` trigger propagates nickname changes instantly

**Customization**
- ✅ Configurable currency (₹, $, €, £, etc.)
- ✅ Configurable search period (7-365 days)
- ✅ Configurable log levels (DEBUG, INFO, ERROR)
- ✅ Easy to add custom banks (5-minute setup)
- ✅ Dynamic search query generation

**Developer-Friendly**
- ✅ Clean, modular code architecture
- ✅ Comprehensive logging and debugging tools
- ✅ Built-in test functions
- ✅ Detailed inline documentation

### 📦 What's Included

**Files:**
- `Config.gs` - User configuration (Sheet ID, currency, settings)
- `Code.gs` - Main automation script (1600+ lines, includes utilities & services)
- `BankPatterns.gs` - Optional file for custom banks

**Functions:**
- `setupAutomation()` - Initial setup & trigger creation
- `processTransactionEmails()` - Main automation (auto-runs every 10 min)
- `test_SingleEmail()` - Test email parsing
- `test_WriteToSheet()` - Test sheet writing
- `debug_EmailSearch()` - Diagnose email search
- `debug_SearchQuery()` - View active search query
- `debug_ShowRawEmail()` - Show raw email content
- `refreshAllNicknames()` - Batch update all account nicknames

**Documentation:**
- README.md - Project overview & quick start
- SETUP.md - Step-by-step installation guide
- CUSTOMIZATION.md - How to add your bank
- FAQ.md - Common questions & answers
- CONTRIBUTING.md - Contribution guidelines
- LICENSE - MIT License

### 🔧 Technical Details

**Architecture:**
- Service classes: EmailService, SheetService, TransactionParser, QueryBuilder
- Utility classes: Logger, TextUtils, DateUtils
- Manager classes: NicknameManager, BankPatternManager, ServiceFactory, TriggerManager
- Clean separation of concerns
- Dependency injection pattern

**Key Capabilities:**
- Regex-based email parsing
- Multi-format date parsing (DD-MM-YYYY, DD-MMM-YYYY, MMM DD YYYY, etc.)
- 12-hour and 24-hour time support
- Currency-aware amount parsing
- HTML email support (strips tags, decodes entities)
- Body pattern matching for precise bank identification
- Chronological transaction ordering

**Google APIs Used:**
- GmailApp (email search & reading)
- SpreadsheetApp (sheet read/write)
- ScriptApp (trigger management)
- Utilities (date formatting, etc.)

### 🔒 Privacy & Security

- ✅ 100% free and open source
- ✅ Runs entirely in user's Google account
- ✅ No external servers or third-party access
- ✅ No data collection or tracking
- ✅ MIT License

### 📊 Stats

- **Setup Time**: 5 minutes
- **Files**: 2 (3 if custom banks needed)
- **Lines of Code**: ~1,800
- **Built-in Banks**: 8+
- **Documentation Files**: 5

---

## Future Roadmap

Potential enhancements for future versions:

- [ ] More international banks
- [ ] Multi-currency improvements
- [ ] ML-based transaction categorization
- [ ] Monthly email reports
- [ ] Visualization dashboard
- [ ] PDF statement parsing
- [ ] Mobile companion app

---

[1.0.0]: https://github.com/yourusername/transacflow/releases/tag/v1.0.0
