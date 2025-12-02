# TransacFlow Setup Guide

Get up and running in 5 minutes.

---

## Step 1: Create Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet
3. Name it "My Transactions" (or anything you like)
4. Keep this tab open - you'll need it!

---

## Step 2: Open Script Editor

1. In your Google Sheet, go to **Extensions → Apps Script**
2. A new tab opens with the Apps Script editor
3. You'll see a file called `Code.gs` with some default code

---

## Step 3: Add TransacFlow Code

### File 1: Create Config.gs (Required ⚠️)

1. In the script editor, click **+ → Script**
2. Name it `Config`
3. Delete any default content
4. Copy code from [GitHub/Config.gs](https://github.com/alpha-gamma/transacflow/blob/main/Config.gs)
5. Paste and Save (Ctrl/Cmd + S)

### File 2: Update Code.gs (Required ⚠️)

1. Click on `Code.gs` in the left sidebar (the default file)
2. Delete all default content
3. Copy code from [GitHub/Code.gs](https://github.com/alpha-gamma/transacflow/blob/main/Code.gs)
4. Paste and Save (Ctrl/Cmd + S)

### File 3: BankPatterns.gs (Optional)

- **Skip this** if using built-in banks (HDFC, Axis, ICICI, SBI, IndusInd, OneCard)
- Only needed for custom/unlisted banks
- See [CUSTOMIZATION.md](CUSTOMIZATION.md) if needed

---

## Step 4: Get Your Sheet ID

1. Go back to your Google Sheet tab
2. Look at the URL in your browser:
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit
   ```
3. Copy the **SHEET_ID** part (between `/d/` and `/edit`)

Example:
```
URL: https://docs.google.com/spreadsheets/d/1abc123XYZ456def/edit
Sheet ID: 1abc123XYZ456def
```

---

## Step 5: Configure Sheet ID

1. Go back to Apps Script editor
2. Click on `Config.gs` in the left sidebar
3. Find this line (around line 16):
   ```javascript
   const SHEET_ID = 'YOUR_SHEET_ID_HERE';
   ```
4. Replace `YOUR_SHEET_ID_HERE` with your actual Sheet ID:
   ```javascript
   const SHEET_ID = '1abc123XYZ456def';
   ```
5. Save (Ctrl/Cmd + S)

---

## Step 6: Run Setup

1. In Apps Script editor, find the function dropdown at the top
2. Select **`setupAutomation`** from the dropdown
3. Click the **Run** button (▶️)
4. **Grant permissions** when prompted:
   - Click "Review permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to [Untitled project] (unsafe)"
   - Click "Allow"
   
   *(Don't worry - this is your own script running in your account)*

5. Check logs: **View → Executions** - should see "Setup Complete!"

---

## Step 7: Verify Installation

### Check Custom Menu

1. Go back to your Google Sheet
2. **Refresh the page** (F5 or Ctrl/Cmd + R)
3. You should see **📊 TransacFlow** in the menu bar!

### Test the Setup

**Option 1: Wait for Auto-Processing (Recommended)**
- Automation runs every 10 minutes
- Check your sheet after 10-15 minutes for new transactions

**Option 2: Manual Processing**
- Click **📊 TransacFlow → Process New Emails**
- Wait a few seconds, check Transactions sheet

**Option 3: Test Parsing (Advanced)**
- Extensions → Apps Script
- Select `test_SingleEmail` from dropdown → Click Run (▶️)
- Check logs (View → Executions) for parsed transaction data

If transactions appear in your sheet, you're all set! ✅

---

## Step 8: Process Your Transactions

**Automatic (Recommended):**
- Automation runs every 10 minutes automatically
- Checks last 90 days of emails
- Adds new transactions to sheet

**Manual:**
- Click **📊 TransacFlow → Process New Emails** from your sheet
- Or run `processTransactionEmails()` from Apps Script editor

---

## Done! ✅

Your automation is now active!

**What happens next:**
- Trigger runs automatically every 10 min
- Checks Gmail for transaction emails
- Extracts amount, merchant, date, card/account
- Adds to "Transactions" sheet (auto-created)
- Creates "Account Nicknames" sheet (auto-created)
- Never logs duplicates (uses email IDs)

---

## Verify Everything Works

### Check Triggers (Automation)

1. In Apps Script editor, click **Triggers** (⏰ icon on left sidebar)
2. You should see:
   - `processTransactionEmails` - Time-driven, every 10 minutes
   - `onEdit` - On edit (for nickname updates)
   - `onOpen` - On open (for custom menu)

### Check Your Sheet

1. Go to your Google Sheet
2. You should see new sheets:
   - **Transactions** - Your transaction data
   - **Account Nicknames** - Card/account customization
3. After first run (10 min max), you should see transactions appearing!

### Create Analytics Dashboard

1. In your sheet: **📊 TransacFlow → Update Full Dashboard**
2. Wait 10-15 seconds
3. New "Dashboard" sheet appears with:
   - Monthly summary
   - Top merchants
   - Category breakdown
   - Spending trends
   - Budget tracking

---

## Troubleshooting

### "Cannot access sheet"
→ Double-check your Sheet ID in Config.gs  
→ Make sure you copied the correct part of the URL  
→ Save Config.gs after editing

### "No emails found"
→ Increase `EMAIL_SEARCH_DAYS` in Config.gs (try 365 for testing)  
→ Run `debug_EmailSearch()` to see what emails exist  
→ Check if you have transaction emails in Gmail

### "Could not parse transaction"
→ Your bank might need a custom pattern  
→ Run `debug_ShowRawEmail()` to see email format  
→ See [CUSTOMIZATION.md](CUSTOMIZATION.md) to add your bank

### "TransacFlow menu not showing"
→ Refresh your Google Sheet (F5)  
→ Wait 30 seconds after refreshing  
→ Check if `onOpen` trigger exists in Apps Script → Triggers

### "Permission denied"
→ Re-run `setupAutomation()` and grant all permissions  
→ Make sure you click "Advanced" → "Go to project" → "Allow"

---

## Next Steps

### Customize Your Setup

- **Edit account names:** Go to "Account Nicknames" sheet, edit "Custom Nickname" column
- **Change currency:** Edit `CURRENCY_SYMBOL` in Config.gs (₹, $, €, £)
- **Adjust search period:** Edit `EMAIL_SEARCH_DAYS` in Config.gs
- **Add your bank:** See [CUSTOMIZATION.md](CUSTOMIZATION.md)

### Use Your Data

- **Monthly tracking:** Run dashboard update at month-end
- **Budget management:** Edit budget values in Dashboard sheet
- **Category editing:** Transactions auto-categorize, adjust as needed
- **Export data:** File → Download → Excel/CSV

---

## Need Help?

- **FAQ:** [FAQ.md](FAQ.md)
- **Customization:** [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Issues:** [GitHub Issues](https://github.com/alpha-gamma/transacflow/issues)
- **Discussions:** [GitHub Discussions](https://github.com/alpha-gamma/transacflow/discussions)

---

**Happy Automating! 🚀💸📊**
