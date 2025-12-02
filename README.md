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

---

## 🚀 Quick Setup (5 Minutes)

### 1. Create Google Sheet
- Go to [sheets.google.com](https://sheets.google.com) → New spreadsheet
- Copy the **Sheet ID** from URL: `docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`

### 2. Open Apps Script
- Go to [script.google.com](https://script.google.com) → New project
- Name it "Transaction Automation"

### 3. Add Code Files

Copy these 2 files:

**File 1: Config.gs**

- Click **+ → Script** → Name it `Config`
- Paste code from repository
- **Update `SHEET_ID`** with your Sheet ID

**File 2: Code.gs**

- Replace default `Code.gs` content
- Paste code from repository
- Save

### 4. Run Setup

```javascript
Run → setupAutomation
```

Grant permissions when asked.

### 5. Test

```javascript
Run → test_SingleEmail      // Test parsing
Run → test_WriteToSheet     // Test writing to sheet
```

Done! ✨ Automation runs every 10 minutes.

---

## 📊 What You Get

Your sheet automatically fills with:

| Date | Time | Amount (₹) | Account/Card | Account Name | Merchant | Source |
|------|------|-----------|--------------|--------------|----------|--------|
| 01-Dec-2025 | 14:30 | 1,234.56 | XX4523 | HDFC Card | AMAZON | HDFC Credit Card |
| 01-Dec-2025 | 18:22 | 450.00 | XX3085 | Salary Account | SWIGGY | HDFC UPI |

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

All settings in `Config.gs`:

```javascript
const SHEET_ID = 'YOUR_SHEET_ID_HERE';   // ⚠️ Required
const EMAIL_SEARCH_DAYS = 90;             // How far back to search
const CURRENCY_SYMBOL = '₹';              // ₹, $, €, £
const LOG_LEVEL = 'INFO';                 // INFO, DEBUG, ERROR
```

**Account Nicknames:**  
TransacFlow auto-creates an "Account Nicknames" sheet. Edit the "Custom Nickname" column to rename your cards/accounts - all transactions update automatically!

---

## 🔧 Available Functions

**Setup & Run:**

- `setupAutomation()` - Initial setup
- `processTransactionEmails()` - Manual run (also runs every 10 min)

**Testing:**

- `test_SingleEmail()` - Test email parsing
- `test_WriteToSheet()` - Test sheet writing

**Debugging:**

- `debug_EmailSearch()` - Check email search
- `debug_SearchQuery()` - View search query

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
| **Customization** | Unlimited | Limited | N/A |

---

## 🤝 Contributing

We welcome contributions!

**Add Your Bank:**

- Fork repo → Add pattern in `BankPatterns.gs` → Submit PR

**Report Issues:**

- [GitHub Issues](https://github.com/alpha-gamma/transacflow/issues)

**Request Features:**

- [GitHub Discussions](https://github.com/alpha-gamma/transacflow/discussions)

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

[⭐ Star](https://github.com/alpha-gamma/transacflow) • [📖 Docs](docs/) • [🐛 Issues](https://github.com/alpha-gamma/transacflow/issues) • [💬 Discuss](https://github.com/alpha-gamma/transacflow/discussions)

**Happy Automating! 🚀**

</div>
