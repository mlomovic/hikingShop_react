import React from 'react';
import HeroHeader from '../components/HeroHeader';
import FeaturedItems from '../components/FeaturedItems';

const Home = () => {
  return (
    <>
      <HeroHeader />
      <FeaturedItems />

      <section className="subscribe">
        <article className="container">
          <h3>Subscribe on Hiking shop now!</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Fuga accusantium labore voluptatum laudantium id, rem optio nemo minus voluptatibus voluptas.</p>
          <form>
            <input type="text" placeholder="Your email...."/>
              <input type="submit" value="Subscribe"/>
              </form>
            </article>
          </section>

        </>
        )
}

        export default Home;