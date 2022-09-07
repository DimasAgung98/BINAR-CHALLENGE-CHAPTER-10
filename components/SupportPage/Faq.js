
import React, { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

function Faq(props) {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <>
            <div className='container-fluid bg-light faq-page pt-5'>
                <div className='row'>
                    <div className='title-faq text-center py-5'>
                        <h1>FAQ</h1>
                        <h3>How can we help you ?</h3>
                    </div>
                </div>
                <div className='container bg-light'>
                    <div className='row mx-5'>
                        <div className='col-md-10'>
                            <input className="form-control me-2" type="search" placeholder="Describe your issue" aria-label="Search" />
                        </div>
                        <div className='col-md-2'>
                            <button className="btn btn-outline-danger btn-leader" type="submit">Search</button>
                        </div>
                    </div>
                </div>
                <div className='container bg-light'>
                    <div className='row px-5 py-5'>
                        <Accordion open={open} toggle={toggle}>
                            <AccordionItem>
                                <AccordionHeader targetId="1">Register Error</AccordionHeader>
                                <AccordionBody accordionId="1">
                                    <strong>Make sure your already input all the data.</strong> You must fill in all the required data such as email, username, and password. and make sure the username has not been registered before .
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="2">Login Error</AccordionHeader>
                                <AccordionBody accordionId="2">
                                    <strong>Make sure the username and password are correct.</strong> Make sure the username and password you entered are correct, or you can try forgot password when you forget your password.
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="3">Where Game List</AccordionHeader>
                                <AccordionBody accordionId="3">
                                    <strong>Game list is already on navigation bar.</strong> You can click game list on navigation bar list <code>/listgame</code>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionHeader targetId="4">Game Achievement</AccordionHeader>
                                <AccordionBody accordionId="4">
                                    <strong>Play some game.</strong> or do the task in accordance with the explanation of the existing achievement.
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq