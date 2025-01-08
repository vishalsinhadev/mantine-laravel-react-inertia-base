import { useForm } from '@inertiajs/react'

import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import bg from '../../Assets/Images/bg.svg';
import classes from './GetInTouch.module.css';
import { router } from '@inertiajs/react'
import { notifications } from '@mantine/notifications';

export function ContactForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      })

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value

        console.log('key',key)
        console.log('value',value)

        setData(data => ({
            ...data,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        post('/contact/store', {
            preserveScroll: true,
            onSuccess: () =>{
                notifications.show({
                    title: 'Thanks',
                    message: 'Our Team will contact you soon',
                })
                // reset()
            },
        })
    }

    return (
        <Paper shadow="md" radius="lg">
            <div className={classes.wrapper}>
                <div className={classes.contacts} style={{ backgroundImage: `url(${bg})` }}>
                    <Text fz="lg" fw={700} className={classes.title} c="#fff">
                        Contact information
                    </Text>

                    <ContactIconsList />
                </div>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Text fz="lg" fw={700} className={classes.title}>
                        Get in touch
                    </Text>

                    <div className={classes.fields}>
                        <SimpleGrid cols={{ base: 1, sm: 2 }}>
                            <TextInput 
                                label="Your name" 
                                name='name' 
                                value={data.name} 
                                onChange={handleChange} 
                                placeholder="Your name" 
                                required
                                error={errors.name && errors.name}
                            />
                            <TextInput 
                                label="Your email" 
                                name='email' 
                                value={data.email} 
                                onChange={handleChange} 
                                placeholder="hello@mantine.dev" 
                                required 
                                error={errors.email && errors.email}
                            />
                            
                        </SimpleGrid>

                        <TextInput 
                            mt="md" 
                            label="Subject" 
                            name='subject' 
                            value={data.subject} 
                            onChange={handleChange}
                            placeholder="Subject" 
                            required 
                            error={errors.subject && errors.subject}
                        />

                        <Textarea
                            mt="md"
                            name='message'
                            value={data.message}
                            onChange={handleChange}
                            label="Your message"
                            placeholder="Please include all relevant information"
                            minRows={3}
                            required
                            error={errors.message && errors.message}
                        />

                        <Group justify="flex-end" mt="md">
                            <Button type="submit" className={classes.control}>
                                Send message
                            </Button>
                        </Group>
                    </div>
                </form>
            </div>
        </Paper>
    );
}
