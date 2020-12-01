import React, { useState }from 'react';
import { Heading } from '@chakra-ui/core';
import styled from 'styled-components';

const StyledWelcome = styled.section`
    display:block; 
    width=100%;
    background-color: #f0f5f5;
    padding: 6em;
`;

function  Articles() { 
    
    
    return( 
    <>
        <StyledWelcome>
            <Heading fontSize="5em" fontFamily="''Heebo', sans-serif">Fagartikler</Heading>
        </StyledWelcome>
        <div className="article_body">
            <div className="article-btns">
                <button className="article-newarticle-btn">NY ARTIKKEL</button>
                <div className="article-search-btns">
                    <button className="article-search-btn">SØK</button>
                    <button className="article-search-btn">FILTER</button>
                </div>
            </div>
            <div className="articles">
                <div className="article">
                    <img className="article_image" src="https://www.gamereactor.no/media/65/_1976583.jpg" alt="Bilde av Rørlegger" width="128" height="128"></img>
                    <div>
                        <div className="article_header">
                            <h1 className="article_title">Artikkeltittel</h1>
                            <p className="article_category"><b>Kategorinavn</b></p>
                        </div>
                        <p> Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god
                            kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge
                            drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i
                            trygge hender</p>
                    </div>
                </div>
                <div className="article">
                    <img className="article_image" src="https://www.gamereactor.no/media/65/_1976583.jpg" alt="Bilde av Rørlegger" width="128" height="128"></img>
                    <div>
                        <div className="article_header">
                            <h1 className="article_title">Artikkeltittel</h1>
                            <p className="article_category"><b>Kategorinavn</b></p>
                        </div>
                        <p> Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god
                            kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge
                            drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i
                            trygge hender</p>
                    </div>
                </div>
                <div className="article">
                    <img className="article_image" src="https://www.gamereactor.no/media/65/_1976583.jpg" alt="Bilde av Rørlegger" width="128" height="128"></img>
                    <div>
                        <div className="article_header">
                            <h1 className="article_title">Artikkeltittel</h1>
                            <p className="article_category"><b>Kategorinavn</b></p>
                        </div>
                        <p> Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god
                            kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge
                            drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i
                            trygge hender</p>
                    </div>
                </div>
                <div className="article">
                    <img className="article_image" src="https://www.gamereactor.no/media/65/_1976583.jpg" alt="Bilde av Rørlegger" width="128" height="128"></img>
                    <div>
                        <div className="article_header">
                            <h1 className="article_title">Artikkeltittel</h1>
                            <p className="article_category"><b>Kategorinavn</b></p>
                        </div>
                        <p> Vi pusser opp små og mellomstore bad for privatkunder og entreprenører. Vi er opptatt av god
                            kvalitet og bruker kun de beste rørleggerne i alt vi foretar oss. Vi hjelper deg med å planlegge
                            drømmebadet ditt fra A til Å! Med hjertet for faget yter vi kvalitet i alle ledd for at du skal være i
                            trygge hender</p>
                    </div>
                </div>
            </div>
        </div>
    </>    
    )
}    
    
export default Articles;
