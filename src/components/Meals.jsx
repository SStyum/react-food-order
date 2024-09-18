import { useHttp } from "../hooks/useHttp";
import MealItem from "./MealItem";

const requestConfig = {};

const Meals = () => {
    const { data, isLoading, error,} = useHttp("http://localhost:3000/meals", requestConfig, []);

    if (isLoading) {
        return <p className="center">Fetching meals data...</p>
    }

    if (error) {
        return <Error title="Failed to fetch meals!" message={error} />
    }

    return (
        <ul id="meals">
            {data.map((meal) => {
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