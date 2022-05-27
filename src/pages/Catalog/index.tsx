import React from "react";
import "./Catalog.scss";

import item_1 from "../../assets/catalog_menu/item-1.jpg"
import item_2 from "../../assets/catalog_menu/item-2.jpg"
import item_3 from "../../assets/catalog_menu/item-3.jpg"
import { Link } from "react-router-dom";
import Routers from "../../routers"

const Catalog = () => {
  return (
    <section className="catalog-wrapper">
      <div className="catalog-header">
      </div>
      <div className="container">
        <h2 className="catalog catalog-text">КАТАЛОГ</h2>
        <div className="catalog catalog-items">
          <Link
            to={Routers.DOORSCALC}
            className="catalog-item"
            style={{
              backgroundImage: `url(${item_1})`,
            }}
          >
            <div className="catalog-item_hovered">
              <h4 className="catalog-item_hovered-title">ДВЕРІ</h4>
            </div>
          </Link>
          <Link
            to={Routers.STAIRSCALC}
            className="catalog-item"
            style={{
              backgroundImage: `url(${item_2})`,
            }}
          >
            <div className="catalog-item_hovered">
              <h4 className="catalog-item_hovered-title">СХОДИ</h4>
            </div>
          </Link>
          <Link
            to={Routers.KITCHENCALC}
            className="catalog-item"
            style={{
              backgroundImage: `url(${item_3})`,
            }}
          >
            <div className="catalog-item_hovered">
              <h4 className="catalog-item_hovered-title">КУХНІ</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="background-2"></div>
    </section>
  );
};


export default Catalog;
