import { FrontMatter } from "@/constants/mdx";

export default function getCategorySetListWithPostList({
  postList,
}: {
  postList: FrontMatter[];
}) {
  // 카테고리 조합
  const categoryCombination = new Set();
  // 결과 리스트
  const result: { id: string; category: string }[] = [];
  // list를 돌리고
  // list안에 categoryList를 돌림
  // 조합에 있는지 확인하고 없으면 추가
  postList.forEach((postInfo) =>
    postInfo.categories.forEach((category) => {
      if (!categoryCombination.has(category)) {
        categoryCombination.add(category);
        // 결과 리스트에 {id, category} 추가
        result.push({ id: postInfo.id, category });
      }
    }),
  );
  return result;
}
