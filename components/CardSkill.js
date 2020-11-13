import React from 'react';
import Bounce from 'react-reveal/Bounce';

function CardSkill({ skillData }) {
    return (
        <Bounce>
            <div className="containerskill"  >
                <div><h3>{skillData.title}</h3></div>
                <div className="skill_font" dangerouslySetInnerHTML={{ __html: skillData.contentHtml }} />
            </div>
            <style jsx>{`
                .containerskill{
                    background-color:#DAE3E5 ;
                    color:#00212D;
                    padding: 1rem;
                    border-radius:.5rem .5rem 2rem .5rem;
                    -webkit-box-shadow: -1px 3px 6px -2px rgba(33,32,33,0.68);
                    -moz-box-shadow: -1px 3px 6px -2px rgba(33,32,33,0.68);
                    box-shadow: -1px 3px 6px -2px rgba(33,32,33,0.68);
                    background-image:url(/images/${skillData.image}) ;
                    background-repeat: no-repeat;
                    background-position: top right;
                    background-size: contain;
                }

                .containerskill:hover{
                    background-color: #FFFFFF;
                }      
                .skill_font{
                    font-size: 1em;
                }
            `}</style>   
           </Bounce>
    );
}

export default CardSkill;