import { useState } from 'react'
import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ACCOMODATIE', href: '/accommodation' },
    { name: 'INFO', href: '/info' },
    { name: 'PRIJZEN', href: '/prices' },
    { name: 'CONTACT', href: '/contact' },
]

const Header = ({currentTab}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <header className="bg-white w-full">
            <nav className="mx-auto flex w-full items-center justify-around lg:justify-between lg:px-8" aria-label="Global">
                <div className="w-1/3 lg:flex justify-start items-center lg:p-10 hidden">
                    {/*<p className="text-[#5C5C5C] font-abereto text-xl">NL</p>*/}
                </div>
                <div className="lg:w-1/3 w-full flex flex-col justify-center items-center p-10">
                    <a href="/" className="text-center">
                        <h1 className="text-[#5C5C5C] text-5xl font-[400] font-abereto">MAISON</h1>
                        <h1 className="text-[#4C5D44] text-2xl font-[600] font-dancing-script">Barvaux</h1>
                    </a>
                </div>
                <div className="absolute right-0 pr-2 lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <img className="w-8 object-contain" src="/assets/menu%20(2).png" alt=""/>
                    </button>
                </div>
                <div className="hidden lg:flex lg:justify-between w-1/3">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className={`mr-4 text-center text-lg ${currentTab === item.name ? "font-extrabold" : "hover:font-extrabold"} hover:cursor-pointer`}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <div></div>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <p>TERUG</p>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`block text-lg ${currentTab === item.name ? "font-extrabold" : "hover:font-extrabold"} hover:cursor-pointer`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Header;
