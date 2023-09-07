# Geekyness Technical Assessment: Frontend Developer & Designer Intern

## Design Decisions

### Design

I decided to use a simple design with a white background and black text. I used a sans-serif font for the text and a serif font for the headings. I used a simple layout with a header, main content and footer. I used a simple navigation bar with a logo and links to the other pages. I used a simple footer with links to the other pages and social media links. I used a simple layout for the product page with a product image, product name, product description, product price and a button to add the product to the cart. USing simple layout for testimonials with a testimonial image, testimonial name, testimonial description .

## Design and Development Decisions

Here, you can describe the design and development decisions you made while working on the project. This can include things like:

-   The technologies you chose to use (in this case, pnpm and React)
-   The architecture of your application is component-based
-   Any libraries or frameworks you used are tailwindcss, headlessui , heroicons , and tailwindComponents.

## Challenges Faced and Solutions Implemented

Here, you can describe any challenges you faced while working on the project, as well as the solutions you implemented to overcome them. This can include things like:

-   Adding Search functionality to the application

### Search Functionality

-   the problem was state management and i don't want to use redux and react context api .

#### Solution

- so i used the logic to filter the products in the product page and pass the filtered products to the search page as props and render the filtered products in the search page. and check if the search result is empty or not and render the empty result component if the search result is empty.

## How to run the project

Here, you can describe how to run the project locally. This can include things like:

-   Clone the repository
-   Run `pnpm install` to install the dependencies
-   Run `pnpm run dev` to start the development server
-   Run `pnpm run build` to build the project for production

