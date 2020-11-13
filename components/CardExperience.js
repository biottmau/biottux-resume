import React from 'react';
import Flash from 'react-reveal/Flash';

function CardExperience({ expData }) {
    return (
        <>
            <div className="container-exp">
                <div className="container-exp-logo">
                    <Flash>
                    <div>
                        <img src={"/images/"+expData.logo} />
                    </div>
                    </Flash>
                </div>
                <div className="container-exp-detail">
                    <div>
                    <h1> {expData.title}</h1>
                    <div className="exp_font" dangerouslySetInnerHTML={{ __html: expData.contentHtml }} />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .container-exp{
                    background-color:#EFEFEF ;
                    color:#00212D;
                    border-radius:.5rem .5rem .5rem .5rem;
                    -webkit-box-shadow: -1px 3px 6px -2px rgba(33,32,33,0.28);
                    -moz-box-shadow: -1px 3px 6px -2px rgba(33,32,33,0.28);
                    box-shadow: -1px 3px 6px -2px rgba(33,32,33,0.28);
                    width:100%;
                    display:flex;
                    margin-bottom:1rem;
                    flex-direction:row;
                }


                .container-exp-logo{
                    flex:30%;
                    display:flex;
                    justify-content: center;
                    align-items:center;
                    background-color:#003B4F;
                    border-radius:.5rem .5rem 2rem .5rem;
                    padding:1rem;
                }

                .container-exp-detail{
                    flex:70%;
                    padding:1rem;
                    flex-wrap: wrap;   

                }
            
                @media screen and (max-width: 992px) {
                    .container-exp{
                        flex-direction:column;
                    }
                    .container-exp-detail{
                        padding:.2rem;
                    }
                }
                
                .exp_font{
                    font-size:1em;
                }
            `}</style>

        </>
    )
}

export default CardExperience;