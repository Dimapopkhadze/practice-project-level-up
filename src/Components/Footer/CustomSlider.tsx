import {
  AccordionStyled,
  FooterContainer,
  StyledDiv,
} from "../Styles/FooterStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type propTypes = {
  settings: {};
  slides: { id: number; img: string }[];
};

const CustomSlider = (props: propTypes) => {
  return (
    <StyledDiv>
      <Slider className="partners__slider" {...props.settings}>
        {props.slides.map((item) => (
          <div>
            <img key={item.id} className="img" src={`/img/${item.img}`} />
          </div>
        ))}
      </Slider>
    </StyledDiv>
  );
};
export default CustomSlider;
