import { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { AppShell, Header, Footer, Aside, Text, MediaQuery, Burger, Group, Switch } from '@mantine/core';
import { ActionIcon, Image, useMantineTheme, MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
// @ts-ignore
import logoC from './assets/prbr-logo-c.svg';
// import logoBW from './prbr-logo-bw.svg';

// Компоненты ПРБР
import PRBRNavBar from './components/PRBRNavBar';
import PRBRLink1 from "./pages/Link1";
import PRBRLink2 from "./pages/Link2";
import PRBRDigest from "./pages/Digest";

const App = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
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
            <PRBRNavBar hidden={!opened} />
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
            <Route path={"/"} element={<PRBRDigest />} />
            <Route path={"/digest"} element={<PRBRLink1 />} />
            <Route path={"/digest_alt"} element={<PRBRLink2 />} />
          </Routes>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
export default App;