import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';

function CardExperience({ expData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Solo activa una vez cuando es visible

  return (
    <>
      <div className="container-exp">
        <div className="container-exp-logo">
          <motion.div
            ref={ref}
            animate={isInView ? { opacity: [1, 0, 1] } : {}} // Ciclo de visibilidad
            transition={{
              duration: 1, // Duración de un ciclo completo
              ease: "easeInOut", // Transición suave
            }}
          >
            <div>
              <img src={"/images/" + expData.logo} />
            </div>
          </motion.div>
        </div>
        <div className="container-exp-detail">
          <div>
            <h1> {expData.title}</h1>
            <div
              className="exp_font"
              dangerouslySetInnerHTML={{ __html: expData.contentHtml }}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container-exp {
          background-color: #efefef;
          color: #00212d;
          border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
          -webkit-box-shadow: -1px 3px 6px -2px rgba(33, 32, 33, 0.28);
          -moz-box-shadow: -1px 3px 6px -2px rgba(33, 32, 33, 0.28);
          box-shadow: -1px 3px 6px -2px rgba(33, 32, 33, 0.28);
          width: 100%;
          display: flex;
          margin-bottom: 1rem;
          flex-direction: row;
        }

        .container-exp-logo {
          flex: 30%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #003b4f;
          border-radius: 0.5rem 0.5rem 2rem 0.5rem;
          padding: 1rem;
        }

        .container-exp-detail {
          flex: 70%;
          padding: 1rem;
          flex-wrap: wrap;
        }

        @media screen and (max-width: 992px) {
          .container-exp {
            flex-direction: column;
          }
          .container-exp-detail {
            padding: 0.2rem;
            word-wrap: break-word;
          }
        }

        .exp_font {
          font-size: 1em;
        }
      `}</style>
    </>
  );
}

export default CardExperience;
