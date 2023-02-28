import React, { useState, useEffect, useRef } from "react";
import ContactBackground from "../components/Contact/ContactBackground";
import ContactButton from "../components/Contact/ContactButton";

const Contact = () => {
    return (
        <div>
            <ContactBackground />
            <ContactButton />
        </div>
    );
};

export default Contact;
