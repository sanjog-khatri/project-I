const todo = {
    id: 56,
    active: true,
    title: 'Doing',
    user: {
        id: 56,
        name: 'sanju'
    }
}

const { user } = todo
const { name: rough } = user

const todo2 = {
    ...todo 
    
}