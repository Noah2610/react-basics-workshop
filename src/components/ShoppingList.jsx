import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList() {
    const shoppingListItems = [
        "Pizza",
        "Soap",
        "Washing Machine",
        "Dish Washer"
    ];

    return (
        <ul>
            {shoppingListItems.map((item, index) => (
                <ShoppingListItem key={index} >
                    {item}
                </ShoppingListItem>
            ))}
        </ul>
    );
}