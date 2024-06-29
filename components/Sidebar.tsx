'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({user}: SiderbarProps) => {
    const pathname = usePathname();
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link href="/" className='mb-12 cursor-pointer items-center gap-2'>
            <Image
            src="/icons/logo.svg"
            width={54}
            height={54}
            alt="Horizon logo"
            className="size-[44px] max-xl:size-34"
            />
             <h1 className="sidebar-logo">Rbank</h1>
            </Link>
            {sidebarLinks.map((item)=> {
                const isActivate = pathname === item.route || pathname.startsWith(`$(item.route)/`)
                return(
                    <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bg-bank-gradient': isActivate})}>
                        <div className="relative size-6">
                        <Image 
                            src={item.imgURL}
                            alt={item.label}
                            fill
                            className={cn({
                                'brightness-[3] invert-0': isActivate
                            })}
                        />
                        </div>
                        <p className={cn("sidebar-label", { "!text-white": isActivate })}>
                        {item.label}
                        </p>
                    </Link>
                )
            }
            )}
            User
        </nav>
            Footer
    </section>
  )
}

export default Sidebar