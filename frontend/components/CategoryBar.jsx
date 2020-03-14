import React from "react";
import Link from "next/link";
import Query from "../components/query";
import CATEGORIES_QUERY from "../apollo/queries/category/categories";

const CategoryBar = () => {
  return (
    <Query query={CATEGORIES_QUERY} id={null}>
      {({ data: { categories } }) => {
        return (
          <nav>
            <ul>
              {categories.map((category, i) => {
                return <li>{category.name}</li>;
              })}
            </ul>
          </nav>
        );
      }}
    </Query>
  );
};

export default CategoryBar;
