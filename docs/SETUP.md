# TransacFlow Setup Guide

Get up and running in 5 minutes.

---

## Step 1: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet (name it "Transactions" or anything)
3. Copy **Sheet ID** from URL:
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
   ```

---

## Step 2: Create Apps Script Project

1. Go to [script.google.com](https://script.google.com)
2. Click **New project**
3. Rename to "Transaction Automation"

---

## Step 3: Add Code Files

### File 1: Config.gs (Required ⚠️)
1. Click **+ → Script**
2. Name it `Config`
3. Copy code from [GitHub/Config.gs](https://github.com/alpha-gamma/transacflow/blob/main/Config.gs)
4. Paste and Save

### File 2: Code.gs (Required ⚠️)
1. Click existing `Code.gs` file
2. Delete default content
3. Copy code from [GitHub/Code.gs](https://github.com/alpha-gamma/transacflow/blob/main/Code.gs)
4. Paste and Save (Ctrl/Cmd + S)

### File 3: BankPatterns.gs (Optional)
- **Skip this** if using HDFC, Axis, ICICI, SBI, or other built-in banks
- Only needed for custom/unlisted banks
- See [CUSTOMIZATION.md](CUSTOMIZATION.md) if needed

---

## Step 4: Configure Sheet ID

1. Open `Config.gs` in Apps Script
2. Line 25: Update `SHEET_ID`:
   ```javascript
   const SHEET_ID = 'paste_your_sheet_id_here';
   ```
3. Save (Ctrl/Cmd + S)

---

## Step 5: Run Setup

1. In Apps Script editor, select function dropdown
2. Choose `setupAutomation`
3. Click **Run** (▶️ button)
4. **Grant permissions:**
   - Click "Review permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to Transaction Automation (unsafe)"
   - Click "Allow"

5. Check logs (View → Logs) - should see "Setup Complete!"

---

## Step 6: Test It

### Test parsing:
```
Function: test_SingleEmail
```
- Should show transaction data in logs
- If no data, check EMAIL_SEARCH_DAYS or add more days

### Test sheet writing:
```
Function: test_WriteToSheet
```
- Should add one row to your Google Sheet
- Check sheet for new transaction

---

## Done! ✅

Your automation is now active and runs every 10 minutes.

**What happens next:**
- Trigger runs automatically every 10 min
- Checks last 90 days of emails (configurable)
- Adds new transactions to sheet
- Never logs duplicates

---

## Verify Setup

**Check in Apps Script:**
- Go to "Triggers" (⏰ icon on left)
- Should see: `processTransactionEmails` running every 10 minutes

**Check in Google Sheet:**
- Should have headers: Date, Time, Amount, Account, etc.
- May have "Account Nicknames" tab (auto-created)

---

## Troubleshooting

**"SHEET_ID not configured"**
→ Update `SHEET_ID` in Config.gs (Step 4)

**"Cannot access sheet"**
→ Check Sheet ID is correct
→ Make sure script and sheet are in same Google account

**"No emails found"**
→ Increase `EMAIL_SEARCH_DAYS` in Config.gs
→ Run `debug_EmailSearch()` to see what emails exist

**"Could not parse transaction"**
→ Your bank might need custom pattern
→ See [CUSTOMIZATION.md](CUSTOMIZATION.md)

**"Permission denied"**
→ Re-run `setupAutomation()` and grant all permissions

---

## Next Steps

- **Customize account names:** Edit "Account Nicknames" sheet in your Google Sheet
- **Add your bank:** See [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Adjust settings:** Edit `Config.gs` (currency, search days, etc.)
- **Track expenses:** Use your sheet for budgeting and analysis!

---

## Need Help?

- **FAQ:** [FAQ.md](FAQ.md)
- **Issues:** [GitHub Issues](https://github.com/alpha-gamma/transacflow/issues)
- **Discussions:** [GitHub Discussions](https://github.com/alpha-gamma/transacflow/discussions)
