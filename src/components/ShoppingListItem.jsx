import { useState } from "react";

export default function ShoppingListItem({ children }) {
    const [isBought, setIsBought] = useState(false);

    return (
        <li onClick={() => setIsBought(!isBought)} style={{
            color: isBought ? "gray" : "black",
        }}>
            {children}
        </li>
    );
}