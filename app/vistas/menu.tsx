'use client'; // Solo si estás usando app router (Next 13+ con `/app`)

import Link from 'next/link';
import React from 'react';

const Menu = () => {
    return (
        <nav className="bg-black py-2">
            <ul className="flex justify-center space-x-6">
                <li>
                    <Link href="/sobreMi" className="text-white">SOBRE MÍ</Link>
                </li>
                <li>
                    <Link href="/curriculumVitae" className="text-white">CURRICULUM VITAE</Link>
                </li>
                <li>
                    <Link href="/proyectosInteresantes" className="text-white">PROYECTOS INTERESANTES</Link>
                </li>
                <li>
                    <Link href="/carreraDportiva" className="text-white">CARRERA DEPORTIVA</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;