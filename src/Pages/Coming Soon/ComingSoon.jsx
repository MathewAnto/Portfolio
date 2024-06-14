import React, { useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { gsap } from 'gsap';
import './ComingSoon.css';

export const ComingSoon = () => {
    
    useEffect(() => {
        // Slide in animation for "Coming" text
        gsap.fromTo(
            ".coming",
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 3, ease: "power4.out" }
        );

        // Rotate animation for "Soon!" text
        gsap.to(".soon", {
            rotationY: 360,
            color: "#FFC107", // Change to blue during rotation
            duration: 7,
            repeat: 0, // Repeat infinitely -1
            ease: "power1.inOut", // Linear easing
            yoyo: true // Play forwards and then backwards smoothly
        });
    }, []);

    return (
        <div className='csPage bg-light'>
            <Navbar bg="light" expand="lg">
                <Container className="justify-content-center">
                    <Navbar.Brand>Mathew's Portfolio</Navbar.Brand>
                </Container>
            </Navbar>
            <div className='csPage-Content'>
                {/* <div className='csPage-Content-bg'> */}
                    <h1 className='coming'>Coming</h1>
                    <h1 id='soon' className='soon'>Soon!</h1>
                {/* </div> */}
            </div>

            <footer className="d-flex justify-content-center pt-3 mt-4 border-top">
                <p className="text-center text-body-secondary footer-name">2024 © <span>MATHEW'S PORTFOLIO</span> By Mathew Anto</p>
            </footer>
        </div>
    );
};
