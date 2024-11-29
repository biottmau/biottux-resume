import React from "react";

function CardSkill({ skillData }) {
  return (
    <motion.div
      animate={{ y: [0, -30, 0] }} // Rebote hacia arriba (-30px) y regresa a 0
      transition={{
        duration: 0.8, // Duración de un ciclo
        repeat: Infinity, // Repetir indefinidamente
        repeatType: "loop", // Animación en bucle
        ease: "easeOut", // Suaviza el rebote
      }}
    >
      <div className="containerskill">
        <div>
          <h3>{skillData.title}</h3>
        </div>
        <div
          className="skill_font"
          dangerouslySetInnerHTML={{ __html: skillData.contentHtml }}
        />
      </div>
      <style jsx>{`
        .containerskill {
          background-color: #dae3e5;
          color: #00212d;
          padding: 1rem;
          border-radius: 0.5rem 0.5rem 2rem 0.5rem;
          -webkit-box-shadow: -1px 3px 6px -2px rgba(33, 32, 33, 0.68);
          -moz-box-shadow: -1px 3px 6px -2px rgba(33, 32, 33, 0.68);
          box-shadow: -1px 3px 6px -2px rgba(33, 32, 33, 0.68);
          background-image: url(/images/${skillData.image});
          background-repeat: no-repeat;
          background-position: top right;
          background-size: contain;
        }

        .containerskill:hover {
          background-color: #ffffff;
        }
        .skill_font {
          font-size: 1em;
        }
      `}</style>
    </motion.div>
  );
}

export default CardSkill;
