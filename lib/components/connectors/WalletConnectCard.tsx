import { useEffect } from 'react'
import { hooks, walletConnect } from '../../connectors/walletConnect'
import { Accounts } from '../Accounts'
import { Card } from '../Card'
import { Chain } from '../Chain'
import { ConnectWalletButton } from '../ConnectWalletButton'
import { Status } from '../Status'

const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function WalletConnectCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void walletConnect.connectEagerly()
  }, [])

  return (
    <Card>
      <div style={{ alignSelf: 'center' }}>
        <img src="/images/walletconnect.svg" width={100} />
      </div>
      <ConnectWalletButton
        connector={walletConnect}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />
    </Card>
  )
}
