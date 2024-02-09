import React, { useEffect, useRef } from 'react';
import { Button } from '@chakra-ui/react';
import Home from './Components/Home';
import './Heropages.css'; // Import CSS file for additional styles

const Heropage = () => {
    const brideRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const groomDiv = document.querySelector('.groom');
            const brideDiv = brideRef.current;

            const groomBottom = groomDiv.getBoundingClientRect().bottom;
            const brideTop = brideDiv.getBoundingClientRect().top;

            if (brideTop <= groomBottom) {
                brideDiv.style.marginTop = `${groomBottom - brideTop}px`;
            } else {
                brideDiv.style.marginTop = '25%';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "20px", marginRight: "20px" }}>
                <img style={{ width: "10%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u4om3crec8jhqoy3zwpy.png" alt="" />
                <Button>Invitation</Button>
            </nav>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "80%", margin: "auto" }}>
                <h1 style={{ fontFamily: 'Great Vibes, cursive', fontSize: "45px" }} >Franto Shajel <br />&  <br />Blessmi </h1>
                <img style={{ width: "20%" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j1cd8qip1h9tgcnzl5x2.png" alt="" />
            </div>
            <div className='heartImg' style={{ position: "sticky", top: "0", marginLeft: "33px" }}>
                <img style={{ width: "15%", marginTop: "30px", position: "sticky" }} src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7lvzcieoyu52pcb9bfw2.jpg" alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div style={{ marginTop: "5%" }}>
                    <div className='groom' style={{ display: "flex", alignItems: "center", width: "95%", position: "sticky", top: "0" }} >
                        <p>Introduce our cute and charming BrideGroom...</p>
                        <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ofg90e3sb17ebd1y6z5a.png" alt="" />
                    </div>
                </div>
                {/* <div>
                    <hr style={{
                        border: 'none',
                        backgroundColor: 'black',
                        height: '500px',
                        width: '2px',
                        margin: '0 auto'
                    }} />
                </div> */}
                <div style={{ marginTop: "25%", position: "relative" }}>
                    <div className='bride' ref={brideRef} style={{ display: "flex", alignItems: "center", width: "90%" }} >
                        <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v031ijfr2grteb0zpszs.png" alt="" />
                        <p>Introduce our cute and beautiful Bride...</p>
                    </div>
                </div>
            </div>
            <div style={{ position: "relative" }}>
                <Home />
            </div>
        </div>
    );
}

export default Heropage;
