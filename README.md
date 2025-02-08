# Mantine Laravel React Inertia Base

## Overview

This project provides a base structure to quickly start developing a web application using **Laravel** as the backend, **React** for the frontend, **Inertia.js** for seamless client-side routing, and **Mantine CSS** for a modern UI framework. This stack allows you to build a full-stack web application with a smooth, native-like experience without the complexity of traditional APIs.

With Inertia.js, you can build single-page applications (SPAs) while maintaining a traditional server-side routing approach. Mantine offers a set of high-quality React components that integrate well with your UI, making it easier to build beautiful and responsive designs.

## Features

- **React** for frontend development
- **Laravel** as the backend framework
- **Inertia.js** for seamless client-side navigation
- **Mantine CSS** for modern, customizable UI components
- Pre-configured environment for both backend and frontend development

## Requirements

Before starting, ensure that you have the following tools installed on your machine:

- PHP (>= 8.x)
- Composer
- Node.js (>= 14.x)
- npm or yarn

## Installation

### Step 1: Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/vishalsinhadev/mantine-laravel-react-inertia-base.git
cd mantine-laravel-react-inertia-base
```

## Step 2: Install Backend Dependencies

```
composer install
```
Next, copy the .env.example file to .env:

```
cp .env.example .env
```
Generate the application key for your Laravel application:
```
php artisan key:generate
```
## Step 3: Set up the Database
Create a new database and update your .env file with the correct database connection details. Then, run the migrations:

```
php artisan migrate
```
## Step 4: Install Frontend Dependencies
Now, install the frontend dependencies. You can use either npm or yarn:

Using npm:

```
npm install
```

## Step 5: Start the Development Servers
To run the Laravel backend server, use:

```
php artisan serve
```
This will start the server at http://localhost:8000.

To run the React development server, use:

```
npm run dev
```
This will start the frontend development server at http://localhost:3000.

## Step 6: Access Your Application
Once both servers are running, you can open your browser and visit http://localhost:8000 to see the Laravel + React app in action.