import { FrontMatter } from "@/constants/mdx";
import { POST_PATH } from "@/constants/path";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Card } from "../ui/card";

export type PostInfo = { id: string } & FrontMatter;

export default function PostCard({
  categories,
  date,
  excerpt,
  header,
  title,
  id,
}: PostInfo) {
  const [isLoading, setIsLoading] = useState(false);
  const linkHref = useMemo(() => POST_PATH + id, [id]);
  const [isShowSkeleton, setIsShowSkeleton] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // 미리 링크 리소스 가져오기
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = linkHref;
    document.head.appendChild(link);

    // 전환 애니메이션 효과
    window.location.href = linkHref;
  };

  return (
    // SSG로 렌더링된 포스트 링크는 CSR로 이동시킬 수 없다. ( HTML을 받아야 한다. )
    <a
      href={linkHref}
      onClick={handleClick}
      aria-label={`${title} 포스트 읽기`}
      rel="bookmark"
      className={isLoading ? "pointer-events-none opacity-70" : ""}
    >
      <Card className="cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700">
        {isShowSkeleton && (
          <div className="h-52 w-full animate-pulse bg-gray-300" />
        )}
        <Image
          priority={false}
          src={header.teaser}
          alt={title}
          height={208}
          width={208}
          sizes="(max-width: 768px) 100vw, 50vw"
          onLoad={() => {
            setIsShowSkeleton(false);
          }}
          placeholder="empty"
          className={cn(
            "hidden !h-52 w-full object-cover object-center transition-transform duration-300 hover:scale-105",
            !isShowSkeleton && "block",
          )}
        />
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-300 text-blue-700 dark:bg-blue-900/30">
              {categories.map((category) => category)}
            </span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <h3 className="mb-2 line-clamp-1 text-lg font-bold">{title}</h3>
          <p className="mb-4 line-clamp-3 min-h-[60px] text-sm text-gray-600 dark:text-gray-400">
            {excerpt}
          </p>
        </div>
      </Card>
    </a>
  );
}
