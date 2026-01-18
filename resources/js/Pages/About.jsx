import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function About() {
    return (
        <MainLayout>
            <Head>
                <title>About Pranay Aryal</title>
                <meta name="description" content="Pranay Aryal is a software engineer and is available for consulting"/>
            </Head>
            <div className="text-black/90">
                <div className="min-h-screen max-w-[500px] mx-auto">
                    <div className="mt-20 relative w-full max-w-2xl lg:max-w-7xl">
                        <h1 className="text-3xl fong-serif">About Me</h1>
                        <p className='my-5'>I'm Pranay Aryal, a self-taught software developer who attended the YouTube University.</p>
                        <p className='my-5'>I mainly write for my future forgetful self but if it helps you, I'm good.  If I'm not coding, you will find me playing the piano, or<br />cooking. </p>
	    <p className='my-5'>I have a degree in medicine and like to critically appraise research studies.</p>
                    </div>
                    <img src="./about.svg" className='mt-8' />
                </div>

            </div>

        </MainLayout>
    );
}
