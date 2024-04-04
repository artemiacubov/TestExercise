import React, { useState } from "react";
import orderStore from "../stores/OrderStore";

interface Category {
    key: string;
    name: string;
}

interface Props {
    chooseCategory: (category: string) => void;
}

const Categories: React.FC<Props> = ({ chooseCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const categories: Category[] = [
        {
            key: 'all',
            name: 'Всё',
        },
        {
            key: 'men\'s clothing',
            name: 'Мужская одежда',
        },
        {
            key: 'electronics',
            name: 'Электроника',
        },
        {
            key: 'jewelery',
            name: 'Бижутерия',
        },
        {
            key: 'women\'s clothing',
            name: 'Женская одежда',
        },
    ];

    const handleCategoryClick = (categoryKey: string) => {
        setSelectedCategory(categoryKey);
        chooseCategory(categoryKey);

        if (categoryKey === "all") {
            orderStore.setItems(orderStore.items);
            return;
        }

        const filteredItems = orderStore.items.filter(item => item.category === categoryKey);
        orderStore.setFilteredItems(filteredItems);
    }

    return (
        <div className="categories">
            {categories.map((el) => (
                <div
                    key={el.key}
                    onClick={() => handleCategoryClick(el.key)}
                    className={el.key === selectedCategory ? "selected" : ""}
                >
                    {el.name}
                </div>
            ))}
        </div>
    );
};

export default Categories;
