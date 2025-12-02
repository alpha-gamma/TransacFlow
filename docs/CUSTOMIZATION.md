# Adding Your Bank to TransacFlow

Add support for any bank or UPI provider in 5 minutes.

---

## ⚠️ Check First

**Is your bank already supported?**

Built-in banks (no setup needed):
- HDFC Bank (Credit, Debit, UPI)
- Axis Bank (Credit Card)
- ICICI Bank
- IndusInd Bank
- OneCard

**If your bank is listed above, you're done!** No customization needed.

---

## Option 1: Request Support (Easiest)

**Don't want to code?** Let us add it:

1. Open [GitHub Issue](https://github.com/alpha-gamma/transacflow/issues/new)
2. Title: "Add support for [Bank Name]"
3. Include:
   - Bank name
   - 2-3 sample emails (remove sensitive info: amounts, full card numbers)
   - Sender email address

We'll add the pattern in next release! 🎉

---

## Option 2: Add It Yourself (5 Minutes)

### Step 1: Find a Sample Email

Open a transaction email from your bank and note:

```
From: alerts@yourbank.com
Subject: Transaction Alert
Body:
  Rs. 1,234.56 debited from Card XX5678
  at AMAZON on 01-12-2025 14:30
```

Identify:
- ✅ Sender email
- ✅ How amount appears ("Rs. 1,234" or "INR 1234")
- ✅ Where merchant is ("at AMAZON")
- ✅ Card/Account format ("XX5678" or "account 1234")
- ✅ Date format ("01-12-2025" or "01-Dec-2025")

---

### Step 2: Create Pattern

Create/edit `BankPatterns.gs` in Apps Script:

```javascript
function getBankPatterns() {
  return [
    {
      name: 'Your Bank Name',
      senderPattern: 'alerts@yourbank\\.com',
      subjectPattern: 'Transaction|Alert',
      bodyPattern: 'debited from Card',
      
      amountPattern: 'Rs\\.?\\s*([\\d,]+\\.?\\d*)',
      accountPattern: 'Card\\s+XX(\\d{4})',
      merchantPattern: 'at\\s+([A-Za-z0-9\\s&]+)',
      datePattern: '(\\d{2}-\\d{2}-\\d{4}\\s+\\d{2}:\\d{2})',
      dateFormat: 'DD-MM-YYYY',
    }
  ];
}
```

**Key points:**
- Use `()` parentheses to capture the value
- Escape dots: `.` becomes `\\.`
- `\\d` = digit, `\\s` = space, `+` = one or more

---

### Step 3: Test

In Apps Script:

```javascript
Run → test_SingleEmail()    // See extracted data
Run → test_WriteToSheet()   // Test writing to sheet
```

Check logs for extracted values. Adjust patterns until correct.

---

### Step 4: Debug (If Needed)

**Email not found?**
```javascript
Run → debug_EmailSearch()   // See what emails match
```

**Data not extracting?**
```javascript
Run → debug_ShowRawEmail()  // See raw email content
```

Set `LOG_LEVEL = 'DEBUG'` in Config.gs for detailed logs.

---

## Pattern Fields Explained

| Field | What It Does | Example |
|-------|--------------|---------|
| `name` | Bank name in sheet | `'Axis Bank Credit Card'` |
| `senderPattern` | Match sender email | `'cards@axisbank\\.com'` |
| `subjectPattern` | Match subject | `'Transaction.*Alert'` |
| `bodyPattern` | Match body text | `'debited from Card'` |
| `amountPattern` | Extract amount | `'Rs\\.\\s*([\\d,]+)'` |
| `accountPattern` | Extract card/account | `'Card (XX\\d{4})'` |
| `merchantPattern` | Extract merchant | `'at\\s+([A-Za-z\\s]+)'` |
| `datePattern` | Extract date/time | `'(\\d{2}-\\d{2}-\\d{4})'` |
| `dateFormat` | Date format | `'DD-MM-YYYY'` or `'DD-MMM-YYYY'` |

---

## Real Example

Axis Bank Credit Card pattern:

```javascript
{
  name: 'Axis Bank Credit Card',
  senderPattern: 'alerts@axisbank\\.com',
  subjectPattern: 'spent on credit card|Transaction alert',
  bodyPattern: 'Axis Bank Credit Card',
  
  amountPattern: '(?:INR|Rs\\.?)\\s*([\\d,]+\\.?\\d*)',
  accountPattern: 'card\\s+(?:no\\.\\s*)?(XX\\d{4})',
  merchantPattern: '(?:at|Merchant Name:)\\s+([A-Za-z0-9][^\\r\\n]+?)\\s+(?:on|is)',
  datePattern: '(\\d{2}-\\d{2}-\\d{4})[,\\s]+(\\d{2}:\\d{2}(?::\\d{2})?)',
  dateFormat: 'DD-MM-YYYY',
}
```

**See built-in patterns in Code.gs (lines 303-437) for more examples.**

---

## Common Patterns

```javascript
// Numbers with commas and optional decimals
([\\d,]+\\.?\\d*)

// Card number XX1234
(XX\\d{4})

// UPI ID xyz@bank
([\\w.]+@\\w+)

// Date DD-MM-YYYY
(\\d{2}-\\d{2}-\\d{4})

// Time HH:MM:SS
(\\d{2}:\\d{2}(?::\\d{2})?)

// Merchant name (alphanumeric + spaces)
([A-Za-z0-9][A-Za-z0-9\\s&\\.\\-]+)
```

**Test regex:** Use [regex101.com](https://regex101.com) (select JavaScript flavor)

---

## Troubleshooting

**"No matching pattern found"**
→ Check `senderPattern` and `subjectPattern` match your email
→ Add `bodyPattern` for precise matching

**"Transaction missing amount"**
→ Check `amountPattern` captures the number correctly
→ Use `debug_ShowRawEmail()` to see raw text

**"Could not parse date"**
→ Check `datePattern` matches your date format
→ Set correct `dateFormat` (DD-MM-YYYY, DD-MMM-YYYY, etc.)

**"Merchant shows as N/A"**
→ Check `merchantPattern` captures merchant name
→ Merchant might be on next line (include `\\r?\\n` in pattern)

---

## Share Your Pattern

**Help everyone!** Once your pattern works:

### Via Pull Request:
1. Test with 3-5 emails
2. Fork the repo
3. Add pattern to Code.gs (in `BankPatternManager.getDefaultPatterns()`)
4. Submit PR with bank name + sanitized sample email

### Via GitHub Issue:
1. [Open Feature Request](https://github.com/alpha-gamma/transacflow/issues/new)
2. Share: Bank name, sender email, sample emails (sanitized)
3. We'll add it to default patterns!

**Your pattern benefits thousands of users!** 🙌

---

## Need Help?

- 📖 Check built-in patterns in Code.gs for examples
- 🐛 [Open Issue](https://github.com/alpha-gamma/transacflow/issues)
- 💬 [Ask in Discussions](https://github.com/alpha-gamma/transacflow/discussions)
- ⚡ Tag issue with "help wanted" for community support
