import PageHeader from "../components/pageheader"
import {Row, Col, Container} from "react-bootstrap"
import Link from "next/link"
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from "react";
import {useRouter} from "next/dist/client/router"
import MyImage from "../components/myimage"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

const History = () => {
  const cardInfo = [
    { image: "images/gallery/1999_logo_upscale.jpg", title: "1999", text: "Founding of AME"},
    { image: "images/gallery/2015_sungodchibi.png", title: "2014-15", text: "text 2"},
    { image: "images/gallery/2018_sungodref.jpg", title: "2017-18", text: "text 3"},
    { image: "images/gallery/2020_afconcept.png", title: "2020", text: "text 4"},
	{ image: "images/gallery/af23_sungod.png", title: "2022-3", text: "text 5"},
	{ image: "images/gallery/aggie_su23.png", title: "2023-4", text: "text 6"}
  ];

  return <section className="block">
	<PageHeader src="images/header_images/history_banner.jpg" className="mb-4">History</PageHeader>
    <Container fluid>
      <Row>
	  {
	  	cardInfo.map(renderCard => {
			return (
				<Col sm={4} key={renderCard.title}>
			<div className="holder">
			<Card>
				<Card.Img variant="top" src={renderCard.image} />
				<Card.Body>
					<Card.Title>{renderCard.title}</Card.Title>
					<Card.Text>
					{renderCard.text}
					</Card.Text>
				</Card.Body>
				</Card>
			</div>
        </Col>
			)
	  		})
		}
        
      </Row>
    </Container>
  </section>;
}

export default History;


/*
  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key = {index} className="box">
      <Card.Img variant="top" src ={card.image} />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
      </Card.Body>
    </Card>
    );
  };
  */

/*
function CardBackground({image}) {
    const router = useRouter()
    const myBackgroundStyle = {
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundImage: `url('${router.basePath}/${image}')`
    }
    return (
        <div className="w-100" style={myBackgroundStyle}></div>
    )
}

const History = ({banners, ...otherProps}) => {
    const [selectedId, setSelectedId] = useState('');
    const items = [
      {
        id: '1',
        title: '1999',
        subtitle: 'The Early Years',
        description: 'Something about the early years.',

      },
      {
        id: '2',
        title: '2022',
        subtitle: 'Information 2',
        description: 'Something about 2022 AME.',
      },
      {
        id: '3',
        title: '2023',
        subtitle: 'Information 3',
        description:
          'Something about 2023 AME.',
      },
      {
        id: '4',
        title: '2024',
        subtitle: 'Information 4',
        description:
          'Something about 2024 AME.',
      },
    ];

    return (
        
        <motion.div className="bg-purple-600 flex items-center justify-center h-screen">
        <PageHeader src="images/header_images/history_banner.jpg" className="mb-4">History</PageHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => (
              <motion.div
                className={`card bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-500 hover:scale-105 ${
                  selectedId === item.id ? 'card-selected' : ''
                }`}
                layoutId={`card-container-${item.id}`}
                onClick={() => setSelectedId(item.id)}
                key={item.id}
                initial={{ scale: 1 }}
                animate={{ scale: selectedId === item.id ? 1.1 : 1 }} // Increase scale on selected card
                transition={{ duration: 0.3 }}
              >
                <div className="card-content">
                  <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{item.title}</motion.h2>
                  <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
                  <CardBackground image={["image"]}/>
                </div>
              </motion.div>
            ))}
          </div>
    
          <AnimatePresence>
            {selectedId && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {items.map((item) => (
                  item.id === selectedId && (
                    <motion.div
                      className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                      layoutId={`card-container-${item.id}`}
                      key={item.id}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <motion.div className="relative">
                        <motion.button
                          className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                          onClick={() => setSelectedId('')}
                        >
                          Close
                        </motion.button>
                        <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{item.title}</motion.h2>
                        <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
                        <motion.p className="text-md text-gray-700 mb-4">{item.description}</motion.p>
                        <motion.p
                          className="text-md text-gray-700"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Additional content can go here!
                          <Col xs={12} sm={12} md={6} className="py-2">
                            <MyImage src="images/triton_sitting.png" alt="Triton sitting"
                                     className="w-100"></MyImage>
                        </Col>
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  )
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    };
    
    export default History;
*/
/*
export default function History() {
    return (
        <div className="min-vh-100">
            <PageHeader src="images/header_images/history_banner.jpg" className="mb-4">History</PageHeader>
            <Container className="mb-4">
                <p>Prior to 2022, Anime &amp; Manga Enthusiasts was known as Cal Animage Beta.</p>
                <p>&quot;Cal Animage&quot; is a loosely organized association of international anime clubs. The first
                    chapter, Cal
                    Animage Alpha, was founded at UC Berkeley in 1989. Our club, formerly known as Cal Animage Beta, was
                    established in
                    1990 as the second chapter. In 1992, Cal Animage chapters from multiple universities, including
                    UCSD, co-sponsored the first Anime Expo.</p>
                <p>Although anime distribution has increased in the United States, making it easier to purchase and
                    watch shows, Anime &amp; Manga Enthusiasts continues to host weekly anime showings as well as
                    bi-weekly off-campus or on-campus social events. Some of our events include karaoke, club dinner
                    socials, and Tea
                    Party, which is an anime marathon and potluck. Our largest event of the year is Animefest, an
                    on-campus convention that includes gaming, performances, Artist Alley, panels, and more!</p>
                <p>For more information on our showings or other upcoming events, check out
                    our <Link href='/'>&quot;events&quot; section on our website</Link>, or join our <a
                        href="https://discord.gg/Qkz9ZKv">Discord</a> or <a
                        href="https://www.facebook.com/groups/ucsdanimeclub">Facebook group</a> for updates.</p>
            </Container>
        </div>
    )
} */
