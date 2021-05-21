
const Driver = () => {

    let driversData = [
        { id: 1, name: 'Льюис Хемильтон' },
        { id: 2, name: 'Макс Ферстаппен' },
        { id: 3, name: 'Валлтери Боттас' },
        { id: 4, name: 'Ландо Норрис' },
        { id: 5, name: 'Шарль Леклер' },
        { id: 6, name: 'Серхио Перес' },
        { id: 7, name: 'Даниель Риккьярдо' },
        { id: 8, name: 'Карлос Сайнс' },
        { id: 9, name: 'Эстебан Окон' },
        { id: 10, name: 'Пьер Гасли' },
        { id: 11, name: 'Ленс Стролл' },
        { id: 12, name: 'Фернандо Алонсо' },
        { id: 13, name: 'Юки Цунода' },
        { id: 14, name: 'Кими Райкконен' },
        { id: 15, name: 'Антонио Джовинацци' },
        { id: 16, name: 'Себастьян Феттель' },
        { id: 17, name: 'Джордж Расселл' },
        { id: 18, name: 'Николас Латифи' },
        { id: 19, name: 'Мик Шумахер' },
        { id: 20, name: 'Никита Мазепин' }
    ]

    let drivers = driversData.map(d => <p>{d.name}</p>)
    return (
        <div>
            {drivers}
        </div>
    )
}

export default Driver