import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const userId = 1
  const today = new Date().toISOString().split('T')[0]
  
  console.log("Checking for User ID:", userId)
  console.log("Today (UTC):", today)

  const mealPlans = await prisma.mealPlan.findMany({
    where: { 
        user_id: userId,
        date: { gte: today }
    },
    include: { 
        Meal: { 
            include: { 
                Ingredients: true 
            } 
        } 
    }
  })

  console.log("Found MealPlans:", mealPlans.length)
  mealPlans.forEach(mp => {
    console.log(`- Date: ${mp.date}, Meal: ${mp.Meal.name}, Ingredients Count: ${mp.Meal.Ingredients.length}`)
    mp.Meal.Ingredients.forEach(ing => console.log(`  - ${ing.name}`))
  })

  const groceryItems = await prisma.groceryItem.findMany({
    where: { user_id: userId }
  })
  console.log("Current GroceryItems count:", groceryItems.length)
  groceryItems.forEach(gi => {
    console.log(`- ID: ${gi.id}, Name: ${gi.name}, MealPlanID: ${gi.meal_plan_id}`)
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
