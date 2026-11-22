# 달무리(DALMURI) 홈페이지

브랜드 가이드에 맞춰 제작한 HTML/CSS/JavaScript 홈페이지입니다.

## 실행
압축을 푼 뒤 `index.html`을 Chrome 또는 Edge에서 실행하세요. 웹폰트와 샘플 사진은 인터넷 연결이 필요합니다.

## 반영한 브랜드 가이드
- 브랜드명: 달무리 / DALMURI
- 슬로건: 달빛을 집 안으로
- 밤하늘 네이비: #1F2340
- 달빛 크림: #F3E2B8
- 무리 골드: #E0A84E
- 키워드: 은은함, 따뜻함, 곡선, 고요한 밤
- 제품 방향: 원형·곡선, 초승달 모티브, 따뜻한 간접광

## AI 결과물 넣기
`assets` 폴더에 아래 파일을 넣으세요.
- `ad-30sec-01.mp4` : 30초 광고 영상 1
- `ad-30sec-02.mp4` : 30초 광고 영상 2

## 사진 교체 (밀키트 설정)
사진을 바꾸려면 [style.css](./style.css) 맨 아래의 `:root` 이미지 설정만 수정하세요. 다른 CSS를 찾을 필요가 없습니다.

1. 원하는 사진 파일을 `assets` 폴더에 넣습니다. 예: `assets/my-lamp.jpg`
2. `:root` 안의 원하는 항목을 `url('assets/my-lamp.jpg')`로 바꿉니다.
3. 저장 후 `index.html`을 새로고침합니다.

설정 항목:
- `--image-hero`: 첫 화면 큰 배경
- `--image-story`: 브랜드 이야기 사진
- `--image-pendant`, `--image-floor`, `--image-wall`, `--image-ceiling`: 제품 사진
- `--image-experience`: 조명 체험 배경
- `--image-ad`: 미디어 광고 포스터

파일명과 경로는 실제 파일과 정확히 일치해야 하며, Windows에서도 웹 경로는 `assets/my-lamp.jpg`처럼 `/`를 사용합니다.

제품명·설명·가격은 `index.html`의 OUR PRODUCTS 영역에서 수정하세요. 구독 폼은 시연용이며 실제 이메일은 전송하지 않습니다.
