# Employee Management Dashboard

A modern, responsive React-based dashboard for managing employee records with authentication, CRUD operations, search/filter, image upload with preview, and print functionality.

## Project Overview

This is a full-featured employee management application built as a single-page application (SPA) using React.  
It includes:

- Mock authentication (username/password login)
- Protected routes (dashboard inaccessible without login)
- Dashboard summary cards (total, active, inactive employees)
- Employee list with table view, toggle active/inactive status
- Add / Edit employee form (reused component) with image upload & preview
- Search by name + filters by gender and status
- Delete employee with confirmation
- Print employee list feature
- Data persistence using **localStorage**
- Clean, modern UI built with Tailwind CSS

## Tech Stack

- **Frontend Framework**: React.js (Vite)
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: react-icons
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: Browser localStorage (no backend required)
- **Form Handling**: Controlled components + basic client-side validation
- **Image Handling**: FileReader API (base64 encoding for preview & storage)

## Features

- Secure login (mock credentials: username `admin` / password `password`)
- Responsive design (mobile-friendly layout)
- Image upload with live preview
- Combined search + multi-filter functionality
- Toggle employee active/inactive status
- Edit & Delete operations with confirmation
- Print-friendly employee list
- Loading & empty states handled
- Form validation & user-friendly error messages

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

## Steps to Run Locally

1. **Clone the repository**

   git clone https://github.com/maAshraff/bookexpert-assignment
   
   cd bookexpert-assignment

2. **Install dependencies**

  
   npm install
   # or
   yarn install
  

3. **Start the development server**

  
   npm start
   # or
   yarn start
  

   The app will open at:  
   **http://localhost:3000**

4. **Login credentials**

   - Username: `admin`
   - Password: `password`


## Design Decisions & Assumptions

- **Authentication**: Simple mock login stored in localStorage (no real backend).  
- **Data Storage**: localStorage is used to persist employees between page refreshes/sessions.  
  Data is lost when localStorage is cleared or in private/incognito mode.  
- **Image Storage**: Profile images are stored as base64 strings in localStorage.  
- **Form**: Single reusable form component for both Add and Edit operations.
- **State Management**: Kept simple with React Hooks (no Redux/Context needed for this scale).
- **Print Feature**: Uses browser's native print dialog (`window.print()`).  
  You can improve it further with `@media print` CSS rules to hide unnecessary elements.
- **Styling**: Tailwind CSS utility-first approach → fast prototyping and consistent design.