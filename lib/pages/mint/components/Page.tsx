import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
import { ReactComponentElement } from 'react'
import Squares from "../../../../public/abi/Squares.json"
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

const Page = () => {
    const { account } = useWeb3React()

  return (
    <div>
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Crypto Fighters - Mint</title>
      </head>
      <button
        className="btn"
        onClick={async () => { await mint(account)}}
      >
        Mint
      </button>
    </div>
  )
}

Page.skipAuthentication = true

export default Page
