import React from "react";
import style from '../styles/About.module.css';
import Image from 'next/image';
import Head from 'next/head';

const About = () => {
    return(
        <>
            <Head>
                <title>Next About Page</title>
                <meta name="description" content="Generated by Next js"></meta>
            </Head>
            <div>
                <h2 className= {style.about_txt}>This is about file.</h2>
                <Image src='/nextJs_image.png' alt={"NextJs"} width={600} height={300} />
            </div>
        </>
    )
}

export default About;