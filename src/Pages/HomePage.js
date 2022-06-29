import React from "react";
import { Link } from "react-router-dom";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import { TiCompass } from "react-icons/ti";
import { GiDiamondHard, GiScrollUnfurled } from "react-icons/gi";
import FeaturedProducts from "../Components/FeaturedProducts";
const HomePage = () => {
  return (
    <main className="main">
      <section className="hero">
        <article className="hero-text">
          <h3>Design Your Comfort Zone </h3>
          <p>
            Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Iusto, At
            Sed Omnis Corporis Doloremque Possimus Velit! Repudiandae Nisi Odit,
            Aperiam Odio Ducimus, Obcaecati Libero Et Quia Tempora Excepturi
            Quis Alias?Sed Omnis Corporis Doloremque Possimus Velit! Repudiandae
            Nisi Odit, Nisi Odit, Aperiam Odio Ducimus, Obcaecati Libero Et
          </p>
          <Link to="products" className="btn">
            Shop Now
          </Link>
        </article>
        <article className="hero-images">
          <div className="background"></div>
          <div className="hero-large">
            <img src={img1} alt="hero" className="large-hero" />
          </div>
          <div className="small-large">
            <img src={img2} alt="hero" className="small-hero" />
          </div>
        </article>
      </section>
      <section className="featured">
        <h3>Featured</h3>
        <div className="underline"></div>
        <FeaturedProducts />
        <Link to={"products"} className="btn error-btn">
          All Products
        </Link>
      </section>
      <section className="services">
        <div className="service-info">
          <h3>Custom Furniture Built Only For You</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Saepe
            Dolorum Debitis Consectetur Reprehenderit Non Aliquam Voluptates
            Dolore Aut Vero Consequuntur.
          </p>
        </div>
        <div className="service-cards-container">
          <article className="service-card">
            <div className="service-header">
              <TiCompass className="service-icon" />
            </div>
            <div className="service-body">
              <h4>Mission</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </article>
          <article className="service-card">
            <div className="service-header">
              <GiScrollUnfurled className="service-icon" />
            </div>
            <div className="service-body">
              <h4>History</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </article>
          <article className="service-card">
            <div className="service-header">
              <GiDiamondHard className="service-icon" />
            </div>
            <div className="service-body">
              <h4>Vision</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="newsletter">
        <div className="news-text">
          <h4>Join our newsletter and get 20% off</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
        </div>
        <form
          className="news-form"
          action="https://formspree.io/f/xoqrzjpv"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="news-input"
          />
          <button type="submit" className="btn submit-btn">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
};

export default HomePage;
