import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { useLockBody } from '@/hooks/use-lock-body';
import { buttonVariants } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

const MobileNav = ({ items, children }) => {

    useLockBody();

    const { data: session } = useSession();
    const [loginSession, setLoginSession] = useState(null);
    useEffect(() => {
        console.log("Test information");
        setLoginSession(session);
    }, [session]);

    return (
        <div
            className={cn(
                'fixed inset-0 top-16 z-30 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 lg:hidden'
            )}
        >
            <div
                className={cn(
                    'relative z-20 grid gap-6 rounded-md border bg-popover p-4 text-popover-foreground shadow-md'
                )}
            >
                {/* Navigation */}
                <nav className="grid grid-flow-row auto-rows-auto text-sm">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disable ? '#' : item.href}
                            className={cn(
                                'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
                                item.disable &&
                                'cursor-not-allowed opacity-60'
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
                {/* Auth Buttons */}
                {!loginSession && (
                    <div className='items-center gap-3 flex lg:hidden'>

                        {/* Login */}
                        <Link
                            href="/login"
                            className={cn(
                                buttonVariants({ size: 'sm' }),
                                'rounded-3xl px-4'
                            )}
                        >
                            Login
                        </Link>
                        {/* Register Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className={cn(
                                    buttonVariants({
                                        variant: 'outline',
                                        size: 'sm',
                                    }),
                                    'rounded-3xl px-4'
                                )}
                            >
                                Register
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="end"
                                className="mt-4 w-56"
                            >
                                <DropdownMenuItem>
                                    <Link
                                        href="/register/student"
                                        className="flex w-full"
                                    >
                                        Student
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link
                                        href="/register/instructor"
                                        className="flex w-full"
                                    >
                                        Instructor
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileNav;