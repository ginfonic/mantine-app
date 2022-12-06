// Компонент панели навигации
import {FC, useState} from "react";
import {Link} from "react-router-dom";
import {Navbar, NavLink, ScrollArea, Badge} from "@mantine/core";
// import {MantineNumberSize} from "@mantine/styles";
import {
  IconDirections, IconShoppingCart, IconBook, IconBooks, IconBox, IconBrandTabler,
  IconClock, IconDashboard, IconFrame, IconHeartHandshake, IconHelicopter,
  IconListDetails, IconNews, IconSpeakerphone, IconFriends,
  IconChartPie, IconArrowFork, IconPencil, IconStar, IconLicense,
  IconReport, IconShoppingBag, IconBasket, IconReceipt,
  IconCrown, IconBuildingFactory2, IconEar, IconBuildingSkyscraper,
  IconMapPin, IconBuildingBank, IconArrowRampRight, IconRuler, IconFocus2,
  IconBuildingFactory, IconAffiliate, IconRulerMeasure, IconComponents,
  IconZoomExclamation, IconCheese, IconBuildingCommunity, IconColorFilter,
  IconCone, IconArrowAutofitContent, Icon3dCubeSphere, IconPresentation, IconDeviceTvOld,
  IconUsers, IconMasksTheater, IconTextPlus, IconAdjustments, IconBrandLaravel,
  IconAddressBook, IconPaperclip, IconMailForward, IconArrowsTransferDown
} from "@tabler/icons";

// Тип пропсов элементов навигации (для вывода элементов из массива)
// interface NavLinkProps {
//   label: string;
//   description?: string;
//   icon?: any;
//   rightSection?: any;
//   variant?: 'filled' | 'light' | 'subtle';
//   childrenOffset?: MantineNumberSize;
//   // child?: NavLinkProps[];
// }

// Массив пропсов элементов навигации (для вывода элементов из массива)
// const data: NavLinkProps[] = [
//   { icon: IconNews,
//     label: 'Дайджест',
//     description: 'Всякая хрень',
//     variant: "light",
//     rightSection: <IconChevronRight size={14} stroke={1.5} />,
//     // child: [
//     //   { icon: IconNews, label: 'Дайджест 1', variant: "light"},
//     //   { icon: IconNews, label: 'Дайджест 2', variant: "light"},
//     //   { icon: IconNews, label: 'Дайджест 3', variant: "light"},
//     // ]
//   },
//   {
//     icon: IconBooks,
//     label: 'База знаний',
//     variant: "light"
//   },
//   { icon: IconHeart, label: 'Лучшие практики', variant: "light" },
//   { icon: IconBox, label: 'КУБ', variant: "light" },
// ];

// Тип пропсов панели навигации
interface NavigationBarProps {
  hidden: boolean;
  useSubIcons?: boolean;
}

// Выводит панель навигации
const NavigationBar: FC<NavigationBarProps> = ({hidden, useSubIcons= true}) => {
  // const useSubIcons = true;
  const [active, setActive] = useState<number>(11);

  // Выводит элемент навигации из массива
  // const items = data.map((item, index) => (
  //   <NavLink
  //     key={item.label}
  //     label={item.label}
  //     description={item.description}
  //     icon={<item.icon size={16} stroke={1.5} />}
  //     rightSection={item.rightSection}
  //     variant={item.variant}
  //     childrenOffset={item.childrenOffset}
  //     active={index === active}
  //     onClick={() => setActive(index)}
  //   />
  // ));

  return (
    <Navbar p="0" hiddenBreakpoint="sm" hidden={hidden} width={{sm: (useSubIcons ? 250 : 220)}}>
      {/*<ScrollArea style={{width: (useSubIcons ? 250 : 220)}}>{items}</ScrollArea>*/}
      <ScrollArea style={{width: (useSubIcons ? 250 : 220)}}>
        <NavLink
          label="Направления ПРБР"
          icon={<IconDirections size={16} stroke={1.5}/>}
          childrenOffset={28}
          // defaultOpened
          active={1 === active}
          onClick={() => setActive(1)}
        >
          <NavLink
            label="Отчет: доли и проекты"
            icon={useSubIcons ? (<IconChartPie size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={101 === active}
            onClick={() => setActive(101)}
          />
          <NavLink
            label="Направления"
            icon={useSubIcons ? (<IconArrowFork size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={102 === active}
            onClick={() => setActive(102)}
          />
          <NavLink
            label="Проекты"
            icon={useSubIcons ? (<IconPencil size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={103 === active}
            onClick={() => setActive(103)}
          />
          <NavLink
            label="База лучших практик"
            icon={useSubIcons ? (<IconStar size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={104 === active}
            onClick={() => setActive(104)}
          />
          <NavLink
            label="ГЧП/Лизинг/Инвесты"
            icon={useSubIcons ? (<IconLicense size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={105 === active}
            onClick={() => setActive(105)}
          />
        </NavLink>
        <NavLink
          label="ГВК по ДЗО"
          icon={<IconSpeakerphone size={16} stroke={1.5}/>}
          component={Link}
          to="/link2"
          active={2 === active}
          onClick={() => setActive(2)}
        />
        <NavLink
          label="База знаний"
          icon={<IconBook size={16} stroke={1.5}/>}
          component={Link}
          to="/link1"
          active={3 === active}
          onClick={() => setActive(3)}
        />
        <NavLink
          label="Продуктовая полка"
          icon={<IconShoppingCart size={16} stroke={1.5}/>}
          childrenOffset={28}
          active={4 === active}
          onClick={() => setActive(4)}
        >
          <NavLink
            label="Отчет: полка"
            icon={useSubIcons ? (<IconReport size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={401 === active}
            onClick={() => setActive(401)}
          />
          <NavLink
            label="Моя корзина продуктов"
            icon={useSubIcons ? (<IconShoppingBag size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={402 === active}
            onClick={() => setActive(402)}
          />
          <NavLink
            label="Моя корзина КП"
            icon={useSubIcons ? (<IconBasket size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={403 === active}
            onClick={() => setActive(403)}
          />
        </NavLink>
        <NavLink
          label="КУБ"
          icon={<IconBox size={16} stroke={1.5}/>}
          // rightSection={
          //   <ActionIcon size="xs" variant="transparent" component={Link} to="/link2">
          //     <IconSettings size={16} stroke={1.5} />
          //   </ActionIcon>
          // }
          component={Link}
          to="/link1"
          active={5 === active}
          onClick={() => setActive(5)}
        />
        <NavLink
          label="TimeVision"
          icon={<IconClock size={16} stroke={1.5}/>}
          component={Link}
          to="/link2"
          active={6 === active}
          onClick={() => setActive(6)}
        />
        <NavLink
          label="Управляющие ГОСБ"
          icon={<IconFriends size={16} stroke={1.5}/>}
          component={Link}
          to="/link1"
          active={7 === active}
          onClick={() => setActive(7)}
        />
        <NavLink
          label="Мои задачи"
          icon={<IconListDetails size={16} stroke={1.5}/>}
          rightSection={
            <Badge size="xs" variant="filled" sx={{ width: 16, height: 16, padding: 0 }}>
              3
            </Badge>
          }
          component={Link}
          to="/link2"
          active={8 === active}
          onClick={() => setActive(8)}
        />
        <NavLink
          label="Встречи"
          icon={<IconHeartHandshake size={16} stroke={1.5}/>}
          component={Link}
          to="/link1"
          active={9 === active}
          onClick={() => setActive(9)}
        />
        <NavLink
          label="Пилотные проекты"
          icon={<IconHelicopter size={16} stroke={1.5}/>}
          childrenOffset={28}
          active={10 === active}
          onClick={() => setActive(10)}
        >
          <NavLink
            label="Все проекты"
            icon={useSubIcons ? (<IconReceipt size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1001 === active}
            onClick={() => setActive(1001)}
          />
        </NavLink>
        <NavLink
          label="Дайджест новостей"
          icon={<IconNews size={16} stroke={1.5}/>}
          component={Link}
          to="/"
          active={11 === active}
          onClick={() => setActive(11)}
        />
        <NavLink
          label="Справочники"
          icon={<IconBooks size={16} stroke={1.5}/>}
          childrenOffset={28}
          active={12 === active}
          onClick={() => setActive(12)}
        >
          <NavLink
            label="Статусы"
            icon={useSubIcons ? (<IconCrown size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1201 === active}
            onClick={() => setActive(1201)}
          />
          <NavLink
            label="Отрасли"
            icon={useSubIcons ? (<IconBuildingFactory2 size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1202 === active}
            onClick={() => setActive(1202)}
          />
          <NavLink
            label="Источники"
            icon={useSubIcons ? (<IconEar size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1203 === active}
            onClick={() => setActive(1203)}
          />
          <NavLink
            label="ГОСБ"
            icon={useSubIcons ? (<IconBuildingSkyscraper size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1204 === active}
            onClick={() => setActive(1204)}
          />
          <NavLink
            label="Регионы"
            icon={useSubIcons ? (<IconMapPin size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1205 === active}
            onClick={() => setActive(1205)}
          />
          <NavLink
            label="Тербанки"
            icon={useSubIcons ? (<IconBuildingBank size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1206 === active}
            onClick={() => setActive(1206)}
          />
          <NavLink
            label="Направления"
            icon={useSubIcons ? (<IconArrowRampRight size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1207 === active}
            onClick={() => setActive(1207)}
          />
          <NavLink
            label="Индикаторы"
            icon={useSubIcons ? (<IconRuler size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1208 === active}
            onClick={() => setActive(1208)}
          />
          <NavLink
            label="Фокусные территории"
            icon={useSubIcons ? (<IconFocus2 size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1209 === active}
            onClick={() => setActive(1209)}
          />
          <NavLink
            label="Индустрии"
            icon={useSubIcons ? (<IconBuildingFactory size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1210 === active}
            onClick={() => setActive(1210)}
          />
          <NavLink
            label="ДЗО"
            icon={useSubIcons ? (<IconAffiliate size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1211 === active}
            onClick={() => setActive(1211)}
          />
          <NavLink
            label="Метрики планирования"
            icon={useSubIcons ? (<IconRulerMeasure size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1212 === active}
            onClick={() => setActive(1212)}
          />
          <NavLink
            label="Группы продуктов"
            icon={useSubIcons ? (<IconComponents size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1213 === active}
            onClick={() => setActive(1213)}
          />
          <NavLink
            label="Причины эскалаций"
            icon={useSubIcons ? (<IconZoomExclamation size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1214 === active}
            onClick={() => setActive(1214)}
          />
          <NavLink
            label="Категории продуктов"
            icon={useSubIcons ? (<IconCheese size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1215 === active}
            onClick={() => setActive(1215)}
          />
          <NavLink
            label="ВСП"
            icon={useSubIcons ? (<IconBuildingCommunity size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1216 === active}
            onClick={() => setActive(1216)}
          />
          <NavLink
            label="Группы проектов"
            icon={useSubIcons ? (<IconColorFilter size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1217 === active}
            onClick={() => setActive(1217)}
          />
          <NavLink
            label="Объекты"
            icon={useSubIcons ? (<IconCone size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1218 === active}
            onClick={() => setActive(1218)}
          />
          <NavLink
            label="Группы направлений"
            icon={useSubIcons ? (<IconArrowAutofitContent size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1219 === active}
            onClick={() => setActive(1219)}
          />
          <NavLink
            label="Метрики КУБ"
            icon={useSubIcons ? (<Icon3dCubeSphere size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1220 === active}
            onClick={() => setActive(1210)}
          />
          <NavLink
            label="Темы встреч"
            icon={useSubIcons ? (<IconPresentation size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1221 === active}
            onClick={() => setActive(1221)}
          />
          <NavLink
            label="TV-категории"
            icon={useSubIcons ? (<IconDeviceTvOld size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1222 === active}
            onClick={() => setActive(1222)}
          />
        </NavLink>
        <NavLink
          label="Администрирование"
          icon={<IconBrandTabler size={16} stroke={1.5}/>}
          childrenOffset={28}
          active={13 === active}
          onClick={() => setActive(13)}
        >
          <NavLink
            label="Пользователи"
            icon={useSubIcons ? (<IconUsers size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1301 === active}
            onClick={() => setActive(1301)}
          />
          <NavLink
            label="Роли"
            icon={useSubIcons ? (<IconMasksTheater size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1302 === active}
            onClick={() => setActive(1302)}
          />
          <NavLink
            label="Логи"
            icon={useSubIcons ? (<IconTextPlus size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1303 === active}
            onClick={() => setActive(1303)}
          />
          <NavLink
            label="Настройка"
            icon={useSubIcons ? (<IconAdjustments size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1304 === active}
            onClick={() => setActive(1304)}
          />
          <NavLink
            label="Модули"
            icon={useSubIcons ? (<IconBrandLaravel size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1305 === active}
            onClick={() => setActive(1305)}
          />
          <NavLink
            label="Контакты"
            icon={useSubIcons ? (<IconAddressBook size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1306 === active}
            onClick={() => setActive(1306)}
          />
          <NavLink
            label="Вложения"
            icon={useSubIcons ? (<IconPaperclip size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1307 === active}
            onClick={() => setActive(1307)}
          />
          <NavLink
            label="Рассылки"
            icon={useSubIcons ? (<IconMailForward size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link1"
            active={1308 === active}
            onClick={() => setActive(1308)}
          />
          <NavLink
            label="Экспорт/импорт"
            icon={useSubIcons ? (<IconArrowsTransferDown size={16} stroke={1.5}/>) : undefined}
            component={Link}
            to="/link2"
            active={1309 === active}
            onClick={() => setActive(1309)}
          />
        </NavLink>
        <NavLink
          label="Дэшборд"
          icon={<IconDashboard size={16} stroke={1.5}/>}
          component={Link}
          to="/link1"
          active={14 === active}
          onClick={() => setActive(14)}
        />
        <NavLink
          label="Дэшборд iFrame"
          icon={<IconFrame size={16} stroke={1.5}/>}
          component={Link}
          to="/link2"
          active={15 === active}
          onClick={() => setActive(15)}
        />
      </ScrollArea>
    </Navbar>
  );
}
export default NavigationBar;