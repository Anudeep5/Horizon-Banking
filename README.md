
# Horizon Banking App 🏦

A modern, secure, and responsive full-stack banking dashboard built with **Next.js**, **Tailwind CSS**, **Appwrite**, **Plaid**, and **Dwolla**. Horizon enables users to manage their finances in one place — view accounts, transactions, and transfer money securely.

---

## 🚀 Features

- 🔐 Secure user authentication with Appwrite
- 🏦 Connect multiple bank accounts via Plaid
- 📊 Real-time transaction feed and balance visualization
- 💸 Send and receive money using Dwolla
- 📈 Interactive charts for financial insights
- 📱 Responsive UI with Tailwind CSS and ShadCN components
- 🧪 Form validation using React Hook Form & Zod
- 🐞 Error tracking and monitoring with Sentry

---

## 🛠 Tech Stack

- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS, TypeScript
- **Backend:** Appwrite (Auth, Database)
- **Integrations:** Plaid API, Dwolla API
- **UI Components:** ShadCN
- **Forms:** React Hook Form, Zod
- **Charts:** Chart.js
- **Monitoring:** Sentry

---

## 📦 Project Structure

```
.
├── app/                    # Next.js app routes and pages
├── components/             # Reusable UI components
├── constants/              # Static values and labels
├── lib/                    # API clients and utility functions
├── public/                 # Static assets
├── types/                  # Custom TypeScript definitions
├── sentry.*.config.ts      # Sentry configuration files
├── tailwind.config.ts      # Tailwind CSS setup
└── .env.example            # Example environment variables
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js & npm
- Git

### Clone and Install

```bash
git clone https://github.com/Anudeep5/Horizon-Banking.git
cd Horizon-Banking
npm install
```

### Setup Environment Variables

Copy the `.env.example` to `.env.local` and fill in the required values:

```env
# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Appwrite
NEXT_PUBLIC_APPWRITE_ENDPOINT=
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

# Plaid
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=sandbox
PLAID_PRODUCTS=auth,transactions,identity
PLAID_COUNTRY_CODES=US,CA

# Dwolla
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

# Sentry (Optional)
SENTRY_AUTH_TOKEN=
```

### Start the App

```bash
npm run dev
```

Visit the app at [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testing

This project uses client-side validation and interactive UI testing through form flows. (Unit and integration testing TBD)

---

## ☁️ Deployment

This app is ready to deploy on **Vercel**.

1. Push code to GitHub
2. Connect repo on Vercel
3. Add environment variables
4. Deploy and preview!

---

## 🐞 Monitoring

Sentry is integrated to capture runtime errors and performance issues. To enable:

1. Add your `SENTRY_DSN` in the `.env.local`
2. Sentry auto-initializes through the Next.js middleware

---

## 🤝 Contributing

We welcome contributions!

1. Fork this repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "feat: added feature"`)
4. Push to branch (`git push origin feature-name`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [Plaid API](https://plaid.com/)
- [Dwolla](https://www.dwolla.com/)
- [Appwrite](https://appwrite.io/)
- [ShadCN UI](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)


---

## 🚀 Live Demo & Test Credentials

The Horizon Banking App is currently deployed and accessible here:

🔗 **Live URL**: [https://horizon-banking.vercel.app](https://horizon-banking.vercel.app)

You can explore the app using the following **test credentials**:

```
Email: test@test.com
Password: test1234
```

> Note: This is a test account with mock data for demo purposes only. Do not input real financial information.

---

