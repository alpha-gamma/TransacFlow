# TransacFlow FAQ

Quick answers to common questions.

---

## General

**Q: What is TransacFlow?**  
A: Automatically logs bank transaction emails from Gmail to Google Sheets.

**Q: How much does it cost?**  
A: $0. Completely free forever.

**Q: Is my data safe?**  
A: Yes. Everything runs in YOUR Google account. No external servers.

**Q: What banks work out-of-the-box?**  
A: HDFC, Axis, ICICI, SBI, IndusInd, OneCard, Paytm, Google Pay, PhonePe.

---

## Setup

**Q: How long to set up?**  
A: 5 minutes. Copy 2 files, update Sheet ID, run setup.

**Q: Do I need coding skills?**  
A: No. Just copy-paste and change one line (Sheet ID).

**Q: What permissions needed?**  
A: Read Gmail + Read/Write Google Sheets. Standard permissions.

**Q: Can I undo permissions?**  
A: Yes. Google Account → Security → Third-party apps → Remove access.

---

## Usage

**Q: How often does it run?**  
A: Every 10 minutes automatically.

**Q: Does it process old emails?**  
A: Yes. Last 90 days by default (configurable in Config.gs).

**Q: What about duplicates?**  
A: Automatically prevented. Each email logs once only.

**Q: Can I run it manually?**  
A: Yes. Run `processTransactionEmails()` anytime.

**Q: Will it mark emails as read?**  
A: Yes by default. Set `MARK_EMAILS_AS_READ = false` to keep them unread.

---

## Customization

**Q: My bank isn't listed. What do I do?**  
A: Add it in 5 minutes. See [CUSTOMIZATION.md](CUSTOMIZATION.md).

**Q: Can I change currency?**  
A: Yes. Edit `CURRENCY_SYMBOL` and `CURRENCY_CODE` in Config.gs.

**Q: How do I nickname my cards?**  
A: TransacFlow creates "Account Nicknames" sheet. Edit "Custom Nickname" column - all transactions update automatically!

**Q: Can I change the columns?**  
A: Yes. Edit `SHEET_HEADERS` in Config.gs (not recommended for v1.0).

**Q: Can I filter emails better?**  
A: Yes. Adjust `EMAIL_SEARCH_DAYS` or switch to `MANUAL` search mode.

---

## Troubleshooting

**Q: "No emails found"**  
A: 
- Increase `EMAIL_SEARCH_DAYS` in Config.gs
- Run `debug_EmailSearch()` to see what exists
- Check if you have transaction emails in Gmail

**Q: "Could not parse transaction"**  
A:
- Run `debug_ShowRawEmail()` to see email content
- Your bank might need a custom pattern
- See [CUSTOMIZATION.md](CUSTOMIZATION.md)

**Q: "SHEET_ID not configured"**  
A: Update line 25 in Config.gs with your Sheet ID.

**Q: Transactions missing date/merchant/amount**  
A:
- Set `LOG_LEVEL = 'DEBUG'` in Config.gs
- Run `test_SingleEmail()` to see what's extracted
- Adjust bank pattern if needed

**Q: Automation stopped working**  
A:
- Check Triggers panel in Apps Script (⏰ icon)
- Re-run `setupAutomation()` if trigger missing
- Check Executions panel for errors

---

## Performance

**Q: How many emails can it process?**  
A: 50 per run (every 10 min) = ~7,200/day.

**Q: Google quota limits?**  
A:
- Gmail: 20,000 emails/day
- Execution: 6 minutes per run
- More than enough for personal use

**Q: Will it slow down my Gmail?**  
A: No. Minimal API calls, efficient searching.

---

## Privacy & Security

**Q: Who can see my data?**  
A: Only you. Everything stays in your Google account.

**Q: Does data leave Google?**  
A: No. Never. All processing happens in Google Apps Script.

**Q: Is the code open source?**  
A: Yes. MIT License. Inspect every line on GitHub.

**Q: Can I trust it?**  
A: Script runs in YOUR account with YOUR permissions. You control everything.

---

## Advanced

**Q: Can I add custom logic?**  
A: Yes. Code.gs is organized with comments. Modify as needed.

**Q: Can I export data elsewhere?**  
A: Yes. Your sheet can sync to Excel, database, etc. via Sheets API.

**Q: Can I run it for multiple accounts?**  
A: Create separate script projects for each Google account.

**Q: Can I process PDFs or attachments?**  
A: Not yet. v1.0 focuses on email text only.

---

## Contributing

**Q: How can I help?**  
A:
- Star the repo ⭐
- Add your bank pattern
- Report bugs
- Share feedback

**Q: How do I submit my bank pattern?**  
A: Fork repo → Add to BankPatterns.gs → Submit PR. See [CONTRIBUTING.md](../CONTRIBUTING.md).

---

## Still Have Questions?

- 📖 Read: [SETUP.md](SETUP.md) | [CUSTOMIZATION.md](CUSTOMIZATION.md)
- 🐛 Report bug: [GitHub Issues](https://github.com/alpha-gamma/transacflow/issues)
- 💬 Ask: [GitHub Discussions](https://github.com/alpha-gamma/transacflow/discussions)
