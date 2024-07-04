"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface ICard {
    title: string,
    description: string,
    imgSrc:string
}

export function Card({ title, description,imgSrc }: ICard) {
    return (
        <CardContainer className="inter-var md:w-[400px] md:h-[500px] mt-0">
            <CardBody className="bg-gray-50 h-auto md:h-full relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                     {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">


                    <div className="h-[250px] w-full">
                        <Image
                            src={imgSrc}
                            width={1000}
                            height={1000}
                            className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt={imgSrc}
                        />
                    </div>
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Get in touch →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Contact us
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
