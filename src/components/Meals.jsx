import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
    const [loadedMeals, setLoadedMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('http://localhost:3000/meals');
    
            if (!response.ok) {
                
            }
    
            const meals = await response.json();
            setLoadedMeals(meals);
        }

        fetchMeals();
    }, []);

    

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => {
                return ( 
                    <MealItem
                        key={meal.id}
                        meal={meal}
                    >
                        {meal.name}
                    </MealItem>
                )
            })}
        </ul>
    );
}

export default Meals;