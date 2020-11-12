import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getPostData, getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Land from '../components/sections/Land'
import Intro from '../components/sections/Intro'
import Contact from '../components/sections/Contact'
import Skills from '../components/sections/Skills'

export default function Home({ allPostsData,introData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={utilStyles.headingMd}>
        <p>Desarrollador de Software Fullstack</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      <section >
        <Land />
        <Intro postData={introData} />
        <Skills />
        <Contact />
        
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const introData = await getPostData("intro");
  return {
    props: {
      allPostsData,
      introData
    }
  }
}
