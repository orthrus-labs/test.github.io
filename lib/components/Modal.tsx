import WalletConnectCard from './connectors/WalletConnectCard'
import MetaMaskCard from './connectors/MetamaskCard'
import CoinbaseWalletCard from './connectors/CoinbaseWalletCard'

export function Modal() {
  return (
    <div>
      <div className="flex space-x-3">
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <MetaMaskCard />
            <WalletConnectCard />
            <CoinbaseWalletCard />
          </label>
        </label>
      </div>
    </div>
  )
}
