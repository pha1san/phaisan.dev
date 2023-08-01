"use client";

import { m } from "framer-motion";
import Link from "next/link";

import HeaderBox from "@/components/HeaderBox";
import { Icon } from "@/components/Icons";
import SectionContainer from "@/components/SectionContainer";
import { contacts } from "@/constants/links";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Contact = () => {
  const isLarge = useMediaQuery("(min-width: 768px)");

  return (
    <SectionContainer className="flex items-center justify-center py-32">
      <div className="w-full max-w-[890px] ">
        <div className="relative  mb-12 md:mb-20">
          <HeaderBox title={"📱Contact"} desc={"Please don’t be hesitate to contact me!"} className="mx-auto w-fit" />
          {isLarge && (
            <>
              <img src="/assets/icons/contactLeftTop.svg" alt="" className="absolute left-0 top-[27px]" />
              <img src="/assets/icons/contactLeftBottom.svg" alt="" className="absolute bottom-[24px] left-[50px]" />
              <img src="/assets/icons/contactRightTop.svg" alt="" className="absolute right-0 top-[27px]" />
              <img src="/assets/icons/contactRightBottom.svg" alt="" className="absolute bottom-[24px] right-[50px]" />
            </>
          )}
        </div>
        <div className="flex flex-wrap gap-y-8 md:gap-y-16">
          {contacts.map((contact) => (
            <m.div
              key={contact.label}
              className="flex items-center gap-4 md:w-1/2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="box-shadow-3 h-16 w-16 rounded-[32px] p-2 text-blue-400 md:h-20 md:w-20">
                <Icon icon={contact.icon} width={isLarge ? 64 : 48} height={isLarge ? 64 : 48} />
              </div>
              <div>
                <p className="text-lg font-semibold md:text-xl">{contact.label}</p>
                {contact.url ? (
                  <Link href={contact.url} className="text-base font-medium text-gray-600 md:text-xl">
                    {contact.text || contact.url.replace("https://", "")}
                  </Link>
                ) : (
                  <p className="text-base font-medium text-gray-600 md:text-xl">{contact.text}</p>
                )}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
