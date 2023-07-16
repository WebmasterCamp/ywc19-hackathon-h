import React from "react";
import { LazyImage } from "@ywc19/components/LazyImage";

export default function Index() {
    return (
        <div className="container">
            <div className="flex gap-x-8 px-[80px] py-[100px]">
                <div>
                    <p className="text-h2 font-bold text-primary-main">ABOUT US</p>
                    <div className="whitespace-pre-line">{`Kitchen for the Better World is a platform with the objective of making the world a better place for everyone. Restaurants are involved in the development of long-term sustainable goals, both for those in need and for the environment. 

There are numbers of environmental, political, and economic issues in the world today, as well as a few that are being swept under the rug. We want to address the issue while also increasing public awareness. We want to advocate for restaurants that prioritise and improve these issues and engage other restaurants in this community. 

We provide not only delicious food for customers, but also sustainability for the long-term. Food is so much more than taste and flavour; it is the experience and the way it delivers it to us. Our partner restaurants' procedure demonstrates their concern for the future, people, and a sustainable long-term objective. Some restaurants allocate a portion of their profits to pursuing of one or more sustainable goals, while others may integrate these objectives into their production process. By using our platform, you not only receive the tastiest food ever, but you also contribute to help our world.
`}</div>
                </div>
                <LazyImage src="/assets/about.png" width={495} height={532} />
            </div>
        </div>
    );
}
