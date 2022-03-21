import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import Squares from '../../../../../../public/abi/Squares.json'
const mint = async (account: string) => {
  console.log('window.eth:', window.ethereum)
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  console.log('provider')
  const signer = provider.getSigner()
  const squares = new ethers.Contract('0xA3E95371a4c71292c922f29bAC64bd35C87e94a7', Squares, signer)
  let nftTxn = await squares.mint(account, 1, { from: account, value: ethers.utils.parseEther('0.01') })
  console.log('mining')
  await nftTxn.wait()
  console.log('done')
}
const prefix: string = process.env.NEXT_PUBLIC_BASE_PATH || ''

const Page = () => {
  const { account } = useWeb3React()

  return (
    <div>
      <head>
        <link rel="shortcut icon" href={prefix + "/favicon.png"}/>
        <title>Crypto Fighters - Home</title>
      </head>

      <div className="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20">
        <div className="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-40 lg:flex-row lg:items-end lg:gap-0 xl:gap-20">
          <div className="lg:px-10 lg:pb-32">
            <h1 className="font-title mb-2 py-4 font-extrabold lg:py-10">
              <div className="mb-2 text-5xl lg:text-7xl">The Gym Club</div>{' '}
              <div className="text-2xl lg:text-3xl">
                The most popular gym of the
                <br />
                metaverse
              </div>
            </h1>{' '}
            <div className="flex w-full flex-col items-start space-y-10 lg:flex-row lg:space-x-4 lg:space-y-0">
              <div className="my-2 flex max-w-sm flex-col gap-2 text-left">
                <div className="flex gap-2">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>{' '}
                  10000 unique avatars
                </div>{' '}
                <div className="flex gap-2">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>{' '}
                  Exclusive benefits
                </div>{' '}
                <div className="flex gap-2">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>{' '}
                  Enter the Gym club
                </div>{' '}
                <div className="flex gap-2">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>{' '}
                  Sponsored by the world best fighters
                </div>{' '}
                <div className="flex gap-2">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>{' '}
                  Fucking crazy artwork
                </div>
              </div>{' '}
            </div>{' '}
            <div className="mt-4 flex flex-1 justify-center space-x-2 sm:justify-start lg:mt-6 lg:justify-start">
              <a href="#team" className="btn btn-ghost btn-active lg:btn-lg normal-case">
                <span className="hidden sm:inline">See Team</span> <span className="inline sm:hidden">Components</span>
              </a>{' '}
              <a href="/mint" className="btn lg:btn-lg normal-case">
                Mint
              </a>
            </div>
          </div>{' '}
          <div>
            <script
              type="text/javascript"
              src="//cdn.carbonads.com/carbon.js?serve=CEAI423U&amp;placement=daisyuicom"
              id="_carbonads_js"
            ></script>
          </div>
          <img src="https://ik.imagekit.io/bayc/assets/mystery-ape.gif" className="max-w-sm rounded-lg shadow-2xl" />
        </div>{' '}
        <svg
          className="fill-secondary col-start-1 row-start-1 h-auto w-full"
          width="1600"
          height="595"
          viewBox="0 0 1600 595"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"></path>
        </svg>
      </div>

      <div className="hero bg-neutral text-neutral-content min-h-screen">
        <div className="hero-content mx-auto max-w-md text-center md:max-w-full">
          <div>
            <h2 className="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">The Roadmap</h2>{' '}
            <h3 className="mb-5 text-3xl font-bold">We are in for the long haul</h3>{' '}
            <p className="mx-auto mb-5 max-w-lg">
              We’ve set up some goalposts for ourselves. Once we hit a target sell through percentage, we will begin to
              work on realizing the stated goal.
            </p>
            <div className="my-20 flex flex-col">
              <div className="mockup-code bg-neutral-focus mx-auto w-full max-w-xs  shadow-lg sm:max-w-none">
                <pre>
                  <code>
                    <span className="text-teal-500">10%</span> - We pay back our moms.
                  </code>
                </pre>
              </div>{' '}
              <div className="divider text-neutral-content text-opacity-30">↓</div>{' '}
              <div className="mockup-code bg-neutral-focus mx-auto w-full max-w-xs  shadow-lg sm:max-w-none">
                <pre>
                  <code>
                    <span className="text-teal-500">20%</span> - We release the Caged Apes. 5 Caged Apes (tokens held{' '}
                    <br />
                    back from the sale) are airdropped to random Apeholders.
                  </code>
                </pre>
              </div>
              <div className="divider text-neutral-content text-opacity-30">↓</div>{' '}
              <div className="mockup-code bg-neutral-focus mx-auto w-full max-w-xs shadow-lg sm:max-w-none">
                <pre>
                  <code>
                    <span className="text-teal-500">40%</span> - BAYC gets its own YouTube channel, <br /> BAYC LoFi
                    Radio - Beats to Ape into Shitcoins To.
                  </code>
                </pre>
              </div>
              <div className="divider text-neutral-content text-opacity-30">↓</div>{' '}
              <div className="mockup-code bg-neutral-focus mx-auto w-full max-w-xs shadow-lg sm:max-w-none">
                <pre>
                  <code>
                    <span className="text-teal-500">60%</span> - Member-Exclusive BAYC Merch Store gets unlocked, <br />
                    featuring Limited Edition tees, hoodies, and other goodies.
                  </code>
                </pre>
              </div>
              <div className="divider text-neutral-content text-opacity-30">↓</div>{' '}
              <div className="mockup-code bg-neutral-focus mx-auto w-full max-w-xs shadow-lg sm:max-w-none">
                <pre>
                  <code>
                    <span className="text-teal-500">80%</span> -The clubhouse image becomes interactive and the <br />
                    Mysterious Note becomes legible, <br /> beginning a treasure hunt. The first to solve the mystery{' '}
                    <br /> will be rewarded 5 ETH and a Bored Ape.
                  </code>
                </pre>
              </div>
              <div className="divider text-neutral-content text-opacity-30">↓</div>{' '}
              <div className="mockup-code bg-neutral-focus mx-auto w-full max-w-xs shadow-lg sm:max-w-none">
                <pre>
                  <code>
                    <span className="text-teal-500">90%</span> -The Bored Ape liquidity pool is initiated.
                  </code>
                </pre>
              </div>
              <div className="divider text-neutral-content text-opacity-30">↓</div>{' '}
              <div className="mockup-code bg-neutral-focus mx-auto w-full max-w-xs shadow-lg sm:max-w-none">
                <pre>
                  <code>
                    <span className="text-teal-500">100%</span> -The Mutant Ape (NFT Breeding) Arcade Machine <br />{' '}
                    gets ﬁxed.
                    <br />
                    And we cook up new ways to ape with our friends.
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero from-primary to-accent text-primary-content min-h-screen bg-gradient-to-br">
        <div className="hero-content mx-auto max-w-md text-center md:max-w-full">
          <div>
            <h2 className="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">Powerful Team</h2>{' '}
            <h3 className="mb-5 text-3xl font-bold">Ambassadors of the fight business</h3>{' '}
            <p className="mx-auto mb-5 w-full max-w-lg">
              BAYC was created by four friends who set out to make some dope apes, test our skills, and try to build
              something (ridiculous).{' '}
              <a href="/docs/themes" className="link">
                Read more about us
              </a>
            </p>{' '}
            <div className="my-20 flex w-full flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <div
                data-theme="luxury"
                className="card bg-base-100 text-base-content mx-auto w-full max-w-xs flex-1 p-8"
              >
                <h3 className="text-sm font-bold mb-2">Manuele Raini</h3>{' '}
                <img src="https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png" />
              </div>{' '}
              <div
                data-theme="luxury"
                className="card bg-base-100 text-base-content mx-auto w-full max-w-xs flex-1 p-8"
              >
                <h3 className="text-sm font-bold mb-2">Diego Famulari</h3>{' '}
                <img src="https://lh3.googleusercontent.com/wDOZrOnLF3pnb4NgJc4KxQS1q5FLZYZ9yfLtUZQ3rDdhwErcgyYy-0zYZ6N8_mmUum61Th8mDG10zRtQsa5uHJ4EZBuzFptLIEP_=w600" />
              </div>{' '}
              <div
                data-theme="luxury"
                className="card bg-base-100 text-base-content mx-auto w-full max-w-xs flex-1 p-8"
              >
                <h3 className="text-sm font-bold mb-2">Riccardo Persiani</h3>{' '}
                <img src="https://preview.redd.it/tpxvny1fbdv61.png?auto=webp&s=2c624ad00989dc058a34d62a8730061d43a05df4" />
              </div>{' '}
            </div>{' '}
            <a href="/docs/themes" className="btn btn-ghost btn-sm mb-20">
              Read more about us
            </a>{' '}
            <div></div>
          </div>
        </div>
      </div>

      <div className="hero bg-base-100 text-base-content mx-auto min-h-screen max-w-md md:max-w-full">
        <div className="hero-content text-center">
          <div className="w-full max-w-md">
            <h2 className="mt-50 mb-2 text-4xl font-extrabold md:text-6xl">Mint Crypto Fighters</h2>{' '}
            <p className="mx-auto mt-5 w-full max-w-lg">Miniting stars 20th April 2022</p>{' '}
            <p className="mx-auto mt-5 w-full max-w-lg text-left">1. Have a wallet</p>{' '}
            <div className="mx-auto my-2 w-full max-w-md">
              <p className="mx-auto mt-5 w-full max-w-lg text-left">2. Go to the mint page</p>{' '}
              <p className="mx-auto mt-5 w-full max-w-lg text-left">3. Make sure you are on Ethereum Mainnet</p>{' '}
              <p className="mx-auto mt-5 w-full max-w-lg text-left">4. Press mint button</p>{' '}
              <p className="mx-auto mt-5 w-full max-w-lg text-left">5. Confirm operation</p>{' '}
              <p className="mx-auto mt-5 w-full max-w-lg text-left">6. Check account to find your NFT</p>{' '}
              <a href="/mint" className="btn-primary btn btn-wide mt-4 mb-20 shadow-lg mt-10">
                Mint guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Page.skipAuthentication = true

export default Page
