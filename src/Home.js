import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/CBCC_Aug2020/hero/NTB_P_2x._CB406898950_.jpg"
        alt="Amazon banner"
      />
      <div className="home__row">
        <Product
          id="12345"
          title="For efficient home working For efficient home working For efficient home working"
          price="500"
          rating="3.3"
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_758x608._SY608_CB430182042_.jpg"
        />
        <Product
          id="12345"
          title="For efficient home working For efficient home working For efficient home working"
          price="500"
          rating="3.3"
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_758x608._SY608_CB430182042_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12345"
          title="For efficient home working"
          price="500"
          rating="3.3"
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_758x608._SY608_CB430182042_.jpg"
        />
        <Product
          id="12345"
          title="For efficient home working"
          price="500"
          rating="3.3"
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_758x608._SY608_CB430182042_.jpg"
        />
        <Product
          id="12345"
          title="For efficient home working"
          price="500"
          rating="3.3"
          imageUrl="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_758x608._SY608_CB430182042_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
