---
name: Bank Pattern Request
about: Request support for a new bank or UPI provider
title: '[BANK] Add support for [Bank Name]'
labels: bank-pattern
assignees: ''
---

## 🏦 Bank/Provider Information

- **Bank/Provider Name**: [e.g., HDFC Bank, PhonePe]
- **Type**: [Credit Card / Debit Card / UPI / Savings Account]
- **Country**: [e.g., India, USA]

## 📧 Sample Email (Sanitized)

Please provide a sanitized sample of the transaction email:

### Email Details

**From**: `example@bank.com`

**Subject**: `Transaction Alert: Your card ending 1234 was used`

**Body**:
```
Dear Customer,

Your card ending 1234 was used for a transaction.

Transaction Details:
Amount: Rs. 1,500.00
Merchant: EXAMPLE STORE
Date: 01-Dec-2025 10:30:00
Card: XX1234

Thank you,
Example Bank
```

## 📋 Required Fields

Please identify where each field appears in the email:

- **Amount**: [e.g., "Rs. 1,500.00"]
- **Merchant/Description**: [e.g., "EXAMPLE STORE"]
- **Date/Time**: [e.g., "01-Dec-2025 10:30:00"]
- **Account/Card Number**: [e.g., "XX1234"]

## 🔍 Email Patterns

If you know, what keywords appear consistently in emails from this bank?

**Subject keywords**: [e.g., "Transaction Alert", "Card used", "Debited"]
**Sender patterns**: [e.g., "@bank.com", "alerts@"]

## 📊 Frequency

How many transactions do you typically receive from this bank per month?

- [ ] 1-10
- [ ] 11-50
- [ ] 51-100
- [ ] 100+

## 🤝 Contribution

- [ ] I can provide multiple sample emails
- [ ] I can test the pattern once created
- [ ] I can create the regex pattern myself (see [CUSTOMIZATION.md](../docs/CUSTOMIZATION.md))

## 📝 Additional Information

Any other details about this bank's email format that might be helpful.

---

**Thank you for helping expand FinFlow's bank support! 🙏**

