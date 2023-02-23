import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import './App.css'
import {useTheme} from "./components/Hooks/useTheme";
import {Circle} from "./components/Circle/Circle";
import {Badge} from "react-bootstrap";
import {Toggle} from "./components/Toggle/Toggle";

export default function App() {
    const { theme, setTheme } = useTheme()

    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    return (
        <div className="app__container">
                <ButtonGroup className="d-grid gap-2">
                    <Button variant="secondary" size="lg" onClick={handleLightThemeClick}>
                        Light
                    </Button>
                    <Button variant="secondary" onClick={handleDarkThemeClick}>
                        Dark
                    </Button>
                </ButtonGroup>
            <h1>
             <Badge bg="primary" pill>New</Badge>
            </h1>
            <Circle/>
            <Toggle/>
        </div>
    )
}