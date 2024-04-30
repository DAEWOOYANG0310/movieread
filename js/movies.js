const movies = [
  { id: 1, name: '파묘', star: 8.3, url:'images/00001.png' },
  { id: 2, name: '괴물', star: 7.3, url:'images/00002.webp' },
  { id: 3, name: '댓글부대', star: 8.5, url:'images/00003.webp' },
  { id: 4, name: '스위치', star: 8.0, url:'images/00004.webp' },
  { id: 5, name: '웡카', star: 7.9, url:'images/00005.webp' },
  { id: 6, name: '범죄도시2', star: 7.9, url:'images/100.webp' },
  { id: 7, name: '그대들은 어떻게 살것인가', star: 6.4, url:'images/00006.webp' },
  { id: 8, name: '아바타 물의길', star: 7.3, url:'images/00007.webp' },
  { id: 9, name: '인터스텔라', star: 8.6, url:'images/00008.webp' },
  { id: 10, name: '스파이더맨 노웨이홈', star: 7.0, url:'images/00009.webp' },
  { id: 11, name: '기생충', star: 8.0, url:'images/103.webp' },
  { id: 12, name: '어벤져스 인피니티 워', star: 8.9, url:'images/000010.webp' },
  { id: 13, name: '반지의제왕 반지 원정대', star: 6.3, url:'images/000011.webp' },
  { id: 14, name: '인사이드 아웃', star: 7.5, url:'images/000012.webp' },
  { id: 15, name: '혹성탈출 진화의 시작', star: 5.7, url:'images/000013.webp' },
  { id: 16, name: '해리포터와 마법사의돌', star: 7.3, url:'images/000014.webp' },
  { id: 17, name: '도둑들', star: 8, url:'images/000015.webp' },
  { id: 18, name: '가디언즈 오브 갤럭시 3', star: 8.7, url:'images/000016.webp' },
  { id: 19, name: '아이언맨 2', star: 7, url:'images/000017.webp' },
  { id: 20, name: '라푼젤', star: 6.9, url:'images/000018.webp' },
  { id: 21, name: '어벤져스 엔드게임', star: 7.8, url:'images/000019.webp' },
  { id: 22, name: '캐리비안의 해적', star: 6.6, url:'images/000020.webp' },
  { id: 23, name: '하울의 움직이는 성', star: 7.9, url:'images/000021.webp' },
  { id: 24, name: '코코', star: 6.9, url:'images/000022.webp' },
  { id: 25, name: '해리포터 와 아즈카반의죄수', star: 7.1, url:'images/000023.webp' },
  { id: 26, name: '해리포터와 비밀의 방', star: 7.3, url:'images/000024.webp' },
  { id: 27, name: '캐리비안의 해적 낮선조류', star: 6, url:'images/000025.webp' },
  { id: 28, name: '아바타', star: 8.3, url:'images/000026.webp' },
  { id: 29, name: '나니아연대기', star: 5.9, url:'images/000027.webp' },
  { id: 30, name: '매드맥스', star: 4.6, url:'images/000028.webp' },
  { id: 31, name: '블랙팬서 와칸다 포에버', star: 6, url:'images/000029.webp' },
  { id: 32, name: '타이타닉', star: 8, url:'images/30.webp' },
  { id: 33, name: '어벤져스', star: 8.6, url:'images/000031.webp' },
  { id: 34, name: '트와일라잇', star: 7, url:'images/000032.webp' },
  { id: 35, name: '해리포터와 불의잔', star: 7.3, url:'images/000033.webp' },
  { id: 36, name: '핵소고지', star: 7.5, url:'images/000034.webp' },
  { id: 37, name: '해리포터와 불사조기사단', star: 7, url:'images/000035.webp' },
  { id: 38, name: '해리포터와 죽음의 성물1', star: 6.6, url:'images/000036.webp' },
  { id: 39, name: '스파이더맨 홈커밍', star: 7, url:'images/000037.webp' },
  { id: 40, name: '크루엘라', star: 7.1, url:'images/000038.webp' },
  { id: 41, name: '겨울왕국', star: 6, url:'images/000039.webp' },
  { id: 42, name: '원더우먼', star: 6.2, url:'images/000040.webp' },
  { id: 43, name: '주토피아', star: 6.3, url:'images/000041.webp' },
  { id: 44, name: '호빗 다섯군대 전투', star: 6.8, url:'images/000042.webp' },
  { id: 45, name: '나우 유 씨 미', star: 7, url:'images/000043.webp' },
  { id: 46, name: '메이즈 러너 스코치 트라이얼', star:5.6, url:'images/000044.webp' },
  { id: 47, name: '해리포터와 혼혈왕자', star: 7, url:'images/000045.webp' },
  { id: 48, name: '쇼생크 탈출', star: 9, url:'images/000046.webp' },
  { id: 49, name: '분노의 질주 홉스&쇼', star: 8.2, url:'images/000047.webp' },
  { id: 50, name: '라따두이', star: 7, url:'images/000048.webp' },
  { id: 51, name: '캐리비안의 해적 세상의 끝에서', star: 7, url:'images/000049.webp' },
  { id: 52, name: '시빌워', star: 6.8, url:'images/000050.webp' },
  { id: 53, name: '메이즈러너 데스큐어', star: 6.5, url:'images/000051.webp' },
  { id: 54, name: '미 비포 유', star: 7, url:'images/000052.webp' },
  { id: 55, name: '해리포터와 죽음의성물2', star: 8, url:'images/000053.webp' },
  { id: 56, name: '어메이징 메리', star: 5, url:'images/000054.webp' },
  { id: 57, name: '반지의제왕 왕의귀환', star: 7, url:'images/000055.webp' },
  { id: 58, name: '캐리비안의 해적 망자의함', star: 7.4, url:'images/000056.webp' },
  { id: 59, name: '어벤져스 에이지 오브 울트론', star: 6, url:'images/000057.webp' },
  { id: 60, name: '블랙팬서', star: 6.5, url:'images/000058.webp' },
  { id: 61, name: '더 수어사이드 스쿼드', star: 6.7, url:'images/000059.webp' },
  { id: 62, name: '아이언맨', star: 8.1, url:'images/000060.webp' },
  { id: 63, name: '니모를찾아서', star: 7, url:'images/000061.webp' },
  { id: 64, name: '스파이더맨', star: 7.2, url:'images/62.webp' },
  { id: 65, name: '닥터 스트레인지', star: 7.8, url:'images/63.webp' },
  { id: 66, name: '반지의제왕 두개의탑', star: 7.6, url:'images/64.webp' },
  { id: 67, name: '센과 치히로의 행방불명', star: 8, url:'images/65.webp' },
  { id: 68, name: '월E', star: 8.7, url:'images/66.webp' },
  { id: 69, name: '엑스맨 아포칼립스', star: 7.8, url:'images/67.webp' },
  { id: 70, name: '브레이킹던 part2', star: 7, url:'images/68.webp' },
  { id: 71, name: '덤블도어의 비밀', star: 7.4, url:'images/69.webp' },
  { id: 72, name: '베놈', star: 6.7, url:'images/70.webp' },
  { id: 73, name: '어메이징 스파이더맨2', star: 8.6, url:'images/71.webp' },
  { id: 74, name: '스즈메의 문단속', star: 7, url:'images/72.webp' },
  { id: 75, name: '브레이킹던 part1', star: 6.7, url:'images/73.webp' },
  { id: 76, name: '엑스맨 데이즈오브 퓨처패스트', star: 7.6, url:'images/74.webp' },
  { id: 77, name: '스파이더맨 파 프롬 홈', star: 7, url:'images/75.webp' },
  { id: 78, name: '트와일라잇 뉴문', star: 6.8, url:'images/76.webp' },
  { id: 79, name: '분노의 질주 더 세븐', star: 6.6, url:'images/77.webp' },
  { id: 80, name: '나우 유 씨미2', star: 7.5, url:'images/78.webp' },
  { id: 81, name: '어메이징 스파이더맨', star: 8, url:'images/79.webp' },
  { id: 82, name: '아이언맨3', star: 7, url:'images/80.webp' },
  { id: 83, name: '메간', star: 6.6, url:'images/81.webp' },
  { id: 84, name: '겟 아웃', star: 7.5, url:'images/82.webp' },
  { id: 85, name: '원더우먼 1984', star: 6.8, url:'images/83.webp' },
  { id: 86, name: '슈퍼 배드', star: 6, url:'images/84.webp' },
  { id: 87, name: '나는 전설이다', star: 7.3, url:'images/85.webp' },
  { id: 88, name: '인 타임', star: 8.2, url:'images/86.webp' },
  { id: 89, name: '굿 윌 헌팅', star: 8.4, url:'images/87.webp' },
  { id: 90, name: '너의 이름은', star: 8, url:'images/88.webp' },
  { id: 91, name: '악마는 프라다를 입는다', star: 7.7, url:'images/89.webp' },
  { id: 92, name: '트와일라잇 이클립스', star: 6.2, url:'images/90.webp' },
  { id: 93, name: '올빼미', star: 7.4, url:'images/91.webp' },
  { id: 94, name: '어바웃타임', star: 9.3, url:'images/92.webp' },
  { id: 95, name: '노량', star: 7.7, url:'images/93.webp' },
  { id: 96, name: '명량', star: 8, url:'images/94.webp' },
  { id: 97, name: '천공의성 라퓨타', star: 8.6, url:'images/95.webp' },
  { id: 98, name: '오늘밤 세계에서 이 사랑이 사라진다 해도', star: 7, url:'images/96.webp' },
  { id: 99, name: '남은 인생 10년', star: 7.2, url:'images/97.webp' },
  { id: 100, name: '젠틀맨', star: 6.4, url:'images/98.webp' },
  { id: 101, name: '범죄도시3', star: 6.2, url:'images/99.webp' },
  { id: 102, name: '범죄도시', star: 8, url:'images/101.webp' },

]



const cards = document.getElementById('cards');

function showcards(val=''){
  cards.innerHTML = '';
  const res = movies.forEach(movie => {
    if(movie.name.includes(val)){
      const li = document.createElement('li');
      li.innerHTML = `
      <img src="${movie.url}"
       alt="${movie.name}">
      <p>이름:${movie.name}</p>
      <p>별점:${movie.star}</p>`
      cards.appendChild(li);
    }
  })
}
showcards();


const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click',(e) => {
  e.preventDefault();
  const val = searchInput.value;
  console.log(val);
  showcards(val);
})


