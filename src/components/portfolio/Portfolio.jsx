import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

/*Creates the ability to add and change projects*/
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Simple Perl-Like Programming Language',
    github: 'https://github.com/FortisN7/CS280-016',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'E-Commerce Site',
    github: 'https://github.com/FortisN7/IT202-008',
    demo: 'https://nff4-prod-it202.herokuapp.com/project/shop.php'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Connect4 Game',
    github: 'https://github.com/FortisN7/Connect4-Game',
    demo: 'https://studio.code.org/projects/applab/pc6ZZpdFVBmJuMnsmkHA7kcf0LGDNdM90SGyfcKMenI'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Housing Price Prediction Model',
    github: 'https://github.com/FortisN7/Interpretable-Gradient-Boosting',
    demo: 'https://youtu.be/P2eq4WKcfQY' //TODO make https://sites.google.com/njit.edu/house-pred-lightgbm-model/ work and replace demo link with it
  },
  {
    id: 5,
    image: IMG5,
    title: 'Simple Square HTML5 Canvas Game',
    github: 'https://github.com/FortisN7/IT202-008/tree/prod/public_html/M6',
    demo: 'https://nff4-prod-it202.herokuapp.com/M6/html5.html'
  },
  {
    id: 6,
    image: IMG6,
    title: 'This Portfolio Website! (Inception)',
    github: 'https://github.com/FortisN7/FortisN7.github.io',
    demo: 'https://nickfortis.me'
  }
]

// Maybe add some coding challenge problems if you plan to make those, just solve, and make a UI so people can use it.
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
             </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio