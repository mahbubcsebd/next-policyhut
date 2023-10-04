/* eslint-disable react/jsx-key */

'use client';

import logo from '@/public/icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    const navLinks = [
        {
            id: 1,
            name: 'about',
            path: '/about',
        },
        {
            id: 2,
            name: 'services',
            path: '/services',
        },
        {
            id: 3,
            name: 'contact',
            path: '/contact',
        },
    ];

    const homeLinks = [
        {
            id: 1,
            name: 'home',
            path: '/',
        },
        {
            id: 2,
            name: 'home 2',
            path: '/home',
        },
    ];

    const subLinks = [
        {
            id: 1,
            name: 'blog',
            path: '/blog',
        },
        {
            id: 2,
            name: 'faq',
            path: '/faq',
        },
        {
            id: 3,
            name: 'partner',
            path: '/partner',
        },
        {
            id: 4,
            name: 'quote',
            path: '/quote',
        },
        {
            id: 5,
            name: 'service-process',
            path: '/service-process',
        },
        {
            id: 6,
            name: 'team',
            path: '/team',
        },
        {
            id: 7,
            name: 'testimonials',
            path: '/testimonials',
        },
    ];
    return (
        <>
            <header id="header" className="header header-1">
                <Navbar expand="lg" className="">
                    <Container>
                        <Navbar.Brand>
                            <Link href="/">
                                <Image src={logo} alt="Landscape picture" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <NavDropdown title="Home" id="basic-nav-dropdown">
                                    {homeLinks.map((homeLink) => (
                                        <NavDropdown.Item key={homeLink.id}>
                                            <Link
                                                className={`${
                                                    homeLink.path === path ? 'active' : ''
                                                } nav-link`}
                                                href={homeLink.path}
                                            >
                                                {homeLink.name}
                                            </Link>
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                                {navLinks.map((navLink) => (
                                    <Link
                                        className={`${
                                            navLink.path === path ? 'active' : ''
                                        } nav-link`}
                                        href={navLink.path}
                                        key={navLink.id}
                                    >
                                        {navLink.name}
                                    </Link>
                                ))}
                                <NavDropdown title="Pages" id="basic-nav-dropdown">
                                    {subLinks.map((subLink) => (
                                        <NavDropdown.Item key={subLink.id}>
                                            <Link
                                                className={`${
                                                    subLink.path === path ? 'active' : ''
                                                } nav-link`}
                                                href={subLink.path}
                                            >
                                                {subLink.name}
                                            </Link>
                                        </NavDropdown.Item>
                                    ))}
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default Header;
