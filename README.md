<div align="center">
   <img src="./src/images/logo_lg_white.png" alt="Gravity Gym Logo" width="200px">
</div>
<br />

<div align="center">
   <a href="https://github.com/alfifrr/milestone-1/actions/workflows/pages/pages-build-deployment">
      <img src="https://github.com/alfifrr/milestone-1/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main" alt="GitHub Pages Deployment Status" style="display: inline-block;">
   </a>
</div>

# Gravity Gym - Milestone 1 Project

## Table of Contents

- [Gravity Gym - Milestone 1 Project](#gravity-gym---milestone-1-project)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [Features](#features)
  - [Development Stages](#development-stages)
    - [1. Initial HTML Structure](#1-initial-html-structure)
    - [2. Adding CSS Styling](#2-adding-css-styling)
    - [3. Enhancing with JavaScript](#3-enhancing-with-javascript)
    - [4. Deployment](#4-deployment)
  - [Setup and Running the Project](#setup-and-running-the-project)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Deployment Guide](#deployment-guide)
    - [Deploy to Custom Domain](#deploy-to-custom-domain)
  - [Dependencies and Credits](#dependencies-and-credits)
    - [Dependencies](#dependencies)
  - [Design Considerations](#design-considerations)

---

## About the Project

Gravity Gym is a modern gym website designed with a mobile-first approach. It is optimized for smooth user interaction with responsive designs and accessibility considerations. The project focuses on clean design, black-and-lime color schemes, and a parallax effect for dynamic visuals.

---

## Features

- **Mobile-first design**: Ensures usability across all devices.
- **Parallax scrolling**: Sticky background images create a smooth, immersive experience.
- **Offset scrolling**: Prevents content overlap with a fixed header.
- **Responsive design**: Fits various screen sizes seamlessly.
- **Black and lime color scheme**: Reflects energy and simplicity.

---

## Development Stages

### 1. Initial HTML Structure

The project started with semantic HTML, creating a well-structured document containing:

- Logical sections (`header`, `main`, `footer`) for easier navigation.
- Semantic elements like `section`, `article`, and `nav`.

### 2. Adding CSS Styling

Styling was introduced with a mobile-first philosophy:

- **Fonts**: Google Fonts `Oswald` and `Roboto Slab`.
- **Theme**: Black background with lime accents for a modern look.
- **Effects**: Parallax scrolling and offset adjustment for headers.

### 3. Enhancing with JavaScript

JavaScript improved interactivity:

- A hamburger menu toggle for mobile navigation.
- Smooth scrolling with a 75px offset to prevent content cutoff.

### 4. Deployment

Deployed the project to a custom domain via Netlify and Niagahoster:

- The Netlify deployment was replaced with a registered custom domain.
- Full steps for setup included below.

---

## Setup and Running the Project

### Prerequisites

- Git installed on your machine.
- A code editor like Visual Studio Code.

### Steps

1. Clone the repository:

   ```bash
   git clone git@github.com:alfifrr/milestone-1.git
   ```

2. Navigate to the project directory:
   ```bash
   cd milestone-1
   ```
3. Open the project in Visual Studio Code and start a live server:
   - Use the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
   - Alternatively, open `index.html` directly in your browser.

---

## Deployment Guide

### Deploy to Custom Domain

1. **Purchase a domain** (e.g., via Niagahoster).
2. **Add the custom domain to Netlify**:
   - In the **Netlify dashboard**, go to **Domain Management** > Add Domain.
   - Enter the purchased domain and use Netlify DNS.
3. **Update Nameservers** at your registrar:
   - Replace your domain's nameservers with those provided by Netlify.
   - Allow 1-24 hours for propagation.
4. Access your site via your custom domain once the changes propagate.

---

## Dependencies and Credits

### Dependencies

- **Google Fonts**:
  - [Oswald](https://fonts.google.com/specimen/Oswald)
  - [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab)
- **Images**:
  - Hero: [The Gigachad, Ernest Khalimov on bioscops.com](https://bioscops.com/ernest-khalimov-height/)
  - Background Image 1: [Victor Freitas on Pexels](https://www.pexels.com/photo/2261479/)
  - Background Image 2: [Rod Bartoletti on WallpaperCat](https://wallpapercat.com)

---

## Design Considerations

1. **Mobile-first approach**: Ensured seamless usability on smaller screens before scaling up.
2. **Color scheme**: Black conveys sophistication, and lime adds energy.
3. **Parallax scrolling**: Sticky background images for dynamic visuals.
4. **Offset scrolling**: Prevents header from cutting content.

---

&copy; 2024 Gravity Gym. All rights reserved.
