interface TestimonialProps {
    name: string;
    dialog: string;
    headshot: string;
    linkedin: string;
    textSide: string;
}

function Testimonial({name, dialog, headshot, linkedin, textSide}: TestimonialProps) {
    if(textSide == "left") {
      return (
        <div className="testimonial">
          <div className="dialog">
            <p> {dialog} </p>
          </div>
          <div className="head-and-name">
            <a href={linkedin}> <img src={headshot}/> </a>
            <h3> {name} </h3>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="testimonial">
          <div className="head-and-name">
            <a href={linkedin}> <img src={headshot}/> </a>
            <h3> {name} </h3>
          </div>
          <div className="dialog">
            <p> {dialog} </p>
          </div>
        </div>
      );
    }
}

export default Testimonial;