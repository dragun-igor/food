import React from "react";
import { CategoryItem } from "../components/CategoryItem"

function CategoryList({catalog = []}) {
    return <div className="list">
        {catalog.map(catalogItem => (
            <CategoryItem key={catalogItem.idCategory} {...catalogItem} />
        ))}
    </div>
}

export { CategoryList }