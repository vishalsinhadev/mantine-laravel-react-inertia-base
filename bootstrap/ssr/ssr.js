import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { useMantineColorScheme, useComputedColorScheme, ActionIcon, useMantineTheme, UnstyledButton, Group, ThemeIcon, rem, Text, Box, HoverCard, Center, Anchor, Divider, SimpleGrid, Button, Burger, Drawer, ScrollArea, Collapse, Container, createTheme, MantineProvider, ColorSchemeScript, Stack, Paper, TextInput, Textarea, Card, Badge, Title, List, Image } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { useDisclosure } from "@mantine/hooks";
import { IconSun, IconMoon, IconChevronDown, IconCode, IconCoin, IconBook, IconFingerprint, IconChartPie3, IconNotification, IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconAt, IconPhone, IconMapPin, IconGauge, IconUser, IconCookie, IconCheck } from "@tabler/icons-react";
import cx from "clsx";
import { Head, createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const header = "_header_1itl5_1";
const link$1 = "_link_1itl5_15";
const subLink = "_subLink_1itl5_57";
const dropdownFooter = "_dropdownFooter_1itl5_77";
const classes$6 = {
  header,
  link: link$1,
  subLink,
  dropdownFooter
};
const icon$1 = "_icon_1vnxr_1";
const dark = "_dark_1vnxr_11";
const light = "_light_1vnxr_31";
const classes$5 = {
  icon: icon$1,
  dark,
  light
};
function LightDark() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  return /* @__PURE__ */ jsxs(
    ActionIcon,
    {
      onClick: () => setColorScheme(computedColorScheme === "light" ? "dark" : "light"),
      variant: "default",
      size: "xl",
      "aria-label": "Toggle color scheme",
      children: [
        /* @__PURE__ */ jsx(IconSun, { className: cx(classes$5.icon, classes$5.light), stroke: 1.5 }),
        /* @__PURE__ */ jsx(IconMoon, { className: cx(classes$5.icon, classes$5.dark), stroke: 1.5 })
      ]
    }
  );
}
const mockdata$1 = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting"
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes"
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without"
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its."
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase"
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews"
  }
];
function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme2 = useMantineTheme();
  const links = mockdata$1.map((item) => /* @__PURE__ */ jsx(UnstyledButton, { className: classes$6.subLink, children: /* @__PURE__ */ jsxs(Group, { wrap: "nowrap", align: "flex-start", children: [
    /* @__PURE__ */ jsx(ThemeIcon, { size: 34, variant: "default", radius: "md", children: /* @__PURE__ */ jsx(item.icon, { style: { width: rem(22), height: rem(22) }, color: theme2.colors.blue[6] }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Text, { size: "sm", fw: 500, children: item.title }),
      /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", children: item.description })
    ] })
  ] }) }, item.title));
  return /* @__PURE__ */ jsxs(Box, { pb: 10, children: [
    /* @__PURE__ */ jsx("header", { className: classes$6.header, children: /* @__PURE__ */ jsxs(Group, { justify: "space-between", h: "100%", children: [
      /* @__PURE__ */ jsx(MantineLogo, { size: 30 }),
      /* @__PURE__ */ jsxs(Group, { h: "100%", gap: 0, visibleFrom: "sm", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: classes$6.link, children: "Home" }),
        /* @__PURE__ */ jsxs(HoverCard, { width: 600, position: "bottom", radius: "md", shadow: "md", withinPortal: true, children: [
          /* @__PURE__ */ jsx(HoverCard.Target, { children: /* @__PURE__ */ jsx("a", { href: "#", className: classes$6.link, children: /* @__PURE__ */ jsxs(Center, { inline: true, children: [
            /* @__PURE__ */ jsx(Box, { component: "span", mr: 5, children: "Features" }),
            /* @__PURE__ */ jsx(
              IconChevronDown,
              {
                style: { width: rem(16), height: rem(16) },
                color: theme2.colors.blue[6]
              }
            )
          ] }) }) }),
          /* @__PURE__ */ jsxs(HoverCard.Dropdown, { style: { overflow: "hidden" }, children: [
            /* @__PURE__ */ jsxs(Group, { justify: "space-between", px: "md", children: [
              /* @__PURE__ */ jsx(Text, { fw: 500, children: "Features" }),
              /* @__PURE__ */ jsx(Anchor, { href: "#", fz: "xs", children: "View all" })
            ] }),
            /* @__PURE__ */ jsx(Divider, { my: "sm" }),
            /* @__PURE__ */ jsx(SimpleGrid, { cols: 2, spacing: 0, children: links }),
            /* @__PURE__ */ jsx("div", { className: classes$6.dropdownFooter, children: /* @__PURE__ */ jsxs(Group, { justify: "space-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(Text, { fw: 500, fz: "sm", children: "Get started" }),
                /* @__PURE__ */ jsx(Text, { size: "xs", c: "dimmed", children: "Their food sources have decreased, and their numbers" })
              ] }),
              /* @__PURE__ */ jsx(Button, { variant: "default", children: "Get started" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "#", className: classes$6.link, children: "Learn" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: classes$6.link, children: "Academy" })
      ] }),
      /* @__PURE__ */ jsxs(Group, { visibleFrom: "sm", children: [
        /* @__PURE__ */ jsx(Button, { variant: "default", children: "Log in" }),
        /* @__PURE__ */ jsx(Button, { children: "Sign up" }),
        /* @__PURE__ */ jsx(LightDark, {})
      ] }),
      /* @__PURE__ */ jsx(Burger, { opened: drawerOpened, onClick: toggleDrawer, hiddenFrom: "sm" })
    ] }) }),
    /* @__PURE__ */ jsx(
      Drawer,
      {
        opened: drawerOpened,
        onClose: closeDrawer,
        size: "100%",
        padding: "md",
        title: "Navigation",
        hiddenFrom: "sm",
        zIndex: 1e6,
        children: /* @__PURE__ */ jsxs(ScrollArea, { h: `calc(100vh - ${rem(80)})`, mx: "-md", children: [
          /* @__PURE__ */ jsx(Divider, { my: "sm" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: classes$6.link, children: "Home" }),
          /* @__PURE__ */ jsx(UnstyledButton, { className: classes$6.link, onClick: toggleLinks, children: /* @__PURE__ */ jsxs(Center, { inline: true, children: [
            /* @__PURE__ */ jsx(Box, { component: "span", mr: 5, children: "Features" }),
            /* @__PURE__ */ jsx(
              IconChevronDown,
              {
                style: { width: rem(16), height: rem(16) },
                color: theme2.colors.blue[6]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(Collapse, { in: linksOpened, children: links }),
          /* @__PURE__ */ jsx("a", { href: "#", className: classes$6.link, children: "Learn" }),
          /* @__PURE__ */ jsx("a", { href: "#", className: classes$6.link, children: "Academy" }),
          /* @__PURE__ */ jsx(Divider, { my: "sm" }),
          /* @__PURE__ */ jsxs(Group, { justify: "center", grow: true, pb: "xl", px: "md", children: [
            /* @__PURE__ */ jsx(Button, { variant: "default", children: "Log in" }),
            /* @__PURE__ */ jsx(Button, { children: "Sign up" })
          ] })
        ] })
      }
    )
  ] });
}
const footer = "_footer_5n1c6_1";
const logo = "_logo_5n1c6_17";
const description$2 = "_description_5n1c6_37";
const inner$1 = "_inner_5n1c6_55";
const groups = "_groups_5n1c6_75";
const wrapper$2 = "_wrapper_5n1c6_93";
const link = "_link_5n1c6_101";
const title$4 = "_title_5n1c6_125";
const afterFooter = "_afterFooter_5n1c6_145";
const social = "_social_5n1c6_173";
const classes$4 = {
  footer,
  logo,
  description: description$2,
  inner: inner$1,
  groups,
  wrapper: wrapper$2,
  link,
  title: title$4,
  afterFooter,
  social
};
const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" }
    ]
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" }
    ]
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" }
    ]
  }
];
function Footer() {
  const groups2 = data.map((group) => {
    const links = group.links.map((link2, index) => /* @__PURE__ */ jsx(
      Text,
      {
        className: classes$4.link,
        component: "a",
        href: link2.link,
        onClick: (event) => event.preventDefault(),
        children: link2.label
      },
      index
    ));
    return /* @__PURE__ */ jsxs("div", { className: classes$4.wrapper, children: [
      /* @__PURE__ */ jsx(Text, { className: classes$4.title, children: group.title }),
      links
    ] }, group.title);
  });
  return /* @__PURE__ */ jsxs("footer", { className: classes$4.footer, children: [
    /* @__PURE__ */ jsxs(Container, { className: classes$4.inner, children: [
      /* @__PURE__ */ jsxs("div", { className: classes$4.logo, children: [
        /* @__PURE__ */ jsx(MantineLogo, { size: 30 }),
        /* @__PURE__ */ jsx(Text, { size: "xs", color: "dimmed", className: classes$4.description, children: "Build fully functional accessible web applications faster than ever" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: classes$4.groups, children: groups2 })
    ] }),
    /* @__PURE__ */ jsxs(Container, { className: classes$4.afterFooter, children: [
      /* @__PURE__ */ jsx(Text, { color: "dimmed", size: "sm", children: "© 2020 mantine.dev. All rights reserved." }),
      /* @__PURE__ */ jsxs(Group, { gap: 0, className: classes$4.social, justify: "flex-end", wrap: "nowrap", children: [
        /* @__PURE__ */ jsx(ActionIcon, { size: "lg", color: "gray", variant: "subtle", children: /* @__PURE__ */ jsx(IconBrandTwitter, { style: { width: rem(18), height: rem(18) }, stroke: 1.5 }) }),
        /* @__PURE__ */ jsx(ActionIcon, { size: "lg", color: "gray", variant: "subtle", children: /* @__PURE__ */ jsx(IconBrandYoutube, { style: { width: rem(18), height: rem(18) }, stroke: 1.5 }) }),
        /* @__PURE__ */ jsx(ActionIcon, { size: "lg", color: "gray", variant: "subtle", children: /* @__PURE__ */ jsx(IconBrandInstagram, { style: { width: rem(18), height: rem(18) }, stroke: 1.5 }) })
      ] })
    ] })
  ] });
}
const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan"
});
function MainLayout({ children }) {
  return /* @__PURE__ */ jsx(MantineProvider, { theme, defaultColorScheme: "light", children: /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: "My awesome app" }),
      /* @__PURE__ */ jsx(ColorSchemeScript, {})
    ] }),
    /* @__PURE__ */ jsx(HeaderMenu, {}),
    /* @__PURE__ */ jsx("article", { children }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
const image$1 = "/build/assets/image-Cj-eOYyv.svg";
const inner = "_inner_e4rhh_1";
const content = "_content_e4rhh_15";
const title$3 = "_title_e4rhh_35";
const control$1 = "_control_e4rhh_63";
const image = "_image_e4rhh_75";
const highlight = "_highlight_e4rhh_93";
const classes$3 = {
  inner,
  content,
  title: title$3,
  control: control$1,
  image,
  highlight
};
const wrapper$1 = "_wrapper_fk1hb_1";
const icon = "_icon_fk1hb_13";
const title$2 = "_title_fk1hb_23";
const description$1 = "_description_fk1hb_31";
const classes$2 = {
  wrapper: wrapper$1,
  icon,
  title: title$2,
  description: description$1
};
function ContactIcon({ icon: Icon, title: title2, description: description2, ...others }) {
  return /* @__PURE__ */ jsxs("div", { className: classes$2.wrapper, ...others, children: [
    /* @__PURE__ */ jsx(Box, { mr: "md", children: /* @__PURE__ */ jsx(Icon, { style: { width: rem(24), height: rem(24) } }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Text, { size: "xs", className: classes$2.title, children: title2 }),
      /* @__PURE__ */ jsx(Text, { className: classes$2.description, children: description2 })
    ] })
  ] });
}
const MOCKDATA = [
  { title: "Email", description: "hello@mantine.dev", icon: IconAt },
  { title: "Phone", description: "+49 (800) 335 35 35", icon: IconPhone },
  { title: "Address", description: "844 Morris Park avenue", icon: IconMapPin },
  { title: "Working hours", description: "8 a.m. – 11 p.m.", icon: IconSun }
];
function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => /* @__PURE__ */ jsx(ContactIcon, { ...item }, index));
  return /* @__PURE__ */ jsx(Stack, { children: items });
}
const bg = "/build/assets/bg-BvD04pXl.svg";
const wrapper = "_wrapper_1rx96_1";
const form = "_form_1rx96_25";
const fields = "_fields_1rx96_49";
const fieldInput = "_fieldInput_1rx96_57";
const fieldsGroup = "_fieldsGroup_1rx96_83";
const contacts = "_contacts_1rx96_99";
const title$1 = "_title_1rx96_131";
const control = "_control_1rx96_153";
const classes$1 = {
  wrapper,
  form,
  fields,
  fieldInput,
  fieldsGroup,
  contacts,
  title: title$1,
  control
};
function ContactForm() {
  return /* @__PURE__ */ jsx(Paper, { shadow: "md", radius: "lg", children: /* @__PURE__ */ jsxs("div", { className: classes$1.wrapper, children: [
    /* @__PURE__ */ jsxs("div", { className: classes$1.contacts, style: { backgroundImage: `url(${bg})` }, children: [
      /* @__PURE__ */ jsx(Text, { fz: "lg", fw: 700, className: classes$1.title, c: "#fff", children: "Contact information" }),
      /* @__PURE__ */ jsx(ContactIconsList, {})
    ] }),
    /* @__PURE__ */ jsxs("form", { className: classes$1.form, onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ jsx(Text, { fz: "lg", fw: 700, className: classes$1.title, children: "Get in touch" }),
      /* @__PURE__ */ jsxs("div", { className: classes$1.fields, children: [
        /* @__PURE__ */ jsxs(SimpleGrid, { cols: { base: 1, sm: 2 }, children: [
          /* @__PURE__ */ jsx(TextInput, { label: "Your name", placeholder: "Your name" }),
          /* @__PURE__ */ jsx(TextInput, { label: "Your email", placeholder: "hello@mantine.dev", required: true })
        ] }),
        /* @__PURE__ */ jsx(TextInput, { mt: "md", label: "Subject", placeholder: "Subject", required: true }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            mt: "md",
            label: "Your message",
            placeholder: "Please include all relevant information",
            minRows: 3
          }
        ),
        /* @__PURE__ */ jsx(Group, { justify: "flex-end", mt: "md", children: /* @__PURE__ */ jsx(Button, { type: "submit", className: classes$1.control, children: "Send message" }) })
      ] })
    ] })
  ] }) });
}
const title = "_title_uuz3b_1";
const description = "_description_uuz3b_19";
const card = "_card_uuz3b_51";
const cardTitle = "_cardTitle_uuz3b_59";
const classes = {
  title,
  description,
  card,
  cardTitle
};
const mockdata = [
  {
    title: "Extreme performance",
    description: "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: IconGauge
  },
  {
    title: "Privacy focused",
    description: "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: IconUser
  },
  {
    title: "No third parties",
    description: "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: IconCookie
  }
];
function FeaturesCards() {
  const theme2 = useMantineTheme();
  const features = mockdata.map((feature) => /* @__PURE__ */ jsxs(Card, { shadow: "md", radius: "md", className: classes.card, padding: "xl", children: [
    /* @__PURE__ */ jsx(
      feature.icon,
      {
        style: { width: rem(50), height: rem(50) },
        stroke: 2,
        color: theme2.colors.blue[6]
      }
    ),
    /* @__PURE__ */ jsx(Text, { fz: "lg", fw: 500, className: classes.cardTitle, mt: "md", children: feature.title }),
    /* @__PURE__ */ jsx(Text, { fz: "sm", c: "dimmed", mt: "sm", children: feature.description })
  ] }, feature.title));
  return /* @__PURE__ */ jsxs(Container, { size: "lg", py: "xl", children: [
    /* @__PURE__ */ jsx(Group, { justify: "center", children: /* @__PURE__ */ jsx(Badge, { variant: "filled", size: "lg", children: "Best company ever" }) }),
    /* @__PURE__ */ jsx(Title, { order: 2, className: classes.title, ta: "center", mt: "sm", children: "Integrate effortlessly with any technology stack" }),
    /* @__PURE__ */ jsx(Text, { c: "dimmed", className: classes.description, ta: "center", mt: "md", children: "Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon." }),
    /* @__PURE__ */ jsx(SimpleGrid, { cols: { base: 1, md: 3 }, spacing: "xl", mt: 50, children: features })
  ] });
}
function HeroHome() {
  return /* @__PURE__ */ jsxs(Container, { size: "xl", children: [
    /* @__PURE__ */ jsxs("div", { className: classes$3.inner, children: [
      /* @__PURE__ */ jsxs("div", { className: classes$3.content, children: [
        /* @__PURE__ */ jsxs(Title, { className: classes$3.title, children: [
          "A ",
          /* @__PURE__ */ jsx("span", { className: classes$3.highlight, children: "modern" }),
          " React ",
          /* @__PURE__ */ jsx("br", {}),
          " components library"
        ] }),
        /* @__PURE__ */ jsx(Text, { c: "dimmed", mt: "md", children: "Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and hooks to cover you in any situation" }),
        /* @__PURE__ */ jsxs(
          List,
          {
            mt: 30,
            spacing: "sm",
            size: "sm",
            icon: /* @__PURE__ */ jsx(ThemeIcon, { size: 20, radius: "xl", children: /* @__PURE__ */ jsx(IconCheck, { style: { width: rem(12), height: rem(12) }, stroke: 1.5 }) }),
            children: [
              /* @__PURE__ */ jsxs(List.Item, { children: [
                /* @__PURE__ */ jsx("b", { children: "TypeScript based" }),
                " – build type safe applications, all components and hooks export types"
              ] }),
              /* @__PURE__ */ jsxs(List.Item, { children: [
                /* @__PURE__ */ jsx("b", { children: "Free and open source" }),
                " – all packages have MIT license, you can use Mantine in any project"
              ] }),
              /* @__PURE__ */ jsxs(List.Item, { children: [
                /* @__PURE__ */ jsx("b", { children: "No annoying focus ring" }),
                " – focus ring will appear only when user navigates with keyboard"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Group, { mt: 30, children: [
          /* @__PURE__ */ jsx(Button, { radius: "xl", size: "md", className: classes$3.control, children: "Get started" }),
          /* @__PURE__ */ jsx(Button, { variant: "default", radius: "xl", size: "md", className: classes$3.control, children: "Source code" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Image, { src: image$1, className: classes$3.image })
    ] }),
    /* @__PURE__ */ jsx(FeaturesCards, {}),
    /* @__PURE__ */ jsx(ContactForm, {})
  ] });
}
const Test = () => {
  return /* @__PURE__ */ jsx(MainLayout, { children: /* @__PURE__ */ jsx(HeroHome, {}) });
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Test
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/ContactUs/ContactUs.jsx": __vite_glob_0_0, "./Pages/Test.jsx": __vite_glob_0_1 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
