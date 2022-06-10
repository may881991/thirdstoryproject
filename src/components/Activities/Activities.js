import React from 'react';
import './Activities.css';
import NavBar from "../Nav/NavBar";
import Card from "../Card/Card";
import { Container, Row, Col , ListGroup,Pagination } from "react-bootstrap";
import Footer from '../Footer/Footer';
import treeImg from "../../assets/images/tree.png";
import py1 from "../../assets/images/py1.png";
import activities1Img from "../../assets/images/activities1.png";
import activities2Img from "../../assets/images/activities2.png";
import activities3Img from "../../assets/images/activities3.png";
const data = [
    {
      title: "Stories of Friendship",
      description : "Stories of Friendship is a collaboration with Swe Tha Har Organization for peace and tolerance storytelling trainings in four places for three years. It started in 2017 and will go until 2019. Targeted places are Pathein, Htilin, Loikaw and Taunggyi. We provide three-day trainings for peace education and building and another three days is for storytelling training which includes story writing and rehearsal for storytelling event. We will encourage the participants to engage with the community and let them find existing peace stories from their community. We will choose a story from each area to produce. At the end of the year, we will have a storytelling event where all participants from four places will meet together.",
      releaseDate: "May 20th 2020",
      url: "",
      enroll: false,
      img: activities1Img
    },
    {
      title: "Stories of Change",
      description : "Stories for Change is a partnership between the Myanmar Storytellers, Myanmar Art Social Project (MASc), Thukhuma Travelers and the Third Story Project.  By using laughter, creativity and awareness of emotions and needs, we enable participants to experience the power of being heard and understand the positive psycho-social impact of creating those kind of opportunities for communities. In the 4-day training, we explore how to create stories and performances that come from the participants and encourage the participation of the community.",
      releaseDate: "Mar 31th 2022",
      url: "",
      enroll: false,
      img: activities2Img
    },
    {
      title: "Child Rights Training",
      description : "Child rights training is targeted at adolescents as participants.  We work with youth and discuss child rights through game and story. We then work with the participants to create their own stories. Eight of the most recent Third Story books were written by participants from those trainings. ",
      releaseDate: "Mar 31th 2022",
      url: "https://forms.gle/R2mK4MCMasyXPHR19",
      enroll: true,
      img: activities3Img
    },
    {
      title: "Stories of Change",
      description : "Stories for Change is a partnership between the Myanmar Storytellers, Myanmar Art Social Project (MASc), Thukhuma Travelers and the Third Story Project.  By using laughter, creativity and awareness of emotions and needs, we enable participants to experience the power of being heard and understand the positive psycho-social impact of creating those kind of opportunities for communities. In the 4-day training, we explore how to create stories and performances that come from the participants and encourage the participation of the community.",
      releaseDate: "Mar 31th 2022",
      url: "",
      enroll: false,
      img: activities2Img
    },
    {
      title: "Child Rights Training",
      description : "Child rights training is targeted at adolescents as participants.  We work with youth and discuss child rights through game and story. We then work with the participants to create their own stories. Eight of the most recent Third Story books were written by participants from those trainings. ",
      releaseDate: "Mar 31th 2022",
      url: "https://forms.gle/R2mK4MCMasyXPHR19",
      enroll: true,
      img: activities3Img
    },
    {
      title: "Stories of Friendship",
      description : "Stories of Friendship is a collaboration with Swe Tha Har Organization for peace and tolerance storytelling trainings in four places for three years. It started in 2017 and will go until 2019. Targeted places are Pathein, Htilin, Loikaw and Taunggyi. We provide three-day trainings for peace education and building and another three days is for storytelling training which includes story writing and rehearsal for storytelling event. We will encourage the participants to engage with the community and let them find existing peace stories from their community. We will choose a story from each area to produce. At the end of the year, we will have a storytelling event where all participants from four places will meet together.",
      releaseDate: "May 20th 2020",
      url: "",
      enroll: false,
      img: activities1Img
    }
];
let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
items.push(
    <Pagination.Item key={number} active={number === active}>
    {number}
    </Pagination.Item>,
);
}
function Activities(){
    return(
        <Container fluid className='sidebarBg'>
            <NavBar bg="light"/>
            <Container fluid className='banner'>
                <Row>
                    <Col md={2} className="py-3">
                    {<img src={treeImg} alt={treeImg} className="bannerImg1 img-fluid"/> }
                    </Col>
                    <Col md={8} className="text-center bannerText">
                    <h2>Our Activities</h2>
                    <p className='px-5'>The Third Story Project offers a variety of trainings for different groups. Working with the Myanmar Storytellers and other talented professionals, we help people understand the power of storytelling.</p>
                    </Col>
                    <Col md={2}>
                    {<img src={py1} alt={py1} className="bannerImg3 img-fluid"/> }
                    </Col>
                </Row>
            </Container>
            <Container className='activitiesLists'>
              <Row>
                <Col md={2}>
                  <h5>Categories</h5>
                  <hr/>
                  <ListGroup>
                    <ListGroup.Item>Our Attivities</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={10} className="row">
                  {data.map((card, i) => {
                      return (
                        <Card
                          key={i}
                          bookCover={card.img}
                          title={card.title}
                          desc={card.description}
                          date={card.releaseDate}
                        />
                      );
                    })}
                    <Pagination>
                      <Pagination.Prev />
                      {items}
                      <Pagination.Next />
                    </Pagination>
                </Col>
              </Row>
            </Container>
            <Footer />
        </Container>
    );
}

export default Activities;