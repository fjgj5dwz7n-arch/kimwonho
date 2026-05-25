# Korean Literary Portfolio

Astro로 만든 한국어 문학 포트폴리오입니다. 시, 현대시 연구, 문학 활동의 기록을 정리하는 정적 사이트이며 Vercel 배포를 기준으로 구성했습니다.

## 공개 주소

https://kimwonho.vercel.app

## 시작하기

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

Vercel에서는 `vercel.json`의 설정에 따라 `npm run build`를 실행하고 `dist`를 배포합니다.
배포와 도메인 연결 절차는 `docs/deployment.md`를 참고하세요.

## 콘텐츠 수정

- 작품 항목: `src/data/works.ts`
- 이력 항목: `src/data/cv.ts`
- 연구 항목: `src/data/research.ts`
- 작품·기록 상세 항목: `src/data/tistoryArchive.ts`
- 홈의 최근 기록 목록: `src/data/archive.ts`
- 기본 프로필과 연락처: `src/data/site.ts`

외부 기록을 다시 가져와야 할 때는 HTML을 내려받은 뒤 `scripts/import-tistory.mjs`,
이미지는 `scripts/download-tistory-images.mjs`를 사용합니다. 지금 저장소에는
34개 글과 144개 이미지가 로컬 정적 파일로 들어 있습니다.

## 시각 자산 재생성

홈 화면의 흑백 지면 이미지는 외부 이미지가 아니라 로컬 스크립트로 생성합니다.

```bash
npm run assets
```
