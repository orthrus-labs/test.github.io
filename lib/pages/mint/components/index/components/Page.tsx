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
      {/* Hero Section */}
      <div className='hero-section py-4'>
        <div className='overlay d-block d-xl-none'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <h1 className="h1 mb-0 py-4">
                The Best Heroes 
                <span className='text-primary'> Clan</span> of the 
                Metaverse
              </h1>{' '}
              <h4 className="h4">Best fighter in the most popular Gym of the metaverse.</h4>
              <div className="mt-4 mb-5">
                <a href="/mint" className="btn btn-primary">
                  Mint
                </a>
                <a href="#team" className="btn btn-secondary ms-2">
                  <span className="hidden sm:inline">See Team</span> <span className="inline sm:hidden">Components</span>
                </a>{' '}
              </div>
            </div>
          </div>{' '}
          {/* <div>
            <script
              type="text/javascript"
              src="//cdn.carbonads.com/carbon.js?serve=CEAI423U&amp;placement=daisyuicom"
              id="_carbonads_js"
            ></script>
          </div> */}
        </div>{' '}
      </div>
      
      
      {/* The Roadmap */}
      <div className="container py-4 py-lg-5">
        <div>
          <h2 className="h2">The Roadmap</h2>{' '}
          <div>
            <div className="row mt-4">
              <div className="col-6 col-lg-4">
                <div className='list-icon mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-apple icon" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                  </svg>
                </div>
                <h5 className='h5'>
                  <span className="text-primary">10%</span> - We pay back our moms.
                </h5>
                <p>We’ve set up some goalposts for ourserlves.</p>
              </div>
              <div className="col-6 col-lg-4">
                <div className='list-icon mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-apple icon" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                  </svg>
                </div>
                <h5 className='h5'>
                  <span className="text-primary">20%</span> - We pay back our moms.
                </h5>
                <p>We’ve set up some goalposts for ourserlves. Once we hit a target sell throungh percentage.</p>
              </div>
              <div className="col-12 col-lg-4">
                <div className='list-icon mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-apple icon" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                  </svg>
                </div>
                <h5 className='h5'>
                  <span className="text-primary">40%</span> - We pay back our moms.
                </h5>
                <p>We’ve set up some goalposts for ourserlves. Once we hit.</p>
              </div>
            </div>
            <div className="row mt-4 mt-lg-5">
              <div className="col-6 col-lg-4">
                <div className='list-icon mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-apple icon" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                  </svg>
                </div>
                <h5 className='h5'>
                  <span className="text-primary">60%</span> - We pay back our moms.
                </h5>
                <p>We’ve set up some goalposts for ourserlves.</p>
              </div>
              <div className="col-6 col-lg-4">
                <div className='list-icon mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-apple icon" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                  </svg>
                </div>
                <h5 className='h5'>
                  <span className="text-primary">80%</span> - We pay back our moms.
                </h5>
                <p>We’ve set up some goalposts for ourserlves. Once we hit a target sell throungh percentage.</p>
              </div>
              <div className="col-12 col-lg-4">
                <div className='list-icon mb-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-apple icon" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
                  </svg>
                </div>
                <h5 className='h5'>
                  <span className="text-primary">90%</span> - We pay back our moms.
                </h5>
                <p>We’ve set up some goalposts for ourserlves. Once we hit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* The Team */}
      <div className="team-section py-4 py-lg-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="team-title">
              <h2 className="h2">The Team</h2>{' '}
              <p className="mt-1">Ambassadors of the fight business</p>{' '}
            </div>
            <div className="d-none d-lg-block team-subtitle">
              <h4 className="h5">Lorem Ipsum</h4>{' '}
            </div>
          </div>

          <div className="row my-4">
            <div className='col-12 col-lg-4'>
              <div className="card">
                <img src="https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png" />
                <h3 className="h4 font-bold mb-2"><span className='text-primary'>Manuele</span> Raini</h3>{' '}
              </div>
            </div>
            <div className='col-12 col-lg-4'>
              <div className="card">
              <img src="https://lh3.googleusercontent.com/wDOZrOnLF3pnb4NgJc4KxQS1q5FLZYZ9yfLtUZQ3rDdhwErcgyYy-0zYZ6N8_mmUum61Th8mDG10zRtQsa5uHJ4EZBuzFptLIEP_=w600" />
                <h3 className="h4 font-bold mb-2"><span className='text-primary'>Diego</span> Famulari</h3>{' '}
              </div>
            </div>
            <div className='col-12 col-lg-4'>
              <div className="card">
                <img src="https://preview.redd.it/tpxvny1fbdv61.png?auto=webp&s=2c624ad00989dc058a34d62a8730061d43a05df4" />
                <h3 className="h4 font-bold mb-2"><span className='text-primary'>Riccardo</span> Persiani</h3>{' '}
              </div>
            </div>
          </div>{' '}
          <div className='text-center'>
            <a href="/docs/themes" className="btn btn-secondary">
              Read more about us
            </a>{' '}
          </div>
          <div></div>
        </div>
      </div>


      {/* Mint Crypto Fighter Section */}
      <div className='container py-4 py-lg-5'>
        <div className='row'>
          <div className='col-12 col-lg-4'>
            <h2 className="h2">Mint Crypto Fighters</h2>{' '}
            <a href="/mint" className="btn btn-primary mt-2">
                Mint guide
            </a>
          </div>
          <div className='col-12 col-lg-8 mt-4 mt-lg-0'>
            <div className='d-block d-lg-flex align-items-end'>
              <div>
                <p className='mb-4 mt-2'>Minting stars 20th April 2022</p>{' '}
                <p className='mt-2'><span className='font-bold text-primary'>1.</span> Have a wallet</p>{' '}
                <p className='mt-2'><span className='font-bold text-primary'>2.</span> Go to the mint page</p>{' '}
                <p className='mt-2'><span className='font-bold text-primary'>3.</span> Make sure you are on Ethereum Mainnet</p>{' '}
              </div>
              <div className='ms-0 ms-lg-5'>
                <p className='mt-2'><span className='font-bold text-primary'>4.</span> Press mint button</p>{' '}
                <p className='mt-2'><span className='font-bold text-primary'>5.</span> Confirm operation</p>{' '}
                <p className='mt-2'><span className='font-bold text-primary'>6.</span> Check account to find your NFT</p>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className='image-section pt-4 pt-lg-5'>
        <img src='/images/images_section.jpg' className='img-fluid w-100' alt='Crypto Fighters'/>
      </div>
      
    </div>
  )
}

Page.skipAuthentication = true

export default Page
