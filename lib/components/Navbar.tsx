import { Modal } from './Modal'
import { useWeb3React } from '@web3-react/core'
import Link from 'next/link'
import { FunctionComponent } from 'react'

export function Navbar() {
  const { account, connector, isActive } = useWeb3React()
  
  return (
    <header className='site-header'>
         <div className='navigation header-wrapper'>
             <div className='container d-flex justify-content-between align-items-center'>
                 <div className='site-header-branding'>
                     <Link href="/">
                     <a className='logo'>
                         <img className='logo-top' src="/images/heores_clan_white.svg" />
                         <img className='sticky-logo d-none' src="/images/heores_clan_white.svg" />
                     </a>
                     </Link>
                 </div>
                 <div className='menu-main'>
                    <div className='menu-toggle d-block d-lg-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className='bi bi-list open close' viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <i className='fa-solid fa-xmark close d-none'></i>
                    </div>
                    <div className='menu-container d-none d-lg-block'>
                        <div className='menu-text-container'>
                             <ul className='menu-list'>
                                 <li className='menu-item'><Link href="/#team">Team</Link></li>
                                 <li className='menu-item'><Link href="/#about">About</Link></li>
                                 <li className='menu-item'><Link href="/mint">Mint</Link></li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 <div>
                     {account == undefined ? (
                         <label htmlFor="my-modal-4" className="btn btn-primary">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='d-none d-lg-block bi bi-wallet-fill me-2' viewBox="0 0 16 16">
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
                            <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
                            </svg> 
                            Connect Wallet
                         </label>
                     ) : (
                         <li 
                            tabIndex={0}
                            >
                            <a className='d-flex mb-1'>
                                <button><small>{account.slice(0, 7)}...</small></button>
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
                                <li className='list-group'>
                                <button className='btn btn-secondary' style={{ width: '140px', alignSelf: 'center' }} onClick={() => connector.deactivate()}>
                                    Disconnect
                                </button>
                                </li>
                            </ul>
                         </li>
                    )}
                    <Modal />
                </div>
            </div>
        </div>
    </header>
  )
}
