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

import HistoryData from "../data/history.json"

function HistoryDisplay ({history}) {
  return (
    <Col sm={4} key={history["year"]}>
			<div className="holder">
        <Card>
          <Card.Img className="card--img" variant="top" src={history["image"]} />
          <Card.Body>
          <Card.Title>{history["year"]}</Card.Title>
            <Card.Text>
              {history["text"]}
            </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Col>
  )
}

export default function History() {
  const historySorted = HistoryData["history"].sort((o1, o2) => o1["year"].localeCompare(o2["year"]));

  return (
    <section className="block"> 
    <PageHeader src="images/header_images/history_banner.jpg" className="mb-4">History</PageHeader>
        <Container fluid className="history--container">
          <Row>
            {historySorted.map((history, index) => (
              <HistoryDisplay history={history} key={index}/>
            ))}
          </Row>
        </Container>
    </section>
  )
}
	  
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
