import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChartGenerator } from 'react-dvis-test';
import { HashRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { Routes, Route } from 'react-router';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

export const config = `{"types":{"id":"NUMBER","project.id":"NUMBER","project.name":"STRING","tracker.id":"NUMBER","tracker.name":"STRING","status.id":"NUMBER","status.name":"STRING","priority.id":"NUMBER","priority.name":"STRING","author.id":"NUMBER","author.name":"STRING","assigned_to.id":"NUMBER","assigned_to.name":"STRING","subject":"STRING","description":"STRING","start_date":"DATE","done_ratio":"NUMBER","is_private":"BOOLEAN","created_on":"DATE","updated_on":"DATE"},"names":{"id":"id","project.id":"project.id","project.name":"project.name","tracker.id":"tracker.id","tracker.name":"tracker.name","status.id":"status.id","status.name":"status.name","priority.id":"priority.id","priority.name":"priority.name","author.id":"author.id","author.name":"author.name","assigned_to.id":"assigned_to.id","assigned_to.name":"assigned_to.name","subject":"subject","description":"description","start_date":"start_date","done_ratio":"done_ratio","is_private":"is_private","created_on":"created_on","updated_on":"updated_on"},"format":{"id":"default","project.id":"default","project.name":"default","tracker.id":"default","tracker.name":"default","status.id":"default","status.name":"default","priority.id":"default","priority.name":"default","author.id":"default","author.name":"default","assigned_to.id":"default","assigned_to.name":"default","subject":"default","description":"default","start_date":"DD_MM_YYYY","done_ratio":"default","is_private":"TRUE_FALSE","created_on":"DD_MM_YYYY_HH_MM","updated_on":"HH_MM"}}`;

export const fisData = [
  {
    id: 1711,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 108,
      name: 'Agnieszka Oblakowska-Mucha',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'sala D D10 - wentylacja/klimatyzacja',
    description:
      'Proszę o sprawdzenie, czy w sali D jest jakakolwiek wentylacja. Na wyświetlaczu klimatyzacji jest error, zajęcia z 15 studentami trzeba teraz prowadzić przy otwartych drzwiach, bo jest duszno.\r\n',
    start_date: '2023-01-03',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '71',
      },
    ],
    created_on: '2023-01-03T16:12:47Z',
    updated_on: '2023-01-03T16:12:47Z',
    closed_on: null,
  },
  {
    id: 1708,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 60,
      name: 'Tomasz Fiutowski',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'Naprawa klimatyzatora w laboratorium 124 D11',
    description: 'Zepsuty klimatyzator w laboratorium 124 D11, prawdopodobnie nastąpił wyciek czynnika chłodzącego.',
    start_date: '2023-01-02',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '73',
      },
    ],
    created_on: '2023-01-02T12:44:02Z',
    updated_on: '2023-01-02T12:44:02Z',
    closed_on: null,
  },
  {
    id: 1661,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 37,
      name: 'Malgorzata Krawczyk',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'zamek',
    description:
      'Dzień dobry,\r\nuprzejmie proszę o wymianę wkładki w zamku w pokoju D7/311.\r\n\r\nMałgorzata Krawczyk',
    start_date: '2022-12-13',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '72',
      },
    ],
    created_on: '2022-12-13T10:56:05Z',
    updated_on: '2022-12-13T10:56:05Z',
    closed_on: null,
  },
  {
    id: 1633,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 68,
      name: 'Magdalena Boruchowska',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'brak serwisu sprzątającego',
    description:
      'Od dłuższego czasu (ok. 2 tyg.) pomieszczenia i korytarz II p. w D-7 nie są sprzątane. W toaletach ręczniki i papier toaletowy nie są uzupełniane na bieżąco.',
    start_date: '2022-12-05',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '72',
      },
    ],
    created_on: '2022-12-05T12:56:52Z',
    updated_on: '2022-12-05T12:56:52Z',
    closed_on: null,
  },
  {
    id: 1618,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 32,
      name: 'Bartlomiej Spisak',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'Problem: Sala 16 w D10',
    description:
      'W sali 16 w budynku D10 jest brak markerów do pisania po tablicy. Na portierni są dostępne jedynie markery permanentne, niedostosowane do typu tablicy.',
    start_date: '2022-11-30',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '71',
      },
    ],
    created_on: '2022-11-30T12:01:41Z',
    updated_on: '2022-11-30T12:01:41Z',
    closed_on: null,
  },
  {
    id: 1614,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 145,
      name: 'Pawel Wrobel',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'nie działa wentylacja 225C',
    description: '',
    start_date: '2022-11-29',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '72',
      },
    ],
    created_on: '2022-11-29T06:56:13Z',
    updated_on: '2022-11-29T08:42:29Z',
    closed_on: null,
  },
  {
    id: 1599,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 16,
      name: 'Bartosz Mindur',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'Zapasowe klucze na portierni D10',
    description:
      'Dzień dobry,\r\n\r\nwczoraj okazało się, że nie ma klucza do sali D-10 207 - nie problemu poprosiłem o zapasowy.\r\nNiestety Pan portier nie potrafił stwierdzić, który to klucz i czy w ogóle takowy istnieje. \r\nPrzy okazji pokazał mi parę zapasowych kluczy, muszę przyznać mu rację - etykiet przy kluczach nie dało się (rozsądnie) odczytać.\r\n\r\nNie wiem jak wygląda sytuacja innych kluczy zapasowych, ale mam duże wątpliwości czy są łatwe do znalezienia. \r\nBardzo prosiłbym o zrobienie przeglądu zapasowych kluczy tak, aby faktycznie były dostępne dla pracowników. \r\n\r\nPozdrawiam,\r\nBartosz Mindur\r\n\r\nPS.\r\nPan portier dalej jest mocno zaskoczony prośbą o klucze zapasowe.\r\nSugeruje szukanie osoby - podając jej nazwisko, która wzięła pierwszy zestaw kluczy (sic!).\r\n',
    start_date: '2022-11-23',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '71',
      },
    ],
    created_on: '2022-11-23T16:43:27Z',
    updated_on: '2022-11-24T08:04:23Z',
    closed_on: null,
  },
  {
    id: 1581,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 145,
      name: 'Pawel Wrobel',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'brudno wokół D-7',
    description:
      'Od ostatniego meczu na stadionie Wisły minęło już kilkanaście dni a puste butelki po napojach wyskokowych, kapsle i pety nadal zdobią wejście do D-7. ',
    start_date: '2022-11-21',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '72',
      },
    ],
    created_on: '2022-11-21T10:05:14Z',
    updated_on: '2022-11-21T10:27:10Z',
    closed_on: null,
  },
  {
    id: 1548,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 2,
      name: 'W trakcie realizacji',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 35,
      name: 'Iwona Grabowska-Bold',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'Przetarty kabel do rzutnika w sali 225 D-10',
    description:
      'Dzień dobry,\r\n\r\nkabel do rzutnika (w zestawie do pobrania z portierni) do sali 225 D-10 jest przetarty i grozi porażeniem prądem.\r\nProszę o wymianę lub dodatkową izolację.\r\n\r\nDziękuję,\r\nPozdrawiam,\r\nIwona Grabowska-Bołd\r\n',
    start_date: '2022-11-10',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '71',
      },
    ],
    created_on: '2022-11-10T13:36:48Z',
    updated_on: '2022-11-14T08:14:37Z',
    closed_on: null,
  },
  {
    id: 1546,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 2,
      name: 'W trakcie realizacji',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 100,
      name: 'Jakub Haberko',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'Wymiana gabek do tablicy w s. 206 i 207',
    description:
      'Uprzejmie proszę o wymianę na czyste zużytych gąbek do białych tablic w s. 206 i 207. Te, które są obecnie tylko rozmazują brud, mimo stosowania sprayu.\r\nPozdrawiam\r\nJakub Haberko',
    start_date: '2022-11-10',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '71',
      },
    ],
    created_on: '2022-11-10T12:08:35Z',
    updated_on: '2022-11-14T08:40:37Z',
    closed_on: null,
  },
  {
    id: 1537,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 2,
      name: 'W trakcie realizacji',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 50,
      name: 'Lukasz Gondek',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'Usterki D7',
    description:
      'Dzień dobry,\r\n\r\n1. Ponowna awaria dygestorium w D7-109 - analogicznie do poprzedniej - nie działa odciąg.\r\n2. W D7-013 awaria klimatyzacji.\r\n\r\nPozdrowienia\r\nŁukasz Gondek',
    start_date: '2022-11-08',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '72',
      },
    ],
    created_on: '2022-11-08T07:11:34Z',
    updated_on: '2022-11-15T13:29:38Z',
    closed_on: null,
  },
  {
    id: 1535,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 122,
      name: 'Tomasz Szumlak',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'Usunięcie dwóch szaf pancernych D11 pierwsze piętro',
    description:
      'Obok sal 103 oraz 104 znajdują się trzy szafy pancerne. Tylko jedna z nich jest użytkowana przez KOiDC, przeznaczenie pozostałych dwóch jest już zapomniane i datuje się jeszcze na okres obecności IFJ w budynku D11. Proszę uprzejmie o otworzenie szaf oraz ich usunięcie.',
    start_date: '2022-11-07',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '73',
      },
    ],
    created_on: '2022-11-07T12:00:41Z',
    updated_on: '2022-11-07T12:00:41Z',
    closed_on: null,
  },
  {
    id: 1534,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 145,
      name: 'Pawel Wrobel',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'nadal problem z drzwiami D-7 225A',
    description: 'Mimo poprzedniej interwencji zdarza się, że drzwi się nie zatrzaskują. ',
    start_date: '2022-11-05',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '72',
      },
    ],
    created_on: '2022-11-05T16:47:42Z',
    updated_on: '2022-11-05T16:47:42Z',
    closed_on: null,
  },
  {
    id: 1513,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 2,
      name: 'W trakcie realizacji',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 200,
      name: 'Wojciech Krupa',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'Niedziałający telefon',
    description: 'Brak sygnału w telefonie. \r\nD11/126\r\nPamiętam że w piątek jeszcze dzwonił. ',
    start_date: '2022-10-25',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '73',
      },
    ],
    created_on: '2022-10-25T09:49:48Z',
    updated_on: '2022-10-27T08:02:18Z',
    closed_on: null,
  },
  {
    id: 1490,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 2,
      name: 'W trakcie realizacji',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 16,
      name: 'Bartosz Mindur',
    },
    assigned_to: {
      id: 383,
      name: 'Roman Ogarek',
    },
    subject: 'Kompleksowe uporządkowanie korytarza na 1 piętrze ',
    description:
      'Dzień dobry,\r\nze względu na przerwanie remontu budynku D-11 i brak jakiegokolwiek realnego końca tegoż proszę o:\r\n* **dokładne umycie i profesjonalne wyczyszczenie podłogi korytarza na 1 piętrze budynku D-11** - i nie chodzi mi o rozsmarowywanie brudu obecnie używaną maszyną, a faktyczne jej wyczyszczenie.\r\n* **posprzątanie nielegalnego składowiska śmieci** przy sali D-11 104 i 103, stan tego miejsca urąga wszelkim standardom i dodatkowo stanowi zagrożenie bezpieczeństwa użytkowników budynku oraz studentów.\r\n\r\nBardzo prosiłbym również o pouczenie osoby (firmy) sprzątającej, że umycie podłogi **nie polega** na równomiernym rozsmarowaniu brudu po całej jej powierzchni, a jednakowoż na jego pozbyciu się i usunięciu.\r\n\r\nW załączeniu dokumentacja zdjęciowa korytarza w D-11.',
    start_date: '2022-10-13',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '73',
      },
    ],
    created_on: '2022-10-13T17:25:54Z',
    updated_on: '2022-11-07T08:57:56Z',
    closed_on: null,
  },
  {
    id: 1436,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 152,
      name: 'Piotr Gronek',
    },
    assigned_to: {
      id: 252,
      name: 'Roman Bonczarowski',
    },
    subject: 'Przebudowa węzła sieci komputerowej D-11',
    description:
      'Dzień dobry\r\n\r\nOtwieram zagadnienie dotyczące przebudowy węzła sieci komputerowej i telefonicznej, znajdującego się w korytarzu I. piętra pawilonu D-11. Obsługuje on wszystkie pomieszczenia na parterze i I. piętrze.\r\n\r\n* Skończyła się pojemność kanałów kablowych, nowych instalacji nie daje się już doprowadzić do węzła (np. z p. 107).\r\n* Zachodzi potrzeba usunięcia zbędnego starego okablowania i patch-paneli z szafy węzła.\r\n* Wykonawca sieci kablowych w remontowanych pomieszczeniach ma przygotować plan/kosztorys niezbędnych prac.\r\n* Zakres ewentualnych robót wymaga przerwy w działaniu sieci w D-11, po uzgodnieniu terminu z kierownictwem Katedry OiDC.\r\n\r\nDalsza dyskusja może się toczyć w tym wątku.\r\n\r\nPozdrawiam\r\nPiotr Gronek',
    start_date: '2022-09-23',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '73',
      },
    ],
    created_on: '2022-09-23T10:35:16Z',
    updated_on: '2022-09-23T10:35:16Z',
    closed_on: null,
  },
  {
    id: 1434,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 9,
      name: 'Bartłomiej Rachwał',
    },
    assigned_to: {
      id: 252,
      name: 'Roman Bonczarowski',
    },
    subject: 'Nadmiarowe meble w pracowni dydaktycznej D-10 204',
    description:
      'Dzień dobry,\r\nChciałbym zaproponować by uporządkować pracownię D-10 204. Mamy tam niepotrzebne meble/biurka i pudło z monitora interaktywnego (które chcemy zachować). Niepotrzebnie to zagraca pracownię - załączam zdjęcie. \r\nByć może jesteśmy wstanie coś z tym zrobić? Nie wiem, kto ostatecznie za to odpowiada, dlatego dołączam szersze grono osób.\r\n\r\nBartek\r\n\r\n![](clipboard-202209231038-gssu0.png)\r\n',
    start_date: '2022-09-23',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '71',
      },
    ],
    created_on: '2022-09-23T08:40:23Z',
    updated_on: '2022-09-23T10:37:32Z',
    closed_on: null,
  },
  {
    id: 1433,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 9,
      name: 'Bartłomiej Rachwał',
    },
    assigned_to: {
      id: 252,
      name: 'Roman Bonczarowski',
    },
    subject: 'Awaria nowo zamontowanych rolet okiennych, D11 p. 121',
    description: 'Załączam zdjęcie.\r\n\r\n![](clipboard-202209231026-0jiov.png)\r\n',
    start_date: '2022-09-23',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '73',
      },
    ],
    created_on: '2022-09-23T08:27:05Z',
    updated_on: '2022-09-23T08:27:05Z',
    closed_on: null,
  },
  {
    id: 1358,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 112,
      name: 'Jacek Niziol',
    },
    assigned_to: {
      id: 252,
      name: 'Roman Bonczarowski',
    },
    subject: 'Wymiana baterii kuchennej w pok.312',
    description:
      'Bateria przy zlewozmywaku w pok.312 obluzowała się i grozi uszkodzeniem wężyków doprowadzających wodę. Stało się tak, ponieważ ma zbyt nisko osadzoną wylewkę. Użytkownicy próbując nalać wodę do np. czajnika szarpali ją do góry. Ponowny montaż tej samej baterii nie rozwiąże problemu.  Proszę wymienić baterię na inną, z wysoką wylewką, najlepiej giętką, taką jak na załączonym przykładowym zdjęciu. Kolor wylewki szary lub grafit. Aktualnie w Castoramie taka bateria firmy Ferro kosztuje ok. 130 złotych. \r\nProszę także sprawdzić wężyki doprowadzające bieżącą wodę do baterii czy nie zostały uszkodzone przez blachę zlewozmywaka.',
    start_date: '2022-07-21',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '71',
      },
    ],
    created_on: '2022-07-21T09:41:15Z',
    updated_on: '2022-07-21T09:41:15Z',
    closed_on: null,
  },
  {
    id: 1228,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 100,
      name: 'Jakub Haberko',
    },
    assigned_to: {
      id: 252,
      name: 'Roman Bonczarowski',
    },
    subject: 'Zacięta lewa roleta w p. 316A',
    description:
      'Dzień dobry,\r\nChcę zgłosić problem z lewą roletą w p. 316A: zacięła się, nie da się jej ani opuścić, ani podnieść. Ponadto roleta ma urwany łańcuszek - stało się to, gdy próbowałem ją podnieść. Roleta jest jeszcze nowa, na pewno na gwarancji.\r\nPozdrawiam\r\nJakub Haberko',
    start_date: '2022-05-30',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '71',
      },
    ],
    created_on: '2022-05-30T08:22:00Z',
    updated_on: '2022-06-06T08:19:50Z',
    closed_on: null,
  },
  {
    id: 1192,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 185,
      name: 'Tomasz Chwiej',
    },
    assigned_to: {
      id: 252,
      name: 'Roman Bonczarowski',
    },
    subject: 'ZEPSUTA KILMATYZACJA W SALI 30  A W BUDYNKU D10',
    description:
      'W sali 30A w budynku D10 nie dziala klimatyzacja. \r\nProblem zglaszalem 22 kwietnia i do tej pory nie zostal rozwiazany.',
    start_date: '2022-05-16',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '71',
      },
    ],
    created_on: '2022-05-16T09:50:18Z',
    updated_on: '2022-05-16T09:50:43Z',
    closed_on: null,
  },
  {
    id: 1170,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 1,
      name: 'Nowe',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 158,
      name: 'Marek Idzik',
    },
    assigned_to: {
      id: 252,
      name: 'Roman Bonczarowski',
    },
    subject: 'Doprowadzenie internetu do pokoju 216',
    description:
      'W p. 216 są tylko 2 gniazdka internetowe, a pracują tam 3 osoby.\r\nProszę o doprowadzenie co najmniej 2 dodatkowych gniazdek.\r\n  ',
    start_date: '2022-05-05',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '71',
      },
    ],
    created_on: '2022-05-05T12:24:54Z',
    updated_on: '2022-05-05T12:24:54Z',
    closed_on: null,
  },
  {
    id: 1119,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 2,
      name: 'W trakcie realizacji',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 108,
      name: 'Agnieszka Oblakowska-Mucha',
    },
    assigned_to: {
      id: 156,
      name: 'Beata Ryczek',
    },
    subject: 'brak funkcji uchyłu w oknie D11',
    description: 'jedno ze skrzydeł nowych okien w 106/D11 wypada w trybie uchyłu, wymagana regulacja',
    start_date: '2022-04-14',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '73',
      },
    ],
    created_on: '2022-04-14T08:50:51Z',
    updated_on: '2022-04-19T07:44:55Z',
    closed_on: null,
  },
  {
    id: 872,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 2,
      name: 'W trakcie realizacji',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 208,
      name: 'Grzegorz Golaszewski',
    },
    assigned_to: {
      id: 156,
      name: 'Beata Ryczek',
    },
    subject: 'Klimatyzacja w p. 231 D-10',
    description: 'W pokoju 231 nie ma pilota do klimatyzacji oraz brakuje osłony przewodów klimatyzacji.',
    start_date: '2022-03-30',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '71',
      },
    ],
    created_on: '2022-03-30T18:32:44Z',
    updated_on: '2022-04-01T07:55:29Z',
    closed_on: null,
  },
  {
    id: 850,
    project: {
      id: 38,
      name: 'Dział obsługi technicznej',
    },
    tracker: {
      id: 6,
      name: 'Zlecenie',
    },
    status: {
      id: 9,
      name: 'Zatwierdzone',
    },
    priority: {
      id: 2,
      name: 'Normal',
    },
    author: {
      id: 37,
      name: 'Malgorzata Krawczyk',
    },
    assigned_to: {
      id: 156,
      name: 'Beata Ryczek',
    },
    subject: 'Gołębie',
    description:
      'Dzień dobry,\r\nuprzejmie proszę o zamontowanie systemu uniemożliwiającego gołębiom przesiadywanie na filarach przy balkonie w budynku D7. Z nadejściem wiosny zauważyliśmy, że pojawił się problem, słupy już są zabrudzone.\r\n\r\nPozdrawiam,\r\nMałgorzata Krawczyk i Przemysław Gawroński',
    start_date: '2022-03-29',
    due_date: null,
    done_ratio: 0,
    is_private: false,
    estimated_hours: null,
    custom_fields: [
      {
        id: 17,
        name: 'Budynek',
        value: '72',
      },
    ],
    created_on: '2022-03-29T10:04:24Z',
    updated_on: '2022-04-01T07:53:52Z',
    closed_on: null,
  },
];

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const theme = createTheme();

root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterLuxon}>
          <CssBaseline />
          <Routes>
            <Route path={'*'} element={<ChartGenerator data={fisData} config={JSON.parse(config)} />} />
          </Routes>
        </LocalizationProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
);
