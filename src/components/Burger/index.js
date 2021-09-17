import { useState } from "react";
import Navigation from "../Navigation";
import { StyledBurger } from "./styled"


const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
                <Navigation open={open} />
            </StyledBurger>
            <Navigation open={open} />
        </>
    )
}
export default Burger;