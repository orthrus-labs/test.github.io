import type { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import type { Web3ReactHooks } from '@web3-react/core'
import type { MetaMask } from '@web3-react/metamask'
import { WalletConnect } from '@web3-react/walletconnect'

export function ConnectWalletButton({
  connector,
  chainId,
  isActivating,
  error,
  isActive,
}: {
  connector: MetaMask | WalletConnect | CoinbaseWallet
  chainId: ReturnType<Web3ReactHooks['useChainId']>
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>
  error: ReturnType<Web3ReactHooks['useError']>
  isActive: ReturnType<Web3ReactHooks['useIsActive']>
}) {
  if (error) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }} />
        <button className="btn btn-primary" style={{ width: '140px', alignSelf: 'center' }} onClick={() => connector.activate(4)}>
          Try Again?
        </button>
      </div>
    )
  } else if (isActive) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem' }} />
        <button className="btn btn-primary" style={{ width: '140px', alignSelf: 'center' }} onClick={() => connector.deactivate()}>
          Disconnect
        </button>
      </div>
    )
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '1rem', width: '140px' }} />
        <button
          className="btn btn-primary"
          style={{ width: '140px', alignSelf: 'center' }}
          onClick={isActivating ? undefined : () => connector.activate(4)}
          disabled={isActivating}
        >
          Connect
        </button>
      </div>
    )
  }
}
