import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Foodies from '../../assets/images/Food-s.jpeg'
import Fuzzy from '../../assets/images/fuzzy-friend-finders.png'
import Team from '../../assets/images/Team-Profile-Generator.png'
import Registry from '../../assets/images/The-Registry.jpeg'
import Quiz from '../../assets/images/timed-quiz.png'
import Weather from '../../assets/images/Weather-App.png'


function Projects() {
  return (
    <Card style={{ width: '18rem' }}>
      <div>
        <Card.Img variant="top" src={Foodies} />
        <Card.Body>
          <Card.Title>The Foodies</Card.Title>
          <Card.Text>
            An application using API databases to find meals and update custom user reviews.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </div>
      <div>
        <Card.Img variant="top" src={Fuzzy} />
        <Card.Body>
          <Card.Title>Fuzzy-Friend-Finder</Card.Title>
          <Card.Text>
            An application using API databases to find animals that are up for adoption in your area. 
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </div>
      <div>
        <Card.Img variant="top" src={Team} />
        <Card.Body>
          <Card.Title>Team Profile Generator</Card.Title>
          <Card.Text>
            A javascript application that allows the user to track their work team members and tasks. 
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </div>
      <div>
        <Card.Img variant="top" src={Registry} />
        <Card.Body>
          <Card.Title>The Registry</Card.Title>
          <Card.Text>
            This is a registry application that allows the user to purchase or commit monetray amounts to a specific registry.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </div>
      <div>
        <Card.Img variant="top" src={Quiz} />
        <Card.Body>
          <Card.Title>Quiz App</Card.Title>
          <Card.Text>
            This is a javascript application that allows the user to play in a timed quiz and learn about JS!
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </div>
      <div>
        <Card.Img variant="top" src={Weather} />
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Text>
            This application uses a weather API database to find the weather in your desired city and then see the forcast for the next 5 days. 
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Projects;