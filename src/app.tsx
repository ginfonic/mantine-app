// Компонент приложения
import { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { AppShell, Header, Footer, Aside, Text, MediaQuery,
  Burger, Group, Switch, ActionIcon, Image, useMantineTheme,
  MantineProvider, ColorSchemeProvider, ColorScheme}
  from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import logoC from './assets/prbr-logo-c.svg';
// import logoBW from './prbr-logo-bw.svg';

// Компонент панели навигации
import NavigationBar from './components/navigation-bar';
// Страницы-заглушки
import Link1 from "./pages/link-1";
import Link2 from "./pages/link-2";
// Страница дайджеста
import Digest from "./pages/digest";
// Страница просмотровщика PDF
import PdfViewer from "./pages/pdf";

// Компонент
const App = () => {
  const theme = useMantineTheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const [opened, setOpened] = useState<boolean>(false);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppShell
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          // Левая панель - панель навигации
          navbar={
            <NavigationBar hidden={!opened} />
          }
          // Правая панель
          aside={
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 250}}>
                <Text>Доп. действия</Text>
              </Aside>
            </MediaQuery>
          }
          // Нижняя панель
          footer={
            <Footer height={60} p="md">
              Домой
            </Footer>
          }
          // Верхняя панель
          header={
            <Header height={{ base: 50 }} p="md" style={{ display: 'flex', alignItems: 'center',
              height: '100%', justifyContent: "space-between" }}>
              <Group p="0">
                {/* Выводит бургер, если панель уже SM */}
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="0"
                  />
                </MediaQuery>
                {/* Логотип ПРБР */}
                <ActionIcon variant="transparent" component={Link} to="/">
                  <Image src={logoC} radius="md" />
                </ActionIcon>
                {/* Заголовок */}
                <Text>Приложение ПРБР</Text>
              </Group>
              {/* Переключатель светлой/темной темы*/}
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
            {/* Дайджест */}
            <Route path={"/"} element={<Digest />} />
            {/* Заглушки */}
            <Route path={"/link1"} element={<Link1 />} />
            <Route path={"/link2"} element={<Link2 />} />
            <Route path={"/pdf"} element={<PdfViewer />} />
          </Routes>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
export default App;