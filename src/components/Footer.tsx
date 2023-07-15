import { type FC } from "react";

export interface IFooterProps {
    data: { name: string, href: string }[],
}

export const Footer: FC<IFooterProps> = (props) => {
    const { data } = props;
    return <footer className="px-20 py-12 w-full text-white bg-primary-dark">
        <div className="relative flex  w-full items-center justify-center ">
            <div className='absolute left-0'>CompanyName @ 202X. All rights reserved.</div>
            <ul className="flex space-x-4 p-4 md:p-0 flex-row">
                {
                    data.map(({ name, href }, i) =>
                        <li key={i}>
                            <a href={href} className="block py-2 pl-3 pr-4 text-white">
                                {name}
                            </a>
                        </li>)
                }
            </ul>
        </div>
    </footer>
}
