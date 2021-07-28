import { useState } from "react";
import Navigation from "../Navigation";
import { Line, StyledBurger } from "./styled"


const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <Navigation open={open}/>
        </>
    )
}
export default Burger;