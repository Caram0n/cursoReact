
export const events = [
    {
        id: 1,
        start: new Date('2024-10-21 13:00:00'),
        end: new Date('2024-10-21 15:00:00'),
        title: 'Cumpleaños de mi jefe',
        notes: 'Hay que comprar el pastel para el jefe',

    },
    {
        id: 2,
        start: new Date('2024-11-09 13:00:00'),
        end: new Date('2024-11-09 15:00:00'),
        title: 'Cumpleaños de Alejandro',
        notes: 'Hay que comprar el pastel para Alejandro',

    },
]


export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null
}

export const calendarWithActiveEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: {...events[0]}
}

