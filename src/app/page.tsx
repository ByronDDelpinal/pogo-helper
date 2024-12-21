'use client'
import Image from 'next/image'

import { CopyTextSection } from './components/CopyTextSecton'
import { MainHeading } from './components/MainHeading'
import Navigation from './components/Navigation'
import { QueryBuilder } from './components/QueryBuilder/QueryBuilder'
import { QueryBuilderResult } from './components/QueryBuilder/QueryBuilderResult'
import SecondaryHeading from './components/SecondaryHeading'
import { SelectedQueryOptionsProvider } from './contexts/SelectedQueryOptionsContext'

export default function Home() {
  const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    margin: 'var(--spacing-m)',
  }

  return (
    <SelectedQueryOptionsProvider>
      <div style={mainContainerStyle}>
        {/* -------- NAVIGATION --------*/}
        <Navigation />

        {/* -------- MAIN CONTENT --------*/}
        <main className='flex flex-col row-start-2 items-left justify-items-left w-full'>
          {/* -------- INTRODUCTION --------*/}
          <p>
            The purpose of this page is to provide easy access to friend and
            pokemon search queries. Using these queries can provide a lot of
            efficiency to how you manage your pokemon storage and friends. A lof
            of the pre-made queries are subjective. Please{' '}
            <a href='mailto:byron.delpinal@gmail.com'>
              send an email to fiss1on (Byron)
            </a>{' '}
            with any feedback. Thanks!
          </p>

          {/* -------- FRIENDSHIP QUERIES --------*/}
          <MainHeading text='Friend Queries'></MainHeading>
          <p>
            Increasing in friendship level is the most efficient way to gain XP
            without spending money in Pokemon Go. Using effective search queries
            will maximize your ability to do so. To learn more about how
            friendship works, please visit{' '}
            <a href='https://pokemongo.fandom.com/wiki/Friends'>
              the `&quot;`friends`&quot;` page of the Pokemon Go Fandom Wiki.
            </a>
            . In this section, I`&apos;`ll go over how I maximize gifting in
            Pokemon Go and provide a quick way for you to do the same. A few
            tips:
          </p>
          <ul>
            <li>
              <b>Send gifts in the morning.</b> This allows you to refill your
              gifts during the day by visiting Pokestops. If you have time, you
              can even send other gifts throughout the day while you continue to
              fill your gift inventory.
            </li>
            <li>
              <b>Open gifts at night.</b> This ensures there is no duplicate
              interactions while trading or raiding with friends.
            </li>
            <li>
              <b>Always filter interactable friends out.</b> If you have already
              interacted with a friend that day, do not open their gift. Only
              send them a gift if you`&apos;`ve exhausted all
              non-interacted-with friends.
            </li>
            <li>
              <b>Send best friend gifts last.</b> Making lucky friends is great
              but, in my opinion, it should be secondary to increasing
              friendship levels, as this will maximize your XP gains.
            </li>
            <li>
              <b>Never send gifts to lucky friends.</b> There is no reason to
              interact with lucky friends unless you need items from their
              gifts.
            </li>
          </ul>

          <SecondaryHeading text='Sending Gifts'></SecondaryHeading>
          <p>
            Step One: Friends you haven`&apos;`t interacted with yet that are
            not best friends.
          </p>
          <CopyTextSection stringToCopy='!interactable&!friendlevel4' />

          <p>
            Step Two: Friends you have interacted with yet that are not best
            friends.
          </p>
          <CopyTextSection stringToCopy='interactable&!friendlevel4' />

          <p>
            Step Three: Non-lucky best friends you have not interacted with.
          </p>
          <CopyTextSection stringToCopy='!lucky&!interactable&friendlevel4' />

          <p>Step Three: Non-lucky best friends you have interacted with.</p>
          <CopyTextSection stringToCopy='!lucky&interactable&friendlevel4' />

          {/* -------- FRIENDSHIP Query Builder --------*/}
          <SecondaryHeading text='Build Your Own Query'></SecondaryHeading>
          <QueryBuilder />
          <QueryBuilderResult />

          {/* -------- POKEMON QUERIES --------*/}
          <MainHeading text='Pokemon Queries'></MainHeading>

          {/* -------- RESOURCES --------*/}
          <MainHeading text='Resources'></MainHeading>
        </main>

        {/* -------- FOOTER --------*/}
        <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
          <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/file.svg'
              alt='File icon'
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/window.svg'
              alt='Window icon'
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className='flex items-center gap-2 hover:underline hover:underline-offset-4'
            href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/globe.svg'
              alt='Globe icon'
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </SelectedQueryOptionsProvider>
  )
}
