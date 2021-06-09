//  import '../../public/assets/team/mersedes.jpg'
let state = {
    duelPage: {
        duels: [
            {id: 1, team: 'Мерседес', driver1: 'Хемильтон', duel: '4 - 2', driver2: 'Боттас', difference: '0.064'},
            {id: 2, team: 'Ред Булл', driver1: 'Ферстаппен', duel: '5 - 1', driver2: 'Перес', difference: '0.471'},
            {id: 3, team: 'Макларен', driver1: 'Риккьярдо', duel: '3 - 3', driver2: 'Норрис', difference: '0.229'},
            {id: 4, team: 'Феррари', driver1: 'Леклер', duel: '5 - 1', driver2: 'Сайнс', difference: '0.167'},
            {id: 5, team: 'Альпин', driver1: 'Алонсо', duel: '2 - 4', driver2: 'Окон', difference: '0.354'},
            {id: 6, team: 'Альфа Таури', driver1: 'Гасли', duel: '6 - 0', driver2: 'Цунода', difference: '0.579'},
            {id: 7, team: 'Астон Мартин', driver1: 'Феттель', duel: '3 - 3', driver2: 'Стролл', difference: '0.063'},
            {
                id: 8,
                team: 'Альфа Ромео',
                driver1: 'Джовинацци',
                duel: '4 - 2',
                driver2: 'Райкконен',
                difference: '0.356'
            },
            {id: 9, team: 'Вильямс', driver1: 'Расселл', duel: '6 - 0', driver2: 'Латифи', difference: '0.513'},
            {id: 10, team: 'Хаас', driver1: 'Шумахер', duel: '5 - 1', driver2: 'Мазепин', difference: '0.623'}
        ]
    },
    driverPage: {
        drivers: [
            {id: 1, name: 'Льюис Хемильтон'},
            {id: 2, name: 'Макс Ферстаппен'},
            {id: 3, name: 'Валлтери Боттас'},
            {id: 4, name: 'Ландо Норрис'},
            {id: 5, name: 'Шарль Леклер'},
            {id: 6, name: 'Серхио Перес'},
            {id: 7, name: 'Даниель Риккьярдо'},
            {id: 8, name: 'Карлос Сайнс'},
            {id: 9, name: 'Эстебан Окон'},
            {id: 10, name: 'Пьер Гасли'},
            {id: 11, name: 'Ленс Стролл'},
            {id: 12, name: 'Фернандо Алонсо'},
            {id: 13, name: 'Юки Цунода'},
            {id: 14, name: 'Кими Райкконен'},
            {id: 15, name: 'Антонио Джовинацци'},
            {id: 16, name: 'Себастьян Феттель'},
            {id: 17, name: 'Джордж Расселл'},
            {id: 18, name: 'Николас Латифи'},
            {id: 19, name: 'Мик Шумахер'},
            {id: 20, name: 'Никита Мазепин'}
        ]
    },
    schedulePage: {
        schedule: [
            {id: 1, race: 'Бахрейн'},
            {id: 2, race: 'Имола'},
            {id: 3, race: 'Португалия'},
            {id: 4, race: 'Испания'},
            {id: 5, race: 'Монако'},
            {id: 6, race: 'Баку'},
            {id: 7, race: 'Франция'}
        ],
        tracks: [
            {
                id: 1,
                name: 'Сахир',
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bahrain_International_Circuit--Grand_Prix_Layout.svg/280px-Bahrain_International_Circuit--Grand_Prix_Layout.svg.png'
            },
            {
                id: 2,
                name: 'Имола',
                url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Imola.svg/274px-Imola.svg.png'
            }
        ]
    },
    standingsPage: {
        races: [
            {id: 1, race: 'Бахрейн'},
            {id: 2, race: 'Имола'},
            {id: 3, race: 'Португалия'},
            {id: 4, race: 'Испания'},
            {id: 5, race: 'Монако'},
            {id: 6, race: 'Баку'}
        ],
        drivers: [
            {id: 1, driver: 'Ферстаппен', r1: '18', r2: '25', r3: '18', r4: '19', r5: '25', r6: '-', total: '105'},
            {id: 2, driver: 'Хемильтон', r1: '25', r2: '19', r3: '25', r4: '25', r5: '7', r6: '-', total: '101'},
            {id: 3, driver: 'Перес', r1: '10', r2: '-', r3: '12', r4: '10', r5: '12', r6: '25', total: '69'},
            {id: 4, driver: 'Норрис', r1: '12', r2: '15', r3: '10', r4: '4', r5: '15', r6: '10', total: '66'},
            {id: 5, driver: 'Леклер', r1: '8', r2: '12', r3: '8', r4: '16', r5: '-', r6: '12', total: '52'},
            {id: 6, driver: 'Боттас', r1: '16', r2: '-', r3: '16', r4: '15', r5: '-', r6: '-', total: '47'},
            {id: 7, driver: 'Сайнс', r1: '4', r2: '10', r3: '-', r4: '6', r5: '18', r6: '4', total: '42'},
            {id: 8, driver: 'Гасли', r1: '', r2: '6', r3: '1', r4: '1', r5: '8', r6: '15', total: '31'},
            {id: 9, driver: 'Феттель', r1: '-', r2: '-', r3: '-', r4: '-', r5: '10', r6: '18', total: '28'},
            {id: 10, driver: 'Риккьярдо', r1: '6', r2: '8', r3: '2', r4: '8', r5: '-', r6: '2', total: '26'},
            {id: 11, driver: 'Алонсо', r1: '-', r2: '1', r3: '4', r4: '-', r5: '-', r6: '8', total: '13'},
            {id: 12, driver: 'Окон', r1: '-', r2: '2', r3: '6', r4: '2', r5: '2', r6: '-', total: '12'},
            {id: 13, driver: 'Стролл', r1: '1', r2: '4', r3: '-', r4: '-', r5: '4', r6: '-', total: '9'},
            {id: 14, driver: 'Цунода', r1: '2', r2: '-', r3: '-', r4: '-', r5: '0', r6: '6', total: '8'},
            {id: 15, driver: 'Райкконен', r1: '-', r2: '-', r3: '-', r4: '-', r5: '-', r6: '1', total: '1'},
            {id: 16, driver: 'Джовинацци', r1: '-', r2: '-', r3: '-', r4: '-', r5: '1', r6: '-', total: '1'},
            {id: 17, driver: 'Расселл', r1: '-', r2: '-', r3: '-', r4: '-', r5: '-', r6: '-', total: '0'},
            {id: 18, driver: 'Латифи', r1: '-', r2: '-', r3: '-', r4: '-', r5: '-', r6: '-', total: '0'},
            {id: 19, driver: 'Шумахер', r1: '-', r2: '-', r3: '-', r4: '-', r5: '-', r6: '-', total: '0'},
            {id: 20, driver: 'Мазепин', r1: '-', r2: '-', r3: '-', r4: '-', r5: '-', r6: '-', total: '0'}
        ],
        teams: [
            {id: 1, team: 'Ред Булл', r1: '28', r2: '25', r3: '30', r4: '29', r5: '37', r6: '25', total: '174'},
            {id: 2, team: 'Мерседес', r1: '41', r2: '19', r3: '41', r4: '40', r5: '7', r6: '-', total: '148'},
            {id: 3, team: 'Феррари', r1: '12', r2: '22', r3: '8', r4: '18', r5: '18', r6: '16', total: '94'},
            {id: 4, team: 'Макларен', r1: '18', r2: '23', r3: '12', r4: '12', r5: '15', r6: '12', total: '92'},
            {id: 5, team: 'Альфа Таури', r1: '2', r2: '6', r3: '1', r4: '1', r5: '8', r6: '21', total: '39'},
            {id: 6, team: 'Астон Мартин', r1: '1', r2: '4', r3: '-', r4: '-', r5: '14', r6: '18', total: '37'},
            {id: 7, team: 'Альпин', r1: '-', r2: '3', r3: '10', r4: '2', r5: '2', r6: '8', total: '25'},
            {id: 8, team: 'Альфа Ромео', r1: '-', r2: '-', r3: '-', r4: '-', r5: '1', r6: '1', total: '2'},
            {id: 9, team: 'Вильямс', r1: '-', r2: '-', r3: '-', r4: '-', r5: '-', r6: '-', total: '0'},
            {id: 10, team: 'Хаас', r1: '-', r2: '-', r3: '-', r4: '-', r5: '-', r6: '-', total: '0'}
        ]
    },
    teamPage: {
        teams: [
            {id: 1, name: 'Мерседес', img: 'https://www.formula1.com/content/dam/fom-website/teams/2021/mercedes.png.transform/4col/image.png'},
            {id: 2, name: 'Ред Булл', img: 'https://www.formula1.com/content/dam/fom-website/teams/2021/red-bull-racing.png.transform/4col/image.png'},
            {id: 3, name: 'Макларен', img: 'https://www.formula1.com/content/dam/fom-website/teams/2021/mclaren.png.transform/4col/image.png'},
            {id: 4, name: 'Феррари', img: 'https://www.formula1.com/content/dam/fom-website/teams/2021/ferrari.png.transform/4col/image.png'},
            {id: 5, name: 'Альпин', img: 'https://www.formula1.com/content/dam/fom-website/teams/2021/alpine.png.transform/4col/image.png'},
            {id: 6, name: 'Альфа Таури', img: 'https://www.formula1.com/content/dam/fom-website/teams/2021/alphatauri.png.transform/4col/image.png'},
            {id: 7, name: 'Астон Мартин', img: 'https://www.formula1.com/content/dam/fom-website/teams/2021/aston-martin.png.transform/4col/image.png'},
            {id: 8, name: 'Альфа Ромео', img: 'https://www.formula1.com/content/dam/fom-website/teams/2021/alfa-romeo-racing.png.transform/4col/image.png'},
            {id: 9, name: 'Вильямс', img: 'https://www.formula1.com/content/dam/fom-website/teams/2021/williams.png.transform/4col/image.png'},
            {id: 10, name: 'Хаас', img: 'https://www.formula1.com/content/dam/fom-website/teams/2021/haas-f1-team.png.transform/4col/image.png'}
        ]
    }
}
export default state