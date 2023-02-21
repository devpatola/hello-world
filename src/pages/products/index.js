import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Products() {
    return (
        <>
            <Navbar />
            <h1>Produtos</h1>
            <Link href='/'>Voltar</Link>
        </>
    )
}
