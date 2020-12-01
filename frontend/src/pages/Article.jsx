import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/core';
import styled from 'styled-components';

const StyledWelcome = styled.section`
    display:block; 
    width=100%;
    background-color: #f0f5f5;
    padding: 6em;
`;

const data = {
        id: 2,
        title: "Artikkeltittel 2",
        author: "Forfatter",
        date: "05.12.20",
        category: "Kategorinavn",
        ingress: "Dette er ingressen. Vi pusser opp små og mellomstore bad for privatkunder og " +
        "entreprenører. Vi er opptatt av god kvalitet og bruker kun de beste rørleggerne i alt vi " +
        "foretar oss. Vi hjelper deg med å planlegge drømmebadet ditt fra A til Å! Med hjertet for " +
        "faget yter vi kvalitet i alle ledd for at du skal være i trygge hender.",
        content:[
            {
                subtitle:"Undertittel",
                content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero " +
                "eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea " +
                "takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
                "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
                "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo " +
                "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem " +
                "ipsum dolor sit amet. " +
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero " +
                "eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea " +
                "takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
                "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
                "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo " +
                "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem " +
                "ipsum dolor sit amet."
            },
            {
                subtitle:"Undertittel",
                content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero " +
                "eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea " +
                "takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
                "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
                "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo " +
                "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem " +
                "ipsum dolor sit amet. " +
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero " +
                "eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea " +
                "takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
                "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
                "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo " +
                "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem " +
                "ipsum dolor sit amet."
                },        
            {
                subtitle:"Undertittel",
                content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero " +
                "eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea " +
                "takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
                "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
                "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo " +
                "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem " +
                "ipsum dolor sit amet. " +
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod " +
                "tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero " +
                "eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea " +
                "takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, " +
                "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
                "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo " +
                "dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem " +
                "ipsum dolor sit amet."
                },       
    ],    
        imgage: "https://www.gamereactor.no/media/65/_1976583.jpg"
    }

function  Article() { 
    
    return( 
    <>
        <StyledWelcome>
            <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">ArtikkelTittel</Heading>
        </StyledWelcome>
        <div className="article_body">
            <div className="article_header">
                <p>Av {data.author}</p>
                <p className="article_date">{data.date}</p>
            </div>
            <p>{data.ingress}</p>
            {data.content.map((content) => 
            <div>
                <h2>{content.subtitle}</h2>
                <p>{content.content}</p>
            </div>
            )}
            <p><b>{data.category}</b></p>
            <div>
                <button className="article_delete_btn">SLETT</button>
                <button className="article_edit_btn">REDIGER</button>
            </div>
        </div>
    </>    
    )
}    
    
export default Article;