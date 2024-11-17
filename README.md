# E-PHARMACY

"E-Pharmacy" is a streamlined and accessible web application aimed at helping users easily search for, compare, and purchase medicines from pharmacies nearby. With user authentication, dynamic search, and responsive design, E-Pharmacy provides a smooth experience for users to locate and order essential medicines at their convenience.

### Pages

**1. Authentication Pages: RegisterPage & LoginPage**

**Register page**

- Includes a registration form with validation. Upon successful registration, users are automatically logged in and redirected to a private page.
- A navigation link is provided for existing users to log in.

**Login page**

- Includes a login form with validation. Successful login redirects users to the main page.
- A navigation link is provided for new users to register.

This structure ensures a seamless user experience across both pages, with consistent branding and functionality.

![RegisterPage & LoginPage](./public/1.jpg)

**2. Home**

The Home page is the entry point for users, providing an overview of the platform's offerings and directing them to key sections serves as the central hub for users, offering a comprehensive overview of the platform's key features and guiding users to explore further.

_Main Banner:_ Introduces the platform with a promotional banner and a message about the convenience of medication delivery, also reassures users with the supportive text.

![Main Banner](./public/2-1.png)

_Promo Banners:_ Three promotional banners:

- Huge Sale: 70% discount with a "Shop now" button.
- Secure Delivery: 100% guarantee with a "Read more" button.
- Off: 35% discount with a "Shop now" button.

![Stock Section](./public/2-1-1.png)

_Nearest Medicine Store:_ Displays selection of nearby stores with details like name, address, phone number, and open/close status. Clicking on a store redirects users to the Shop page for more detailed information.

![Nearest Medicine Store](./public/2-2.png)

_Add Pharmacy Promo:_ Encourages local pharmacies to join the platform, highlighting the benefits of online prescription serviceslike managing orders, creating profiles, and increasing sales. A call-to-action button directs users to the Medicine store page for further exploration.

![Add Pharmacy Promo](./public/2-3.png)

_Reviews Section:_ Showcases customer reviews, each including a user photo, name, and testimonial, fetched dynamically from the backend to showcase recent experiences.

![Reviews Section](./public/2-4.png)

**3. Medicine store page**

Features a list of pharmacies or stores where users can browse and select their preferred locations.

- Each store card displays key information, including the store name, address, contact number, and current status (open or closed).
- Users can also see ratings for each store and click a "Visit Store" button to view more details.

![Medicine store page](./public/3.png)

**4. Medicine page**

Provides an intuitive interface for users to search, filter, and browse available medications.

- The search and filter panel includes a "Product category" filter for selecting specific medication categories, a search field for finding medications by name, and a reset button to clear all filters and display the full product list again.
- Each card includes an image of the product, the medicine name and the price.
- "Add to Cart" button allows users to add the product to their shopping cart. If the user is not logged in, a modal prompts registration or login; if logged in, the product is added to the cart.
- A link "Details" redirects users to the Product page where they can view comprehensive information about the selected medication.
- Pagination system located at the bottom of the page, enabling users to navigate between different pages of the product catalog.

![Medicine page](./public/4.png)

**5. Product page**

Provides detailed information about individual products, including images, pricing, and customer reviews. After adding the product to the cart, users can change the quantity. Contains two nested routes: "Description" and "Reviews" tabs.

![Product page](./public/5.png)

_Description:_ Provides a comprehensive overview of the product, including its medical uses and any warnings.

_Reviews:_ Displays user reviews, including the reviewer's name, the date of the review, the review text, and a star rating.

![Description & Reviews routes](./public/6.jpg)

**6. Cart page**

Private page accessible to authenticated users to view and manage selected products.

- Users can enter shipping information including name, email, phone number, and address, choose a payment method include "Cash On Delivery" and "Bank".
- The total order amount is displayed, with a "Place order" button to finalize the purchase.
- In products list displays the product name, unit price, quantity with an option to edit, and a "Remove" button to delete the item.
- If the cart is empty, users are prompted to visit the Medicine page to add products.

![Cart page](./public/7.jpg)

## Features

- **User Authentication**: Secure login, registration, and logout functionalities powered by Node.js.
- **Adaptive Design**: Fluid layout for breakpoints at 320px, 375px, 768px, and 1440px. Ensures compatibility and usability across various devices.
- **Modal Dialogs**: Enhanced interaction through modal dialogs for login, registration and logaut.
- **Form Validation**: Implemented using React Hook Form and Yup for client-side validation.

## About the Project

[**Layout**](<https://www.figma.com/file/qrKzOBVqM6zOZNFkTOpEO0/E-PHARMACY-(clients)?type=design&node-id=0-1&mode=design&t=O9kTuPJAS2bjEuwM-0>) |
[**Technical Task**](https://docs.google.com/spreadsheets/d/1TdZTkbTSEcscopFAAH1XiiAbkP8IOawIugpvaG9xnuw/edit?gid=0#gid=0)

## Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## Deployment

- This project is deployed on Vercel. Check it out: [**E-Pharmacy**](https://e-pharmacy-rust.vercel.app/)
- Here you can see back-end part of website: [**E-Pharmacy backend**](https://github.com/NiukaloTetiana/e-pharmacy-backend)

Discover and order medicines effortlessly with "E-Pharmacy", your trusted partner in healthcare accessibility.
