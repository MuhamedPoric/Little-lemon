import React from "react";
import Card from "./ui/Card";
import saladImg from "../assets/salad.jpg";
import spaghetti from "../assets/spaghetti.jpg";
import bruchetta from "../assets/bruchetta.jpg";

import classes from "./Hightlights.module.css";

export default function Hightlights() {
  return (
    <section className={classes.Hightlights}>
      <div>
        <div className={classes.titleContainer}>
          <h1>This weeks specials</h1>
          <div className={classes.ButtonLayout}>
            <button
              className={classes.thisCode}
              onClick={() => {}}
            >
              Online Menu
            </button>
          </div>
        </div>
      </div>

      <div className={classes.cardContainer}>
        <Card
          image={saladImg}
          name="Greek Salad"
          title="Greek Salad"
          price="$12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago..."
        />
        <Card
          image={bruchetta}
          name="Bruschetta"
          title="Bruschetta"
          price="$5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic..."
        />
        <Card
          image={spaghetti}
          name="Grilled Fish"
          title="Grilled Fish"
          price="$20.00"
          description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor..."
        />
      </div>
    </section>
  );
}
