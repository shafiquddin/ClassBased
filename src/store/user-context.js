import { createContext } from "react";

export const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

const UsersContext = createContext({
    users: []
})


export default UsersContext;
