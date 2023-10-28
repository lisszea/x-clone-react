import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

function Header() {
    const { user, userId, setUser, logout } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:3000/users/${userId}`)
            .then((res) => res.json())
            .then((user) => {
                setUser(user);
            })
    }, [userId, setUser]);

    return (
        <header>
            <p>{user?.username}</p>
            <button onClick={logout}>Log out</button>
        </header>
    )
}

export default Header;