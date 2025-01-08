
import { MantineProvider } from '@mantine/core';
import { HeaderMenu } from './Header/HeaderMenu'
import { Footer } from './Footer/Footer';
import { Notifications } from '@mantine/notifications';
import { theme } from "./theme";
import ScrollToTop from '../Components/UI/Scroll/ScrollToTop';

export default function MainLayout({ children }) {
    return (
        <MantineProvider theme={theme}>
            <Notifications />
            <main>
                <HeaderMenu />
                <article>{children}</article>
                <Footer />
                <ScrollToTop />
            </main>
        </MantineProvider>
    )
}