// Компонент панели навигации
import {FC, useState} from "react";
import {Link, To} from "react-router-dom";
import {Navbar, NavLink, ScrollArea, Badge} from "@mantine/core";
import {TablerIcon,
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
  IconAddressBook, IconPaperclip, IconMailForward, IconArrowsTransferDown, IconFileText
} from "@tabler/icons";

// Шаблон заполения панели навигации
interface INavLink {
  label: string,
  icon: TablerIcon,
  to?: To,
  rightSection?: any,
  children?: INavLink[]
}

// Заполнение панели навигации
const navLinks: INavLink[] = [
  {label: 'Направления ПРБР', icon: IconDirections, children: [
    {label: 'Отчет: доли и проекты', icon: IconChartPie, to: '/Link1/'},
    {label: 'Направления', icon: IconArrowFork, to: '/Link2/'},
    {label: 'Проекты', icon: IconPencil, to: '/Link1/'},
    {label: 'База лучших практик', icon: IconStar, to: '/Link2/'},
    {label: 'ГЧП/Лизинг/Инвесты', icon: IconLicense, to: '/Link1/'}
  ]},
  {label: 'ГВК по ДЗО', icon: IconSpeakerphone, to: '/'},
  {label: 'База знаний', icon: IconBook, to: '/Link2/'},
  {label: 'Продуктовая полка', icon: IconShoppingCart, children: [
    {label: 'Отчет: полка', icon: IconReport, to: '/Link1/'},
    {label: 'Моя корзина продуктов', icon: IconShoppingBag, to: '/Link2/'},
    {label: 'Моя корзина КП', icon: IconBasket, to: '/Link1/'},
  ]},
  {label: 'КУБ', icon: IconBox, to: '/Link2/'},
  {label: 'TimeVision', icon: IconClock, to: '/Link2/'},
  {label: 'Управляющие ГОСБ', icon: IconFriends, to: '/Link2/'},
  {label: 'Мои задачи', icon: IconListDetails, to: '/Link2/', rightSection:
    <Badge
      size="xs" variant="filled"
      sx={{ width: 16, height: 16, padding: 0 }}
    >3
    </Badge>
  },
  {label: 'Встречи', icon: IconHeartHandshake, to: '/Link2/'},
  {label: 'Пилотные проекты', icon: IconHelicopter, children: [
    {label: 'Все проекты', icon: IconReceipt, to: '/Link1/'},
  ]},
  {label: 'Дайджест новостей', icon: IconNews, to: '/'},
  {label: 'Справочники', icon: IconBooks, children: [
    {label: 'Статусы', icon: IconCrown, to: '/Link1/'},
    {label: 'Отрасли', icon: IconBuildingFactory2, to: '/Link1/'},
    {label: 'Источники', icon: IconEar, to: '/Link1/'},
    {label: 'ГОСБ', icon: IconBuildingSkyscraper, to: '/Link1/'},
    {label: 'Регионы', icon: IconMapPin, to: '/Link1/'},
    {label: 'Тербанки', icon: IconBuildingBank, to: '/Link1/'},
    {label: 'Направления', icon: IconArrowRampRight, to: '/Link1/'},
    {label: 'Индикаторы', icon: IconRuler, to: '/Link1/'},
    {label: 'Фокусные территории', icon: IconFocus2, to: '/Link1/'},
    {label: 'Индустрии', icon: IconBuildingFactory, to: '/Link1/'},
    {label: 'ДЗО', icon: IconAffiliate, to: '/Link1/'},
    {label: 'Метрики планирования', icon: IconRulerMeasure, to: '/Link1/'},
    {label: 'Группы продуктов', icon: IconComponents, to: '/Link1/'},
    {label: 'Причины эскалаций', icon: IconZoomExclamation, to: '/Link1/'},
    {label: 'Категории продуктов', icon: IconCheese, to: '/Link1/'},
    {label: 'ВСП', icon: IconBuildingCommunity, to: '/Link1/'},
    {label: 'Группы проектов', icon: IconColorFilter, to: '/Link1/'},
    {label: 'Объекты', icon: IconCone, to: '/Link1/'},
    {label: 'Группы направлений', icon: IconArrowAutofitContent, to: '/Link1/'},
    {label: 'Метрики КУБ', icon: Icon3dCubeSphere, to: '/Link1/'},
    {label: 'Темы встреч', icon: IconPresentation, to: '/Link1/'},
    {label: 'TV-категории', icon: IconDeviceTvOld, to: '/Link1/'},
 ]},
  {label: 'Администрирование', icon: IconBrandTabler, children: [
    {label: 'Пользователи', icon: IconUsers, to: '/Link1/'},
    {label: 'Роли', icon: IconMasksTheater, to: '/Link1/'},
    {label: 'Логи', icon: IconTextPlus, to: '/Link1/'},
    {label: 'Настройка', icon: IconAdjustments, to: '/Link1/'},
    {label: 'Модули', icon: IconBrandLaravel, to: '/Link1/'},
    {label: 'Контакты', icon: IconAddressBook, to: '/Link1/'},
    {label: 'Вложения', icon: IconPaperclip, to: '/Link1/'},
    {label: 'Рассылки', icon: IconMailForward, to: '/Link1/'},
    {label: 'Экспорт/импорт', icon: IconArrowsTransferDown, to: '/Link1/'},
  ]},
  {label: 'Дэшборд', icon: IconDashboard, to: '/Link2/'},
  {label: 'Дэшборд iFrame', icon: IconFrame, to: '/Link2/'},
  {label: 'Просмотр PDF', icon: IconFileText, to: '/pdf'},
];

// Тип пропсов панели навигации
interface NavigationBarProps {
  hidden: boolean;
  useSubIcons?: boolean;
}

// Компонент
const NavigationBar: FC<NavigationBarProps> = ({hidden, useSubIcons= true}) => {
  const [active, setActive] = useState<number>(1000);
  return (
    // Выводит панель навигации по заполненному шаблону
    <Navbar p="0" hiddenBreakpoint="sm" hidden={hidden} width={{sm: (useSubIcons ? 250 : 220)}}>
      {/*<ScrollArea style={{width: (useSubIcons ? 250 : 220)}}>{items}</ScrollArea>*/}
      <ScrollArea style={{width: (useSubIcons ? 250 : 220)}}>
        {navLinks.map((item, index1) =>
          // Если нет дочерних элементов
          !item.children
          // Нижний уровень со ссылками
          ? (<NavLink
            key={100*index1}
            label={item.label}
            icon={<item.icon size={16} stroke={1.5} />}
            active={100*index1===active}
            onClick={() => setActive(100*index1)}
            component={Link}
            to={item.to!}
            rightSection={item.rightSection}
          />)
          // Верхний уровень с дочерними элементами
          : (<NavLink
            key={100*index1}
            label={item.label}
            icon={<item.icon size={16} stroke={1.5} />}
            childrenOffset={28}
          >
            {/* Дочерние элементы нижнего уровня со ссылками*/}
            {item.children.map((item, index2) =>
              (<NavLink
                key={100*index1+index2}
                label={item.label}
                icon={<item.icon size={16} stroke={1.5} />}
                active={100*index1+index2===active}
                onClick={() => setActive(100*index1+index2)}
                component={Link}
                to={item.to!}
                rightSection={item.rightSection}
              />))
            }
          </NavLink>)
        )}
      </ScrollArea>
    </Navbar>
  );
}
export default NavigationBar;