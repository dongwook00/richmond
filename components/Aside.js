import Image from "next/image";

export default function Aside() {
  return (
    <aside>
      <div className="flex mb-14 gap-x-3.5">
        <Image
          className="rounded-full"
          layout="fixed"
          width={56}
          height={56}
          alt="profile"
          src="/images/profile.jpg"
        />
        <p className="max-w-xs leading-relaxed mb-7">
          프론트엔드 개발자
          <br />
          미국에서의 회사생활을 공유합니다
        </p>
      </div>
    </aside>
  );
}
