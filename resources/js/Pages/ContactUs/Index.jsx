import React from 'react';

import MainLayout from '../../Layout/MainLayout';
import { HeroHome } from '../../Components/Home/HeroHome';
import { ContactForm } from '../../Components/Contact/ContactForm';
import { Container } from '@mantine/core';

const ContactUs = () => {
    return (
        <MainLayout>
            <Container size="xl">
                <ContactForm />
            </Container>
        </MainLayout>
    )
}

export default ContactUs