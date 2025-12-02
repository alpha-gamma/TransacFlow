# TransacFlow 💸📊

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/Google%20Apps%20Script-JavaScript-yellow.svg)

> **Automatically log your bank transactions from Gmail to Google Sheets**

Stop manual expense tracking. TransacFlow reads transaction emails and logs them automatically. Free, private, and runs in your Google account.

---

## ✨ Why TransacFlow?

- ✅ **100% Free** - No subscriptions or hidden costs
- ✅ **Privacy-First** - Data never leaves your Google account
- ✅ **5-Minute Setup** - Just 2 files to copy
- ✅ **Smart Parsing** - Extracts amount, merchant, card/account, date
- ✅ **Multi-Bank** - HDFC, Axis, ICICI, SBI built-in
- ✅ **Never Duplicates** - Logs each transaction once
- ✅ **Auto-Runs** - Checks every 10 minutes
- ✅ **Analytics Dashboard** - Instant insights with charts & trends
- ✅ **Auto-Categorization** - Smart merchant categorization
- ✅ **Budget Tracking** - Set & monitor spending goals

---

## 🚀 Quick Setup (5 Minutes)

### 1. Create Google Sheet
- Go to [sheets.google.com](https://sheets.google.com) → New spreadsheet
- Name it "My Transactions" (or anything you like)

### 2. Open Script Editor
- In your sheet: **Extensions → Apps Script**
- A new tab opens with the script editor

### 3. Add Code Files

**File 1: Rename Code.gs → Config**
- Click on "Code.gs" in left sidebar
- Click the 3 dots (⋮) → Rename → Name it `Config`
- Delete all content and paste `Config.gs` from repository
- **Update `SHEET_ID`**: Replace `'YOUR_SHEET_ID_HERE'` with your Sheet ID
  - Find it in your sheet URL: `docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

**File 2: Create Code.gs**
- Click **+ → Script** → Name it `Code`
- Paste `Code.gs` from repository
- Save (Ctrl/Cmd + S)

### 4. Run Setup
- Select `setupAutomation` from function dropdown
- Click **Run** (▶️)
- Grant permissions when asked (click "Advanced" → "Go to project" → "Allow")

### 5. Refresh Your Sheet
- Go back to your Google Sheet
- Refresh the page (F5)
- You'll see **📊 TransacFlow** menu in the menu bar!

Done! ✨ Automation runs every 10 minutes. Use the TransacFlow menu to refresh dashboard or process emails manually.

---

## 📊 What You Get

Your sheet automatically fills with:

| Date | Time | Amount (₹) | Account/Card | Account Name | Merchant | Category | Source |
|------|------|-----------|--------------|--------------|----------|----------|--------|
| 01-Dec-2025 | 14:30 | 1,234.56 | XX4523 | HDFC Card | AMAZON | Shopping | HDFC Credit Card |
| 01-Dec-2025 | 18:22 | 450.00 | XX3085 | Salary Account | SWIGGY | Food & Dining | HDFC UPI |

---

## 🏦 Supported Banks

**Built-in support:**

- HDFC Bank (Credit, Debit, UPI)
- Axis Bank (Credit Card)
- ICICI Bank
- SBI
- IndusInd Bank
- OneCard
- Paytm, Google Pay, PhonePe

**Your bank not listed?** Add it in 5 minutes - see [docs/CUSTOMIZATION.md](docs/CUSTOMIZATION.md)

---

## ⚙️ Configuration

All settings in `Config.gs` (access via Extensions → Apps Script):

```javascript
const SHEET_ID = 'YOUR_SHEET_ID_HERE';   // ⚠️ Required (one-time setup)
const EMAIL_SEARCH_DAYS = 90;             // How far back to search
const CURRENCY_SYMBOL = '₹';              // ₹, $, €, £
const LOG_LEVEL = 'INFO';                 // INFO, DEBUG, ERROR
```

**Account Nicknames:**  
TransacFlow auto-creates an "Account Nicknames" sheet. Edit the "Custom Nickname" column to rename your cards/accounts - all transactions update automatically!

**Custom Menu:**  
After setup, access TransacFlow functions from the **📊 TransacFlow** menu in your sheet.

---

## 📊 Analytics Dashboard (NEW!)

Get powerful insights from your spending data:

```javascript
Run → updateDashboard()  // Creates comprehensive analytics dashboard
```

**Dashboard includes:**

- 💰 **Monthly Summary** - Total spent, average transaction, highest transaction
- 🏆 **Top 5 Merchants** - See where you spend the most
- 💳 **Account-wise Spending** - Compare usage across cards/UPIs
- 📊 **Category Breakdown** - Auto-categorized spending (Food, Transport, Shopping, etc.)
- 📈 **6-Month Trends** - Visual spending patterns with sparklines
- 🎯 **Budget vs Actual** - Set budgets and track your progress

**Auto-Categorization:**  
Transactions are intelligently categorized based on merchant names (e.g., Swiggy → Food & Dining, Uber → Transportation). Run `addCategoriesToTransactions()` to categorize existing transactions.

---

## 🔧 Available Functions

Access these from **📊 TransacFlow** menu in your sheet:

- **🔄 Refresh Dashboard** - Update dashboard for selected month
- **📧 Process New Emails** - Manually process transaction emails
- **📈 Update Full Dashboard** - Regenerate complete analytics

**Advanced (via Extensions → Apps Script):**

- `setupAutomation()` - Initial setup (run once)
- `test_SingleEmail()` - Test email parsing
- `test_WriteToSheet()` - Test sheet writing
- `refreshAllNicknames()` - Update all transaction nicknames
- `addCategoriesToTransactions()` - Add categories to existing transactions
- `debug_EmailSearch()` - Diagnose email search issues
- `debug_ShowRawEmail()` - View raw email content

---

## 📖 Documentation

- **[Setup Guide](docs/SETUP.md)** - Detailed installation steps
- **[Customization](docs/CUSTOMIZATION.md)** - Add your bank
- **[FAQ](docs/FAQ.md)** - Common questions


---

## 🆚 vs Other Solutions

| Feature | TransacFlow | Zapier | Manual |
|---------|-------------|--------|--------|
| **Cost** | FREE | $20-30/mo | Free |
| **Privacy** | Your account | 3rd party | Secure |
| **Setup** | 5 minutes | 15-20 min | N/A |
| **Automation** | Every 10 min | Limited runs | Never |
| **Analytics** | Built-in dashboard | Limited | None |
| **Customization** | Unlimited | Limited | N/A |

---

## 🤝 Contributing

We welcome contributions!

**Add Your Bank:**

- Fork repo → Add pattern in `BankPatterns.gs` → Submit PR

**Report Issues:**

- [GitHub Issues](https://github.com/yourusername/transacflow/issues)

**Request Features:**

- [GitHub Discussions](https://github.com/yourusername/transacflow/discussions)

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.


---

## ⭐ Show Support

**Free ways to help:**

- ⭐ Star this repo
- 🐛 Report bugs
- 📢 Share with friends
- 🤝 Add your bank pattern

> 💡 TransacFlow will always be free and open-source. Donations fuel faster updates and new features!

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file.

---

## 🔒 Privacy

- ✅ Runs entirely in YOUR Google account
- ✅ No external servers or third-party access
- ✅ No tracking or analytics
- ✅ You own all code and data


---

## 📊 Stats

![Setup Time](https://img.shields.io/badge/setup-5%20minutes-green.svg)
![Files](https://img.shields.io/badge/files-2-blue.svg)
![Banks](https://img.shields.io/badge/banks-8%2B-orange.svg)
![Cost](https://img.shields.io/badge/cost-FREE-brightgreen.svg)

---

<div align="center">

**💸📊 TransacFlow**

**Flow your transactions from Gmail to Sheets**

[⭐ Star](https://github.com/yourusername/transacflow) • [📖 Docs](docs/) • [🐛 Issues](https://github.com/yourusername/transacflow/issues) • [💬 Discuss](https://github.com/yourusername/transacflow/discussions)

**Happy Automating! 🚀**

</div>
