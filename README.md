# PrepWise 🍳

**PrepWise** is a modern, full-stack meal planning application designed to simplify your kitchen workflow. From discovering new recipes to organizing your weekly meals and auto-generating shopping lists, PrepWise is your ultimate kitchen companion.

![PrepWise Hero](file:///C:/Users/Jerson/.gemini/antigravity/brain/1f097da0-0a0b-4251-b215-195df5f8c587/screencapture-diet-nomore-vercel-app-dashboard-2026-05-07-09_30_11.png)

## ✨ Features

- **Smart Recipe Finder**: Explore a vast collection of recipes filtered by cuisine, dietary preferences, and preparation time.
- **Dynamic Meal Planner**: A drag-and-drop interface to plan your entire week's meals effortlessly.
- **Automated Grocery Lists**: One-click shopping list generation based on your selected recipes and meal plan.
- **Favorites & Collections**: Save your favorite recipes and organize them for quick access.
- **Personalized Dashboard**: Track your cooking stats and get recommendations based on your habits.
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices.

## 🚀 Tech Stack

### Frontend
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) (Icons)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)

### Backend & Database
- **Database**: PostgreSQL (via [Prisma ORM](https://www.prisma.io/))
- **Authentication**: Custom JWT-based auth with Bcrypt password hashing
- **Media Storage**: [Cloudinary](https://cloudinary.com/) for high-performance image management
- **API**: Next.js Serverless Functions (Route Handlers)

## 🛠️ Getting Started

### Prerequisites
- Node.js 20.x or later
- A PostgreSQL database instance
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/meal-planner.git
   cd meal-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="your_postgresql_url"
   JWT_SECRET="your_secure_random_string"
   CLOUDINARY_CLOUD_NAME="your_cloud_name"
   CLOUDINARY_API_KEY="your_api_key"
   CLOUDINARY_API_SECRET="your_api_secret"
   ```

4. **Initialize Database**
   ```bash
   npx prisma generate
   npx prisma db push
   # Optional: Seed the database with sample recipes
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `/app`: Next.js App Router (Routes, Components, Layouts)
  - `/(auth)`: Authentication related routes (Login, Signup)
  - `/(planner)`: Core application features (Dashboard, Planner, Recipes)
  - `/api`: Backend API endpoints
- `/components`: Reusable UI components (shadcn/ui style)
- `/lib`: Utility functions and database client
- `/prisma`: Database schema and seed scripts
- `/public`: Static assets

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ by [Jerson](https://github.com/JersonMraz)
