import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'

import { ChangeLogModal, GitHubModal, SideBar } from '../components'
import Link from 'next/link'
import classNames from 'classnames'
import { IconBrandTwitch } from '@tabler/icons'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Lost Ark Timer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.35"
        />
        <meta property="og:title" content="Lost Ark Timer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lostarktimer.app/" />
        <meta
          property="og:image"
          content="https://www.lostarktimer.app/images/LA_Mokko_seed.png"
        />
        <meta
          name="og:description"
          content="Lost Ark Timer - Alarms for Lost Ark bosses, islands, events and more."
        />
        <meta
          name="description"
          content="Lost Ark Timer - Alarms for Lost Ark bosses, islands, events and more."
        />
      </Head>
      <div className="relative bg-sky-800 py-2 text-center lg:px-4">
        <div
          className="flex items-center bg-sky-900/50 p-2 leading-none text-sky-100 lg:inline-flex lg:rounded-full"
          role="alert"
        >
          <span className="sm:text-md mx-4 flex-auto text-center text-sm font-semibold">
            <label
              htmlFor="changelog-modal"
              className="cursor-pointer text-teal-300"
            >
              Interesting things are planned. Click to find out.
            </label>
          </span>
        </div>
      </div>

      <ChangeLogModal />
      <GitHubModal />

      <SideBar />
      <div className="navbar w-full bg-base-300 px-4 py-4 dark:bg-base-300 lg:px-20">
        <div className="navbar-start text-lg font-semibold uppercase">
          <div className="tabs">
            <span
              className={classNames('tab', 'hover:text-sky-600', {
                'tab-active': router.pathname == '/alarms',
              })}
            >
              <Link href="/alarms">Alarms</Link>
            </span>

            <span
              className={classNames('tab', 'hover:text-sky-600', {
                'tab-active': router.pathname == '/merchants',
              })}
            >
              <span className="tooltip tooltip-bottom" data-tip="eta soon">
                <Link href="">Merchants</Link>
              </span>
            </span>
          </div>
        </div>
        <div className="navbar-center flex-col">
          <a className="btn btn-ghost text-xl normal-case">Lost Ark Timer</a>

          <div className="font-mono text-sm uppercase">
            Added alert sounds, hiding events and more! Check the Settings.
          </div>
        </div>
        <div className="navbar-end text-right text-lg font-semibold uppercase"></div>
      </div>
      <div className="relative">
        <Component className="z-0" {...pageProps} />
        <footer className="absolute bottom-0 z-50 flex h-12 w-full items-center justify-center border-t bg-base-300">
          I might start streaming myself coding the website, just for fun.
          Starting Monday. Follow ={'>'}
          <a
            className="ml-1"
            href="https://www.twitch.tv/delay3d"
            style={{ color: '#6441a5' }}
          >
            <IconBrandTwitch className="inline" /> https://www.twitch.tv/delay3d
          </a>
        </footer>
      </div>
      {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? (
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a4240e015e2044669726099a04d1e7a7"}'
          strategy="afterInteractive"
          onError={(e) => {
            console.error('Script failed to load', e)
          }}
        />
      ) : null}
      {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? (
        <>
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "a4240e015e2044669726099a04d1e7a7"}'
            strategy="afterInteractive"
            onError={(e) => {
              console.error('Script failed to load', e)
            }}
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-Z2D1S06JHH"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z2D1S06JHH');`}
          </Script>{' '}
        </>
      ) : null}
    </>
  )
}

export default MyApp
