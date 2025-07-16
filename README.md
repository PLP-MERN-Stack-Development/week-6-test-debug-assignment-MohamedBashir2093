
# 📚 Library Management System – Week 6 Testing & Debugging Report

This repository contains Week 6 work for testing and debugging a MERN-based Library Management System. While some tests failed due to environmental oissues, all configurations and test files have been included for assessment.



## ✅ Project Structure

```

.
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── tests
│   │   ├── auth.test.js
│   │   ├── books.test.js
│   │   ├── setup.js
│   │   ├── authMiddleware.test.js
│   │   └── validators.test.js
│   └── jest.config.js
├── frontend
│   └── ... (React App)
├── README.md
└── package.json

```

---

## 🧪 Testing Strategy

### ✔️ Configured Tools

| Tool             | Purpose                             |
|------------------|-------------------------------------|
| Jest             | Unit and integration testing        |
| Supertest        | API endpoint testing (Express)      |
| MongoMemoryServer| In-memory MongoDB for test DB       |
| React Testing Library | Planned but not implemented     |

### 🧪 Test Types Attempted

| Type             | Status       | Notes                               |
|------------------|--------------|-------------------------------------|
| Unit Tests       | ✅ Done       | For utils and middleware            |
| Integration Tests| ⚠️ Partial    | Setup worked, but tests failed      |
| E2E Tests        | ❌ Not attempted | Time constraints                    |
| Debugging Tools  | ⚠️ Used logs  | Console logs + test output logs     |

---

## 🧱 Sample Unit Test Files

### ✅ `validators.test.js`
Tests a utility function that validates email format.

### ✅ `authMiddleware.test.js`
Mocks token authentication and tests Express middleware behavior.

---

## ⚠️ Known Issues

- `jest.setTimeout(20000)` was added to extend test duration.
- MongoMemoryServer takes too long to initialize on some systems.
- `mongoServer.stop()` error occurs if `beforeAll` fails to complete.
- Some `beforeAll()` hooks timed out even after increasing timeouts.

---

## 🐞 Debugging Techniques

- Used `console.log` for database and server state inspection
- Increased Jest timeouts to 20 seconds
- Verified MongoDB memory server manually
- Confirmed test server conflicts with live server on `:5000`

---

## 📊 Code Coverage Summary (Jest Report)

| Category   | Coverage |
|------------|----------|
| Statements | ~10%     |
| Functions  | 0%       |
| Branches   | 0%       |
| Lines      | ~10%     |

⚠️ Due to test failures, coverage is partial.

---

## 📸 Screenshots

(Screenshots of test runs and failures are inside the `./screenshots/Screenshot 2025-07-16 200804.png` folder,)

---

## 📁 Submission Checklist

- [x] All test files present in `tests/`
- [x] `jest.config.js` file included
- [x] Scripts added in `package.json`
- [x] Documented known errors & attempts
- [x] Code coverage attempted

---

## 👤 Author

**Mohamed Bashir**  



