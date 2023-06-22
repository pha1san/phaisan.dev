import SocialLinkButton from "@/components/SocialLinkButton";

export default function Footer() {
  return (
    <section className="bg-blue-400 px-5 text-white ">
      <div className="mx-auto flex h-[80px] w-full max-w-[1116px] items-center justify-between text-xs md:text-sm">
        <div>Made with ❤️ (and NextJs) by Phaisan U.</div>
        {/* <div className="flex gap-5">
          <Icon icon="mdi:linkedin" width={32} height={32} />
          <Icon icon="mdi:github" width={32} height={32} />
        </div> */}
        <SocialLinkButton />
      </div>
    </section>
  );
}
