import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import {
    Body,
    ButtonBox
} from './styles'
import logo from '../../assets/logo.png'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: React.CSSProperties['color'];
        };
    }

    interface Palette {
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color'];
        };
    }
}

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#1da57a',
            darker: '#157254',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    textAlign: 'center'
}));

export default function Home() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    const handleOpenInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <Body>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#000",
                        },
                    },
                    fullScreen: {
                        enable: true,
                        zIndex: -1,
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#1da57a",
                        },
                        links: {
                            color: "#1da57a",
                            distance: 120,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <ThemeProvider theme={theme}>
                <ButtonBox>
                    <a onClick={() => handleOpenInNewTab('https://www.portalsatel.com.br')} style={{cursor: "pointer"}}>
                        <img
                            src={logo}
                            style={{ width: '280px', marginBottom: '50px' }}
                        />
                    </a>

                    <Box sx={{ width: '100%' }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Item>
                                    <Button
                                        style={{ width: '100%', fontFamily: 'Roboto' }}
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        className="buttonStyle"
                                        onClick={() => handleOpenInNewTab('https://helpdesk-satel.netlify.app/home')}
                                    >
                                        HelpDesk
                                    </Button>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Button
                                        style={{ width: '100%', fontFamily: 'Roboto'}}
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        className="buttonStyle"
                                        onClick={() => handleOpenInNewTab('https://portal-ceara.herokuapp.com/')}
                                    >
                                        PJ Cear??
                                    </Button>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Button
                                        style={{ width: '100%', fontFamily: 'Roboto' }}
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        className="buttonStyle"
                                        onClick={() => handleOpenInNewTab('https://atp-satel.netlify.app')}
                                    >
                                        APT
                                    </Button>
                                </Item>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Button
                                        style={{ width: '100%', fontFamily: 'Roboto' }}
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        className="buttonStyle"
                                        onClick={() => handleOpenInNewTab('https://www.satelbrasilenergia.com.br/')}
                                    >
                                        Site
                                    </Button>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </ButtonBox>
            </ThemeProvider>
        </Body>
    )
}