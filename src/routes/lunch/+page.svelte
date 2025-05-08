<script lang="ts">
  const menus = [
  "김치찌개",
  "된장찌개",
  "비빔밥",
  "돈까스",
  "제육볶음",
  "라면",
  "칼국수",
  "짬뽕",
  "짜장면",
  "샐러드",
  "삼겹살",
  "불고기",
  "갈비탕",
  "순두부찌개",
  "부대찌개",
  "떡볶이",
  "오므라이스",
  "카레라이스",
  "쌀국수",
  "우동",
  "초밥",
  "회덮밥",
  "치킨",
  "피자",
  "햄버거",
  "파스타",
  "리조또",
  "토스트",
  "샌드위치",
  "냉면",
  "물회",
  "불닭볶음면",
  "닭갈비",
  "오징어볶음",
  "잡채밥",
  "깐풍기",
  "마라탕",
  "훠궈",
  "양꼬치",
  "스테이크",
  "함박스테이크",
  "연어덮밥",
  "규동",
  "텐동",
  "타코",
  "부리또",
  "케밥",
  "샤브샤브",
  "월남쌈",
  "스시롤",
  "참치김밥",
  "치즈돈까스",
  "새우튀김",
  "고등어구이",
  "조기구이",
  "콩나물국밥",
  "순대국",
  "감자탕",
  "곱창볶음",
  "닭볶음탕",
  "해물파전",
  "굴국밥",
  "비빔국수",
  "잔치국수",
  "김밥",
  "육개장"
];
// TODO: DB로 분리하기

  let selectedMenu: string | null = null;

  const recommendMenu   = () => {
    const randomIndex = Math.floor(Math.random() * menus.length);
    selectedMenu = menus[randomIndex];
  };
</script>

<main class="lunch-container">
  <h1>오늘의 점심 메뉴 추천 🍽️</h1>
  <button on:click={recommendMenu} class="recommend-btn">추천받기</button>
  {#if selectedMenu}
    <p class="menu-result">오늘은 <strong>{selectedMenu}</strong> 어떠세요?</p>
  {/if}
</main>

<style>
.lunch-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}
.recommend-btn {
  margin-top: 24px;
  padding: 12px 32px;
  font-size: 1.2rem;
  background: #ffecb3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}
.recommend-btn:hover {
  background: #ffe082;
}
.menu-result {
  margin-top: 32px;
  font-size: 1.5rem;
  color: #3e2723;
}
</style>
