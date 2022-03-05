20.08.28

- UI 대부분 완성
- 데이터 통합
- 컴포넌트화

  20.08.29

- ProjectCardItem UI 변경
- 기타 디자인 변경
- MyTimeLine 추가

  20.08.30

- 모듈화 진행
- 페이지에 필요한 component를 따로 폴더에 지정
- MyTimeLine 간소화
- ProjectCardItem 디자인 변경
- Greeting.js 추가

  20.08.31

- Project Image 수정 및 ProjectCardItem 디자인 약간 수정
- MyTimeLine Mobile에서 깨지던 디자인 잘 보이게 수정
- github pages에 배포

  20.09.01

- light mode, dark mode 선택 기능 추가
- appbar 모듈화

  20.09.11

- typescript 적용 진행

  20.09.15

- open source 공개
- Icon들 react-icons로 통합
- Anchor 컴포넌트 수정

진행 예정

- Masonry Layout PorjectCard 보여줄 때 적용
- SEO 적용
- Portfolio UI를 구성할 수 있는 Data를 만들어주는 설정 UI 구성
- img src를 위한 webpack 설정 수정 필요함 (webpack.config.js, start.js, GlobalVariables.tsx)
  - github-page PUBLIC_URL/{Webpack 설정에 따른 static 경로} 가 고정으로 잡힘
  - 현재 PUBLIC_URL/static/images/smartmirror.png 경로를 사용하고 있으며 / storybook은 /smartmirror.png 형태로사용중 통합 및 다른 방법 진행 해야 함

# 목표

- data를 기반으로 UI Render
- 포트폴리오 사이트를 만들고 싶은 일반인도 사용할 수 있도록 data 만들어주는 UI 구현
