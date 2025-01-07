import { useForm } from '@inertiajs/react'
import {
    Container,
    SimpleGrid,
    TextInput,
    Textarea,
    Group,
    Button,
    Text,
    InputBase,
    FileInput,
    Select,
    FileButton,
} from '@mantine/core';
import classes from './CareerApplicationForm.module.css';
import { notifications } from '@mantine/notifications';
import { IMaskInput } from 'react-imask';
import { IconFileCv } from '@tabler/icons-react';

export function CareerApplicationForm({id}) {
    const experience = [
        {value:'0', label:"Fresher"},
        {value:'1' , label:"1 Year"},
        {value:'2' , label:"2 Year"},
        {value:'3' , label:"3 Year"},
        {value:'4' , label:"4 Year"},
        {value:'5' , label:"5 Year"},
    ];
    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: "",
        email: "",
        phone: "",
        cv: "",
        experience: null
      })

      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData((data) => ({
          ...data,
          [name]: files ? files[0] : value,
        }));
        console.log('data', data)
      };

    function handleSubmit(e) {
        e.preventDefault()
        post('/job-post/store-application/'+id, {
            preserveScroll: true,
            onSuccess: () =>{
                notifications.show({
                    title: 'Thanks',
                    message: 'Our Team will contact you soon',
                })
            },
            forceFormData: true,
        })
        reset();
    }
    const cvIcon = <IconFileCv style={{ width: 18, height: 18 }} stroke={1.5} />;

    return (
        <Container size="lg" py="xl">
            <Text fz="lg" fw={700} className={classes.title}>
                Submit your info
            </Text>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div >
                    <TextInput 
                        label="Your name" 
                        name='full_name' 
                        value={data.full_name} 
                        onChange={handleChange} 
                        placeholder="Your name" 
                        required
                        error={errors.full_name && errors.full_name}
                    />
                    <SimpleGrid cols={{ base: 1, sm: 2 }}>
                        <TextInput 
                            label="Your email" 
                            name='email' 
                            value={data.email} 
                            onChange={handleChange} 
                            placeholder="hello@mantine.dev" 
                            required 
                            error={errors.email && errors.email}
                        />
                         
                        <InputBase
                            label="Your phone"
                            name='phone' 
                            onChange={handleChange} 
                            value={data.phone} 
                            component={IMaskInput}
                            mask="+910000000000"
                            placeholder="Your phone"
                            required 
                            error={errors.phone && errors.phone}
                            />
                        
                    </SimpleGrid>

                    <FileInput
                        name='cv' 
                        leftSection={cvIcon}
                        label="Attach your CV"
                        placeholder="Your CV"
                        leftSectionPointerEvents="none"
                        onChange={file => handleChange({ target: { value: file, name: 'cv' } })} 
                        required 
                        error={errors.cv && errors.cv}
                        value={data.cv}
                    />

                    <Select
                        label="Your Experience"
                        placeholder="Pick value"
                        data={experience}
                        name='experience'
                        onChange={experience => handleChange({ target: { value: experience, name: 'experience' } })} 
                        required 
                        error={errors.experience && errors.experience}
                        value={data.experience} 
                    />

                    <Group justify="flex-end" mt="md">
                        {/* {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )} */}
                        <Button type="submit" className={classes.control} disabled={processing}>
                            Send message
                        </Button>
                    </Group>
                </div>
            </form>
        </Container>
    );
}