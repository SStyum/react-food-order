import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

const MealItem = ({ name, price, description, image }) => {
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${image}`} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(price)}</p>
                    <p className="meal-item-description">{description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}

export default MealItem;