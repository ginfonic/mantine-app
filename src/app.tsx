import { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { AppShell, Header, Footer, Aside, Text, MediaQuery, Burger, Group, Switch } from '@mantine/core';
import { ActionIcon, Image, useMantineTheme, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
// @ts-ignore
import logoC from './assets/prbr-logo-c.svg';
// import logoBW from './prbr-logo-bw.svg';

// Компоненты ПРБР
import NavigationBar from './features/navigation-bar';
import Link1 from "./pages/link-1";
import Link2 from "./pages/link-2";
import Digest from "./pages/digest";

const App = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppShell
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          // Панель навигации
          navbar={
            <NavigationBar hidden={!opened} />
          }
          aside={
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 250}}>
                <Text>Доп. действия</Text>
              </Aside>
            </MediaQuery>
          }
          footer={
            <Footer height={60} p="md">
              Домой
            </Footer>
          }
          header={
            <Header height={{ base: 50 }} p="md" style={{ display: 'flex', alignItems: 'center',
              height: '100%', justifyContent: "space-between" }}>
              <Group p="0">
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="0"
                  />
                </MediaQuery>
                <ActionIcon variant="transparent" component={Link} to="/">
                  <Image src={logoC} radius="md" />
                </ActionIcon>
                <Text>Приложение ПРБР</Text>
              </Group>
              <Group>
                <Switch
                  checked={colorScheme === 'dark'}
                  onChange={() => toggleColorScheme()}
                  size="md"
                  pb="md"
                  onLabel={<IconSun color={theme.white} size={18} stroke={1.5} />}
                  offLabel={<IconMoonStars color={theme.colors.gray[6]} size={18} stroke={1.5} />}
                />
              </Group>
            </Header>
          }
        >
          {/*Основной блок*/}
          <Routes>
            <Route path={"/"} element={<Digest />} />
            <Route path={"/link1"} element={<Link1 />} />
            <Route path={"/link2"} element={<Link2 />} />
          </Routes>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
export default App;