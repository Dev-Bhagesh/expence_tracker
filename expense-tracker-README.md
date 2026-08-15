# 💰 Personal Expense Tracker

A production-style full-stack personal finance application built with **Next.js + TypeScript**.

The application allows users to manage expenses and income, create budgets, track recurring payments, analyze spending habits, and manage their financial data through a polished modern dashboard.

---

## 🚀 Core Features

### 1. 📊 Dashboard

The dashboard provides a complete overview of the user's finances.

- Total expenses
- Current month's expenses
- Today's expenses
- Average daily spending
- Highest expense
- Number of transactions
- Total income
- Current balance
- Remaining monthly budget
- Recent transactions
- Spending by category
- Monthly spending overview
- Quick actions

#### Quick Actions

- Add Expense
- Add Income
- Set Budget
- View Analytics

---

## 2. 💳 Transactions

Users can manage all their financial transactions.

### Expense Management

- Add expense
- Edit expense
- Delete expense
- View expense details
- Search transactions
- Filter transactions
- Sort transactions

### Transaction Filters

- Category
- Date range
- Amount
- Payment method
- Income / Expense

### Transaction Sorting

- Newest first
- Oldest first
- Highest amount
- Lowest amount

### Transaction Information

Each transaction can contain:

- Title
- Amount
- Category
- Date
- Payment method
- Description
- Transaction type

---

## 3. 💰 Income Tracking

Track money coming into the account.

Users can:

- Add income
- Edit income
- Delete income
- View income history
- Categorize income

Example income sources:

- Salary
- Freelance
- Business
- Investments
- Other

The dashboard should calculate:

```text
Total Income
- Total Expenses
----------------
Current Balance
```

---

## 4. 🗂️ Categories

The application should provide default expense categories.

### Default Categories

- 🍔 Food
- 🚗 Transport
- 🛍️ Shopping
- 🎮 Entertainment
- 💡 Bills
- 🏥 Health
- 📚 Education
- ✈️ Travel
- 💻 Technology
- 📦 Other

### Custom Categories

Users can:

- Create custom categories
- Rename categories
- Delete categories
- Assign icons
- Assign colors

---

## 5. 🎯 Budget System

Users can create and manage spending budgets.

### Monthly Budget

- Set monthly spending limit
- Track current spending
- Show remaining budget
- Show budget percentage
- Warn when approaching the limit
- Warn when the budget is exceeded

Example:

```text
Monthly Budget: ₹20,000
Spent:          ₹14,500
Remaining:       ₹5,500

Progress: 72.5%
```

### Category Budgets

Users can also create budgets for individual categories.

Example:

```text
Food          ₹5,000
Transport     ₹3,000
Entertainment ₹2,000
Shopping      ₹4,000
```

---

## 6. 📈 Analytics

Provide a dedicated analytics section for understanding spending habits.

### Analytics

- Daily spending
- Weekly spending
- Monthly spending
- Yearly spending
- Category breakdown
- Spending trends
- Highest spending categories
- Average spending
- Income vs expenses
- Current month vs previous month
- Payment method breakdown

### Charts

Potential visualizations:

- Line charts
- Bar charts
- Pie / doughnut charts
- Area charts
- Category breakdown charts
- Income vs expense charts

---

## 7. 🔄 Recurring Expenses

Users can create recurring financial transactions.

Examples:

```text
Netflix       ₹649/month
Internet      ₹799/month
Rent        ₹10,000/month
Spotify       ₹119/month
```

### Recurring Expense Features

- Create recurring expense
- Edit recurring expense
- Delete recurring expense
- Choose frequency
- Set start date
- Set next payment date
- Automatically create transactions when due

Supported frequencies can include:

- Daily
- Weekly
- Monthly
- Yearly

---

## 8. 💳 Payment Methods

Track how each transaction was paid.

Supported payment methods:

- Cash
- UPI
- Credit Card
- Debit Card
- Bank Transfer
- Other

Analytics should allow users to see spending by payment method.

---

## 9. 🔐 Authentication

Users should have secure accounts.

### Authentication Features

- Sign up
- Login
- Logout
- Protected dashboard
- User profile
- Session management
- Password management

Each user must only be able to access their own financial data.

---

## 10. 🔔 Notifications

The application should provide useful financial notifications.

Examples:

> ⚠️ You've used 85% of your monthly food budget.

> 💰 Your spending is 18% lower than last month.

> 🔄 Your Netflix subscription is due tomorrow.

Possible notification types:

- Budget warnings
- Budget exceeded
- Recurring payment reminders
- Spending insights
- Monthly summaries

---

## 11. 📁 Data Management

Users should have control over their financial data.

### Export

- Export transactions to CSV
- Export financial data
- Backup account data

### Import

- Import transactions from CSV
- Validate imported data
- Handle duplicate transactions

### Account Data

- Delete all financial data
- Export account data
- Clear transaction history

Destructive operations should require confirmation.

---

## 12. 🔍 Search & Filtering

Provide powerful search and filtering throughout the application.

Users should be able to search by:

- Transaction title
- Description
- Category
- Payment method

Filters should include:

- Date range
- Amount range
- Category
- Payment method
- Income / Expense

---

# 🎨 UI / UX Goals

The application should have a modern, premium, professional interface.

## Visual Direction

- Modern dashboard
- Responsive design
- Clean typography
- Glassmorphism where appropriate
- Soft shadows
- Depth and layered cards
- Smooth animations
- Animated charts
- Subtle hover effects
- Smooth page transitions
- Dark / light theme support

## 3D UI

The application can include **subtle 3D elements** to give it a premium feel.

Possible uses:

- 3D dashboard cards
- Floating financial elements
- 3D data visualizations
- Depth-based UI components
- Animated background elements

The 3D design should remain subtle and functional rather than making the entire application 3D.

> **Goal:** Professional financial SaaS aesthetic rather than a gimmicky 3D website.

---

# 📱 Responsive Design

The application should work well on:

- Desktop
- Laptop
- Tablet
- Mobile

Important UI elements should adapt appropriately to smaller screens.

---

# 🧱 Suggested Pages

```text
/
├── Landing Page
├── Login
├── Register
│
└── Dashboard
    ├── Overview
    ├── Transactions
    ├── Income
    ├── Budgets
    ├── Analytics
    ├── Recurring Expenses
    ├── Categories
    ├── Notifications
    └── Settings
```

---

# 🛠️ Tech Stack

## Frontend

- Next.js
- TypeScript
- React
- Tailwind CSS

## Backend

- Next.js Server Actions / Route Handlers
- Node.js runtime where applicable

## Database

- MongoDB
- Mongoose

## Charts

- Recharts

## Animation

- Framer Motion

## Authentication

- Next.js-compatible authentication solution

## Deployment

- Vercel
- MongoDB Atlas

---

# 🧠 TypeScript Goals

The project should make meaningful use of TypeScript.

Examples:

- Interfaces
- Type aliases
- Typed component props
- Typed API responses
- Typed database models
- Form types
- Union types
- Optional properties
- Generic utility functions
- Strict type checking

Example:

```ts
interface Expense {
  _id: string;
  title: string;
  amount: number;
  category: string;
  date: Date;
  paymentMethod: string;
  description?: string;
}
```

---

# 🔒 Security Requirements

- Protect authenticated routes
- Validate user input
- Validate API requests
- Prevent users from accessing another user's data
- Never expose sensitive credentials
- Store secrets in environment variables
- Validate imported CSV data
- Confirm destructive actions

---

# 🗄️ Suggested Data Models

Potential collections:

```text
User
Expense
Income
Category
Budget
RecurringExpense
Notification
```

Relationships and exact schema design can be decided during implementation.

---

# 🗺️ Development Roadmap

## Phase 1 — Project Setup

- [ ] Create Next.js project
- [ ] Configure TypeScript
- [ ] Configure Tailwind CSS
- [ ] Configure project structure
- [ ] Create initial layout

## Phase 2 — UI

- [ ] Landing page
- [ ] Dashboard
- [ ] Navigation
- [ ] Transaction UI
- [ ] Expense form
- [ ] Income form
- [ ] Budget UI
- [ ] Analytics UI
- [ ] Responsive design
- [ ] Dark/light theme
- [ ] Animations
- [ ] Subtle 3D elements

## Phase 3 — Transaction System

- [ ] Add expense
- [ ] Edit expense
- [ ] Delete expense
- [ ] View expenses
- [ ] Search
- [ ] Filtering
- [ ] Sorting

## Phase 4 — Database

- [ ] Connect MongoDB
- [ ] Configure Mongoose
- [ ] Create models
- [ ] Create database operations
- [ ] Connect UI to database

## Phase 5 — Income & Budget

- [ ] Income management
- [ ] Monthly budgets
- [ ] Category budgets
- [ ] Budget progress
- [ ] Budget warnings

## Phase 6 — Analytics

- [ ] Spending calculations
- [ ] Category analytics
- [ ] Monthly analytics
- [ ] Income vs expenses
- [ ] Interactive charts

## Phase 7 — Recurring Expenses

- [ ] Create recurring expenses
- [ ] Frequency management
- [ ] Due dates
- [ ] Automatic transaction creation
- [ ] Payment reminders

## Phase 8 — Authentication

- [ ] Registration
- [ ] Login
- [ ] Logout
- [ ] Protected routes
- [ ] User-specific data
- [ ] Session management

## Phase 9 — Advanced Features

- [ ] Notifications
- [ ] CSV export
- [ ] CSV import
- [ ] Data backup
- [ ] Account data deletion

## Phase 10 — Production

- [ ] Error handling
- [ ] Loading states
- [ ] Empty states
- [ ] Form validation
- [ ] Security review
- [ ] Performance optimization
- [ ] Mobile testing
- [ ] Production deployment
- [ ] MongoDB Atlas setup
- [ ] Vercel deployment

---

# 🎯 Final Goal

Build a polished, production-style personal finance application that demonstrates:

```text
Next.js
   +
TypeScript
   +
React
   +
Tailwind CSS
   +
MongoDB
   +
Authentication
   +
APIs / Server Actions
   +
Data Visualization
   +
Animations
   +
Responsive UI
   +
Real-world CRUD
```

The project should feel like a **real SaaS product**, not just a tutorial project.
