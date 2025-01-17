import { Container, Card, Col, Row } from 'react-bootstrap'
import './services.css'
import iconOne from './1.svg'
import iconTwo from './2.svg'
import iconThree from './3.svg'
import iconFour from './4.svg'
import iconFive from './5.svg'
import iconSix from './6.svg'
import iconSeven from './7.svg'
import iconEight from './8.svg'

const Services =()=>{
    return(
        <>
            <Container fluid className='container-style container-style-two'>
                <p className='text-center text-containerNext'>Our Consulting Specialities</p>
                <p className='text-center text-para'>Our Canadian online doctors can address various conditions. Easily schedule virtual visits with specialists, such as mental health, dermatology, and pediatric primary care, all from the comfort of your home.</p>

                {/* Homepage Card Section */}

                <Container className='container-card'>
                    <Row xs={1} md={2} lg={4}>
                        {/* First Card */}
                        <Col>
                            <Card className='card-box'>
                            <Card.Img variant="top" src={iconOne} alt="Image" className='iconImage'/>
                                <Card.Body>
                                    <Card.Title className='medicine-text'>General Medicine</Card.Title>
                                    
                                    <Card.Text className='medicine-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Second Card */}
                        <Col>
                            <Card className='card-box'>
                            <Card.Img variant="top" src={iconTwo} alt="Image" className='iconImage'/>
                                <Card.Body>
                                    <Card.Title className='medicine-text'>Dermatology</Card.Title>
                                    <Card.Text className='medicine-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Third Card */}
                        <Col>
                            <Card className='card-box'>
                            <Card.Img variant="top" src={iconThree} alt="Image" className='iconImage'/>
                                <Card.Body>
                                    <Card.Title className='medicine-text'>Psychiatry</Card.Title>
                                    <Card.Text className='medicine-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Fourth Card */}
                        <Col>
                            <Card className='card-box'>
                                <Card.Body>
                                <Card.Img variant="top" src={iconFour} alt="Image" className='iconImage'/>
                                    <Card.Title className='medicine-text'>Internal Medicine</Card.Title>
                                    <Card.Text className='medicine-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container className='container-card-two'>
                    <Row xs={1} md={2} lg={4}>
                        {/* First Card */}
                        <Col>
                            <Card className='card-box'>
                            <Card.Img variant="top" src={iconFive} alt="Image" className='iconImage'/>
                                <Card.Body>
                                    <Card.Title className='medicine-text'>Pediatrics</Card.Title>
                                    <Card.Text className='medicine-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Second Card */}
                        <Col>
                            <Card className='card-box'>
                            <Card.Img variant="top" src={iconSix} alt="Image" className='iconImage'/>
                                <Card.Body>
                                    <Card.Title className='medicine-text'>Gyanecology</Card.Title>
                                    <Card.Text className='medicine-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Third Card */}
                        <Col>
                            <Card className='card-box'>
                            <Card.Img variant="top" src={iconSeven} alt="Image" className='iconImage'/>
                                <Card.Body>
                                    <Card.Title className='medicine-text'>Orthopedics</Card.Title>
                                    <Card.Text className='medicine-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Fourth Card */}
                        <Col>
                            <Card className='card-box'>
                            <Card.Img variant="top" src={iconEight} alt="Image" className='iconImage'/>
                                <Card.Body>
                                    <Card.Title className='medicine-text'>Endocrinology</Card.Title>
                                    <Card.Text className='medicine-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default Services;