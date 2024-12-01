import { Head, Link } from '@inertiajs/react';

export default function MainLayout({ children }) {
    return (
        <div className="font-sans antialiased pt-8">
            <div className="flex space-x-8 w-[90%] lg:max-w-[1050px] mx-auto pt-8">
                <Link href='/' className='font-bold text-2xl'>PA</Link>
                <Link href='/about'>About</Link>
            </div>
            <div className="relative min-h-screen max-w-[1050px] mx-auto">
                <div className="relative w-full max-w-2xl px-6 md:px-12 lg:px-0 md:max-w-7xl">
                    <main className="mt-6">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
