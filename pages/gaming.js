import { Container } from 'react-bootstrap'
import MyImage from "../components/myimage"


export default function Gaming() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">GAMING</h1>
      </Container>

      <Container fluid className="p-5 section">
        <h4 className="text-left mb-4 display-text">TRITON SMASH TOURNAMENT</h4>
        <p className="text-left caption-text mb-1">12:00 PM: Venue Opens for Friendlies and Sign-ups</p>
        <p className="text-left caption-text mb-4">1:00 PM: Bracket Begins</p>
        <p>Want to play games with others in the San Diego area? Look forward to a Super Smash Bros. Ultimate Tournament at the Red Shoe and Bear rooms in the Sun God Lounge!</p>
        <p className="mb-4"><a href="https://smash.gg/tournament/animefest-2022/details">Find more information and sign up for free here.</a> Entrants must bring their own controller.</p>
        <MyImage src="images/smashbros.jpg" alt="Super Smash Bros gameplay" className="mw-100 border-stroke mx-auto d-block" />
      </Container>
    </>
  )
}