import Image from "next/image";

export default function Aside() {
  return (
    <aside>
      <div className="flex mb-14">
        <Image
          className="rounded-full"
          width={56}
          height={56}
          alt="profile"
          src="/images/profile.jpg"
        />
        <p className="ml-3.5 max-w-xs leading-relaxed">
          프론트엔드 개발자
          <br />
          미국에서의 회사 생활을 기록합니다.
        </p>
      </div>
    </aside>
  );
}
