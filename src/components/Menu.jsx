import React from 'react';
import './Menu.css';

const menuItems = [
  {
    category: "Signature Coffees",
    items: [
      { name: "Bean & Brew Blend", price: "$4.50", description: "Our signature medium roast with notes of chocolate and caramel" },
      { name: "Ethiopian Single Origin", price: "$5.00", description: "Bright and fruity with floral undertones" },
      { name: "Cold Brew Special", price: "$4.00", description: "Smooth, bold, and refreshing - steeped for 12 hours" }
    ]
  },
  {
    category: "Specialty Drinks",
    items: [
      { name: "Lavender Honey Latte", price: "$5.50", description: "Espresso with steamed milk, lavender, and local honey" },
      { name: "Cinnamon Cappuccino", price: "$5.00", description: "Rich espresso with cinnamon and pure maple syrup" },
      { name: "Iced Vanilla Macchiato", price: "$5.25", description: "Espresso over vanilla-infused milk with caramel drizzle" }
    ]
  },
  {
    category: "Fresh Pastries",
    items: [
      { name: "Artisan Croissants", price: "$3.50", description: "Buttery, flaky pastries baked fresh daily" },
      { name: "Blueberry Scones", price: "$3.00", description: "Made with local blueberries and served warm" },
      { name: "Coffee Cake Slice", price: "$4.00", description: "Moist cake with cinnamon streusel topping" }
    ]
  }
];

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="menu-content">
        <h2>Signature Menu</h2>
        <div className="menu-cards">
          {menuItems.map((section, index) => (
            <div key={index} className="menu-card">
              <h3 className="menu-category">{section.category}</h3>
              <br />
              <ul className="menu-list">
                {section.items.map((item, idx) => (
                  <li key={idx} className="menu-item">
                    <div className="menu-item-header">
                      <span className="item-name">{item.name}</span>
                      <span className="item-price">{item.price}</span>
                    </div>
                    <p className="item-description">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="menu-button-container">
        <button className="menu-button">View More Items</button>
      </div>
      
    </section>
  );
};

export default Menu;
