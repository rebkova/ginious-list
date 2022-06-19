// displays all cocktails from the original API (in a carousel ? 
// = > is that the best display method for 100 cocktails?)

import React, { ReactElement } from "react";

import CarouselCard from "./CarouselCard";

const PublicCocktailList = (): ReactElement => {


  return (<div>
    <CarouselCard />
  </div>)
}


export default PublicCocktailList;