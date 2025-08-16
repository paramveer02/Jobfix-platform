# JobFix — Client (React + Vite)

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=061a23)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?logo=vite&logoColor=fff)](https://vitejs.dev/)
[![Recharts](https://img.shields.io/badge/Charts-Recharts-00bcd4)](https://recharts.org/)
[![Render](https://img.shields.io/badge/Hosted%20on-Render-46e3b7?logo=render&logoColor=fff)](https://render.com/)

> A clean, fast front-end for tracking job applications with stats, filters, and a slick UI.

**Live App:** https://jobfix.onrender.com  
**API:** https://jobfix-server.onrender.com

---

## Features

- 🔐 Auth flows (register, login, demo user)
- 🧰 Job CRUD (create / edit / delete)
- 🧭 Search & filters (status, type, etc.)
- 📈 Stats dashboard (monthly trends, bar/area charts)
- 👤 Profile (avatar upload via Cloudinary, update name/location)
- 🍪 Cookie-based auth (secure & HttpOnly in production)

---

## Tech Stack

- **React 19**, **Vite 7**
- **React Router** (data routers + loaders/actions)
- **Axios** (pre-configured instance with `withCredentials`)
- **Styled-Components**, **React Icons**
- **Recharts** for analytics

---

## Getting Started

### 1) Env

Create `.env.local` in the project root:

```env
VITE_API_URL=https://jobfix-server.onrender.com
```
