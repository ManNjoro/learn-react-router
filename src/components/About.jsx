import about from '../images/about-hero.png'
export default function About() {
  return (
    <div className="about">
      <img className="about-img" alt='about-hero' src={about}></img>
      <div className='about-content'>
        <p className="sedan">Don't squeeze in a sedan when you could relax in a van</p>
        <p>
            loremNostrud exercitation sunt aliquip culpa mollit fugiat incididunt ut
            ipsum est. Et exercitation proident dolor veniam incididunt. Pariatur
            dolore veniam cillum commodo reprehenderit dolore nostrud et
            reprehenderit ullamco nisi ad ad. Irure minim do ea fugiat nisi ipsum
            officia. Sint cillum cupidatat ut anim eu velit et. Ex nulla nulla
            tempor in ad nostrud non nostrud eu aute ut amet. Enim cillum fugiat
            ipsum sit minim labore nisi quis duis dolore ea est irure non.
        </p>
        <p>Nulla labore occaecat voluptate consectetur enim exercitation ullamco ea magna sit veniam consectetur duis irure.</p>
        <div className="explore">
            <h3>
                Your destination is waiting.<br></br>
                Your van is ready
            </h3>
            <button className="explore-btn">Explore our vans</button>
        </div>
      </div>
      
    </div>
  );
}
