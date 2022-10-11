import { Slide, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
import { Colors } from "../../styles/theme";


const slides = [
     "/slides/slide1.jpg",
     "/slides/slide2.jpg",
     "/slides/slide3.jpg",
     "/slides/Slide4.jpeg",
     "/slides/slide5.jpeg",
     "/slides/slide6.png",
     "/slides/slide7.png",
     "/slides/slide8.jpeg",
     "/slides/slide9.png",
     "/slides/slide10.jpeg",
     "/slides/slide11.png",
     "/slides/slide12.png",
     "/slides/slide13.png",
     "/slides/slide14.jpeg",
     "/slides/slide16.png",
     "/slides/slide17.png"
    ];

  export default function Promotions() {
    const containerRef = useRef();
    const [show, setShow] = useState(true);
      const [messageIndex, setMessageIndex] = useState(0);
      useEffect(() => {
              setTimeout(() => {
                setShow(false);
              }, 3000);
      const intervalId = setInterval(() => {
        // get next message
        setMessageIndex((i) => (i + 1) % slides.length);
  
        // slide the message in
          setShow(true);
  
        setTimeout(() => {
          setShow(false);
        }, 3000);
      }, 4000);
  
      return () => {
          clearInterval(intervalId);
        };
      }, []);

   return (

              <PromotionsContainer ref={containerRef} overflow="hidden">
                <Slide
                  direction={show ? "left" : "right"}
                  in={show}
                  container={containerRef.current}
                  timeout={{
                    enter: 500,
                    exit: 100,
                  }}
                >
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <MessageText>
                    <img src={ slides[messageIndex]} />
                    </MessageText>
                  </Box>
                </Slide>
              </PromotionsContainer>
        
   );
}