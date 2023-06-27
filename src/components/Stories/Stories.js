import React, { useState, useEffect } from 'react';
import NavBar from "../Nav/NavBar";
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import { Container, Row, Col } from "react-bootstrap";
import deeKu from "../../assets/images/dee-ku.png";
import paceofHeart from "../../assets/images/Peace-from-heart.png";
import { Player, BigPlayButton } from 'video-react';
import video1 from "../../assets/videos/video1.mp4";
import thumbnail1 from "../../assets/images/video-thumbnail1.png";
import '../../../node_modules/video-react/dist/video-react.css';
import './Stories.css';
import { getStoriesData } from '../../firebase';
import { BsFlower1 } from "react-icons/bs";

function Stories(){
    const [loading, setLoading] = useState(true)
    const [isMobile, setMobile] = useState(true)
    const [storyData , setData] = useState([]);
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
        const getMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        setMobile(getMobile) 
        getStoriesData().then((lists) => {
            let storyArr = []
            lists.forEach((ele) => {
              var data = ele.data();
              storyArr.push(data);
            });
            setData(storyArr)
            setTimeout(() => setLoading(false), 500)
          }).catch(() => setLoading(false));
    }, [])

    return (
    <>
    {loading === false ? (
        <Container fluid className='sidebarBg paddingZero'>
            <NavBar bg="light"/>
            <Container fluid className='banner'>
                <Row>
                    {isMobile !== true && ( 
                        <Col md={2} className="py-3">
                            {<img src={deeKu} alt={deeKu} className="bannerImg1 img-fluid"/> }
                        </Col>
                    )}
                    <Col md={8} className="text-center bannerText">
                    <h2>Listen our Stories</h2>
                    <p className='storyText'>We work with many other amazing organizations who also believe in bringing wonderful stories to children. Many have used our books for videos and other interactive learning tools. Below are videos of our stories done by our partners and volunteers. Happy listening! </p>
                    </Col>
                    {isMobile !== true && ( 
                        <Col md={2}>
                            {<img src={paceofHeart} alt={paceofHeart} className="bannerImg4 img-fluid"/> }
                        </Col>
                    )}
                </Row>
            </Container>
            <Container>
                <Row className='mb-5'>
                    <Col md={6} className='storyFrameBox'> 
                        <h5 className='py-3'> <BsFlower1 fill='#102E46' className='me-2'/> What are Child Rights?</h5>
                        <Player src={video1} poster={thumbnail1}> 
                            <BigPlayButton position="center" />
                        </Player>
                    </Col> 
                    {storyData.map((data, i) => ( 
                        <Col md={6} className='storyFrameBox'> 
                            <h5 className='py-3'><BsFlower1 fill='#102E46' className='me-2'/>{data.title}</h5>
                            <iframe width="100%" height="80%" src={data.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Col> 
                    ))} 
                </Row>
            </Container>
        <Footer />
    </Container>
    ) : (
    <Loading />
    )}
    </>
  );

}

export default Stories;