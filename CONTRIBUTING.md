# Contributing to TransacFlow

Thank you for considering contributing to TransacFlow! 🎉

We're building a free, open-source tool to help people automatically track their finances from Gmail to Google Sheets.

---

## Table of Contents

- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Code Guidelines](#code-guidelines)
- [Submitting Changes](#submitting-changes)
- [Questions?](#questions)

---

## How Can I Contribute?

### 🏦 Adding Bank Patterns (Most Common!)

**This is the #1 way to help!** Add support for your bank so others can benefit too.

**Steps:**

1. Find a transaction email from your bank
2. Create/edit `BankPatterns.gs` with your pattern
3. Test with `test_SingleEmail()` and `test_WriteToSheet()`
4. Submit PR with bank name + sanitized sample email

**See:** [docs/CUSTOMIZATION.md](docs/CUSTOMIZATION.md) for detailed guide.

**Remember:** Remove sensitive data (amounts, full card numbers, names) before sharing!

---

### 🐛 Reporting Bugs

**Before reporting:**
- Check [existing issues](https://github.com/yourusername/transacflow/issues)
- Test with latest version
- Try `debug_EmailSearch()` and `debug_ShowRawEmail()`

**Bug report template:**

```markdown
**Bug Description**
Clear description of what's wrong.

**Steps to Reproduce**
1. Go to...
2. Run function...
3. See error...

**Expected Behavior**
What should happen?

**Actual Behavior**
What actually happened?

**Logs**
Paste relevant logs from Apps Script console.

**Environment**
- Google Account: Personal/Workspace
- Browser: Chrome/Firefox/Safari
- Bank: (if relevant)
```

---

### 💡 Suggesting Features

**Before suggesting:**
- Check [existing feature requests](https://github.com/yourusername/transacflow/issues?q=label%3Aenhancement)
- Consider if it fits the project scope (privacy-first, free, simple)

**Feature request template:**

```markdown
**Feature Description**
What feature do you want?

**Use Case**
Why do you need this?

**Proposed Solution**
How would you implement this? (optional)

**Alternatives**
Any other approaches? (optional)
```

---

### 📝 Improving Documentation

Found a typo? Documentation unclear? PRs welcome!

**Documentation files:**
- `README.md` - Project overview
- `docs/SETUP.md` - Installation guide
- `docs/FAQ.md` - Common questions
- `docs/CUSTOMIZATION.md` - Adding banks

---

### 💻 Code Contributions

See sections below for setup and guidelines.

---

## Development Setup

### Prerequisites

- Google Account
- Basic JavaScript knowledge
- Git installed
- Text editor (VS Code recommended)

---

### Local Setup

**1. Fork & Clone**

```bash
git clone https://github.com/yourusername/transacflow.git
cd transacflow
```

**2. Create Test Environment**

- Create a new Google Sheet
- Go to **Extensions → Apps Script**
- Create `Config.gs` and paste code
- Create `Code.gs` and paste code
- Update `SHEET_ID` in Config.gs

**3. Configure Test Setup**

- Update `SHEET_ID` in Config.gs with your test sheet ID
- Set `LOG_LEVEL = 'DEBUG'`
- Run `setupAutomation()`
- Refresh your sheet to see the TransacFlow menu

---

### Testing Your Changes

**Test Functions (in Apps Script editor):**

```javascript
// Initial setup
setupAutomation()

// Test email parsing
test_SingleEmail()

// Test sheet writing
test_WriteToSheet()

// Test full automation
processTransactionEmails()

// Debug functions
debug_EmailSearch()
debug_SearchQuery()
debug_ShowRawEmail()
```

**Verification:**
- ✅ Check Apps Script logs (View → Logs)
- ✅ Verify data in Google Sheet
- ✅ No errors in Executions panel
- ✅ Test with 3-5 different emails

---

## Code Guidelines

### File Structure

TransacFlow has a simple 2-3 file structure:

```
transacflow/
├── Config.gs          # User settings (edit this)
├── Code.gs            # Main script (all logic here)
└── BankPatterns.gs    # Optional - custom banks only
```

**Code.gs contains:**
- Utility classes (Logger, TextUtils, DateUtils)
- Service classes (EmailService, SheetService, TransactionParser, QueryBuilder)
- Manager classes (NicknameManager, BankPatternManager, etc.)
- Main functions
- Test/Debug functions

---

### Code Style

**General Rules:**

- Use 2 spaces for indentation
- Use `camelCase` for variables/functions
- Use `PascalCase` for classes
- Use `UPPER_CASE` for constants
- Use `const` and `let`, avoid `var`

**Good Example:**

```javascript
function parseTransaction(emailData) {
  const amount = extractAmount(emailData.body);
  const merchant = extractMerchant(emailData.body);
  
  return {
    amount: amount,
    merchant: merchant
  };
}
```

**Bad Example:**

```javascript
function Parse_Transaction(Email) {
  var Amount = ExtractAmount(Email.body);
  var Merchant = Extract_Merchant(Email.body);
  
  return { Amount: Amount, Merchant: Merchant };
}
```

---

### Bank Patterns

**Pattern Object Structure:**

```javascript
{
  name: 'Bank Name',
  senderPattern: 'alerts@bank\\.com',
  subjectPattern: 'Transaction|Alert',
  bodyPattern: 'specific text in body',
  
  amountPattern: 'Rs\\.\\s*([\\d,]+\\.?\\d*)',
  accountPattern: 'Card\\s+(XX\\d{4})',
  merchantPattern: 'at\\s+([A-Za-z0-9\\s]+)',
  datePattern: '(\\d{2}-\\d{2}-\\d{4})',
  dateFormat: 'DD-MM-YYYY',
}
```

**Key Points:**
- Use `()` parentheses to capture values
- Escape special chars: `.` becomes `\\.`
- Test regex at [regex101.com](https://regex101.com)
- Include `bodyPattern` for precise matching

---

### Comments & Documentation

**JSDoc for Functions:**

```javascript
/**
 * Parse transaction from email data
 * @param {Object} emailData - Email data object
 * @returns {Object|null} Transaction object or null
 */
function parseTransaction(emailData) {
  // Implementation
}
```

**Inline Comments:**

```javascript
// ✅ GOOD - Explain WHY
// Use DD-MM-YYYY format for Indian banks
const dateFormat = 'DD-MM-YYYY';

// ❌ BAD - Explain WHAT (code already does this)
// Set date format to DD-MM-YYYY
const dateFormat = 'DD-MM-YYYY';
```

---

### Error Handling

**Always use try-catch for risky operations:**

```javascript
// ✅ GOOD
try {
  const amount = parseFloat(amountStr);
  if (isNaN(amount)) {
    logger.warn('Invalid amount format');
    return null;
  }
  return amount;
} catch (error) {
  logger.error(`Amount parsing failed: ${error.message}`);
  return null;
}

// ❌ BAD
try {
  return parseFloat(amountStr);
} catch (e) {
  console.log('Error');
}
```

---

### Logging

**Use appropriate log levels:**

```javascript
logger.debug('Detailed info for debugging');    // Development only
logger.info('Normal operation status');         // General info
logger.warn('Unexpected but handled');          // Warnings
logger.error('Error occurred');                 // Errors
logger.success('Operation completed');          // Success messages
```

---

## Submitting Changes

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
feat: add support for ICICI Bank
fix: correct date parsing for DD-MMM-YYYY format
docs: update setup guide with troubleshooting
refactor: simplify amount extraction logic
test: add test cases for date parsing
```

**Format:**
```
<type>: <subject>

<optional body>

<optional footer>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `refactor` - Code refactoring
- `test` - Tests
- `chore` - Maintenance

**Examples:**

```bash
# Simple commit
git commit -m "feat: add Bank of Baroda support"

# Detailed commit
git commit -m "fix: date parsing for 12-hour format

- Updated DateUtils.parseDDMMYYYY() to handle AM/PM
- Added test cases for 12-hour format
- Fixes #42"
```

---

### Pull Request Process

**1. Fork & Branch**

```bash
# Fork on GitHub, then clone
git clone https://github.com/YOUR_USERNAME/transacflow.git
cd transacflow

# Create feature branch
git checkout -b feat/add-bank-x
```

**2. Make Changes**

- Follow code guidelines
- Test thoroughly (3-5 emails minimum)
- Update documentation if needed
- Add comments for complex logic

**3. Commit Changes**

```bash
git add .
git commit -m "feat: add Bank X support"
```

**4. Push to Your Fork**

```bash
git push origin feat/add-bank-x
```

**5. Create Pull Request**

- Go to GitHub → Your fork → "New Pull Request"
- Fill in template (see below)
- Reference any related issues (#123)
- Add screenshots/logs if relevant

**6. Address Feedback**

- Respond to review comments
- Make requested changes
- Push updates to same branch
- Be patient and respectful

---

### Pull Request Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix (non-breaking)
- [ ] New feature (non-breaking)
- [ ] Breaking change
- [ ] Documentation update

## Bank Pattern (if applicable)
- **Bank Name:** 
- **Sender Email:** 
- **Tested with:** X emails

## Testing Completed
- [ ] setupAutomation()
- [ ] test_SingleEmail() - passed
- [ ] test_WriteToSheet() - passed
- [ ] processTransactionEmails() - passed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex logic
- [ ] Updated documentation
- [ ] No linter warnings
- [ ] Tested with multiple emails (if bank pattern)
- [ ] Sanitized sample emails (no sensitive data)

## Sample Email (sanitized)
```text
From: alerts@bank.com
Subject: Transaction Alert
Body: Rs. 1234.56 debited from Card XX5678...
```

## Screenshots (if applicable)
```

---

## Common Contribution Scenarios

### Adding a New Bank

**1. Create Pattern**

Edit `BankPatterns.gs`:

```javascript
function getBankPatterns() {
  return [
    {
      name: 'Your Bank Name',
      senderPattern: 'alerts@yourbank\\.com',
      subjectPattern: 'Transaction Alert',
      bodyPattern: 'specific identifier',
      amountPattern: 'Rs\\.\\s*([\\d,]+)',
      accountPattern: 'Card (XX\\d{4})',
      merchantPattern: 'at\\s+([A-Za-z0-9\\s]+)',
      datePattern: '(\\d{2}-\\d{2}-\\d{4})',
      dateFormat: 'DD-MM-YYYY',
    }
  ];
}
```

**2. Test Pattern**

```javascript
// Run in Apps Script
test_SingleEmail()    // Check extraction
test_WriteToSheet()   // Check sheet writing
```

**3. Verify Output**

Check logs for:
```
Transaction Data: {
  "datetime": "2025-12-01T14:30:00.000Z",
  "amount": "1234.56",
  "account": "XX5678",
  "merchant": "MERCHANT NAME",
  "source": "Your Bank Name"
}
```

**4. Submit PR**

Include 2-3 sanitized sample emails.

---

### Fixing a Bug

**1. Reproduce Bug**

- Create test case
- Document steps
- Check logs

**2. Identify Root Cause**

- Use `debug_ShowRawEmail()` for parsing issues
- Use `debug_EmailSearch()` for search issues
- Set `LOG_LEVEL = 'DEBUG'`

**3. Fix & Test**

- Make minimal changes
- Test with original bug scenario
- Test with normal scenarios
- Verify no regressions

**4. Submit PR**

Reference issue number: `Fixes #123`

---

### Improving Documentation

**Guidelines:**

- Use clear, simple language
- Include code examples
- Add troubleshooting tips
- Keep it concise
- Test all steps yourself

**PR Checklist:**
- [ ] Spelling/grammar checked
- [ ] Links working
- [ ] Examples tested
- [ ] Screenshots updated (if UI changes)

---

## Code Review Process

**What we look for:**

- ✅ Code works correctly
- ✅ Follows style guidelines
- ✅ Proper error handling
- ✅ Adequate logging
- ✅ Clear variable names
- ✅ Comments for complex logic
- ✅ No sensitive data in code/examples

**Review timeline:**

- Initial review: 1-3 days
- Follow-up: 1-2 days
- Merge after approval + CI passing

---

## Recognition

**Contributors get:**

- ⭐ Listed in CONTRIBUTORS.md
- 📢 Mentioned in release notes
- 🙏 Thanked in community discussions
- 🎉 Eternal gratitude!

---

## Questions?

**Where to ask:**

- 💬 General questions: [GitHub Discussions](https://github.com/yourusername/transacflow/discussions)
- 🐛 Bug reports: [GitHub Issues](https://github.com/yourusername/transacflow/issues)
- 💡 Feature requests: [GitHub Issues](https://github.com/yourusername/transacflow/issues) (label: enhancement)
- 📧 Private: Open an issue (we'll take it private if needed)

---

## Code of Conduct

**Simple rules:**

- ✅ Be respectful and inclusive
- ✅ Welcome newcomers
- ✅ Give constructive feedback
- ✅ Stay professional
- ✅ Focus on making things better
- ❌ No harassment or discrimination
- ❌ No spam or self-promotion

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Development Tips

**Useful Commands:**

```bash
# Check file changes
git status

# See your changes
git diff

# Update your fork with upstream changes
git remote add upstream https://github.com/yourusername/transacflow.git
git fetch upstream
git merge upstream/main

# Undo uncommitted changes
git checkout -- filename
```

**Apps Script Tips:**

- Use `Logger.log()` for debugging (view in Logs)
- Use Executions panel to see past runs
- Test functions individually before full flow
- Save frequently (Ctrl/Cmd + S)
- Use version history (File → Version history)

**Testing Tips:**

- Test with multiple email formats
- Test with edge cases (missing data, special chars)
- Test with real emails, not mock data
- Check Google Sheet output format
- Verify no duplicates

---

**Thank you for contributing to TransacFlow! 🎉**

Your efforts help thousands of people automate their expense tracking.

Every contribution matters - whether it's code, documentation, or bug reports!

---

**Happy coding! 🚀**
