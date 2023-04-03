import React from "react";
import SpecialWeeksCard from "./SpecialWeeksCard";
import Dessert from "../../assets/food/Dessert.avif";
import Salad from "../../assets/food/Salad.avif";
import Bruschetta from "../../assets/food/bruschetta.jpeg";
import "./WeekSpecials.css";

function WeekSpecials() {
  return (
    <section>
      <div className="special-offer-container">
        <article className="special-offer-heading">
          <h1>This weeks spacials</h1>
          <button>
            <a href="#">Menu</a>
          </button>
        </article>
        <section className="special-offer-card">
          <SpecialWeeksCard
            image={Salad}
            name="Meat salad"
            price="$13"
            description="This week salad , fresh with meet lettuce tomato and sesame"
          />
          <SpecialWeeksCard
            image={Bruschetta}
            name="Bruschetta"
            price="$12.50"
            description="Toasted bread, topped with tomato, prosciutto. Seasoned with salt and olive oil."
          />
          <SpecialWeeksCard
            image={Dessert}
            name="Lemon pie"
            price="$11.25"
            description="Fresh baked lemon pie. Powdered in citrus and lemon zest."
          />
        </section>
      </div>
    </section>
  );
}

export default WeekSpecials;
