import { useEffect } from 'react'
import { coinbaseWallet, hooks } from '../../connectors/coinbaseWallet'
import { Accounts } from '../Accounts'
import { Card } from '../Card'
import { Chain } from '../Chain'
import { ConnectWalletButton } from '../ConnectWalletButton'
import { Status } from '../Status'

const { useChainId, useAccounts, useError, useIsActivating, useIsActive, useProvider, useENSNames } = hooks

export default function CoinbaseWalletCard() {
  const chainId = useChainId()
  const accounts = useAccounts()
  const error = useError()
  const isActivating = useIsActivating()

  const isActive = useIsActive()

  const provider = useProvider()
  const ENSNames = useENSNames(provider)

  // attempt to connect eagerly on mount
  useEffect(() => {
    void coinbaseWallet.connectEagerly()
  }, [])

  return (
    <Card>
      <div style={{ alignSelf: 'center' }}>
        <img src="/images/coinbase.svg" />
      </div>
      <ConnectWalletButton
        connector={coinbaseWallet}
        chainId={chainId}
        isActivating={isActivating}
        error={error}
        isActive={isActive}
      />
    </Card>
  )
}
