export type user = {
    id: number,
    username: string,
    password: string,
    token: string
}

export const users: user[] = [
    {
        id: 1,
        username: 'user1',
        password: '123',
        token: 'test_user_123'
    },
    {
        id: 2,
        username: 'user2',
        password: '123',
        token: 'test_user_122'
    },
    {
        id: 3,
        username: 'user3',
        password: '123',
        token: 'test_user_121'
    },
]