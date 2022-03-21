import { Modal } from './Modal'
import { useWeb3React } from '@web3-react/core'
import Link from 'next/link'
import { FunctionComponent } from 'react'

export function Navbar(): FunctionComponent {
  const { account, connector } = useWeb3React()
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 ">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-xl">Crypto Fighters</a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Team</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <Link href="/mint">Mint</Link>
          </li>
          {account == undefined ? (
            <label htmlFor="my-modal-4" className="btn">
              Connect Wallet
            </label>
          ) : (
            <li
              tabIndex={0}
            >
              <a>
                <button>{account.slice(0, 7)}...</button>
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul>
                <li>
                  <button style={{ width: '140px', alignSelf: 'center' }} onClick={() => connector.deactivate()}>
                    Disconnect
                  </button>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
      <Modal />
    </div>
  )
}
