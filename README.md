# 3주차 과제: React Messenger

# 서론

안녕하세요 🙌🏻 22기 프론트엔트 운영진 **권동욱**입니다. 이번에는 드디어 투두리스트에서 벗어나 새로운 프로젝트인 **messenger** 만들기를 진행합니다.

이번 주는 특별하게 **디자이너와의 협업**으로 진행되는 과제입니다. 디자이너분께서 열심히 리디자인 한 메신저 프로젝트를 여러분들께서 구현해주시면 됩니다.

동시에, 이번 주부터는 **필수** **TypeScript** 와 **tailwind CSS**를 적용해보려고 합니다.

프로젝트의 규모가 커지게 될수록, 컴포넌트가 가지는 props의 종류 또한 다양해지게 됩니다. 무지성 코딩을 하다 보면 가끔 이 props의 구성과 이름, 어떤 타입이 들어가야 하는지 헷갈리기 마련이죠. 보통 그럴 때 다시 컴포넌트 정의 부분으로 돌아가 props의 구성을 보고 오곤 합니다.

하지만 이럴 때, typescript를 적용한다면 컴포넌트의 구성과 그 이름, 심지어 타입까지 한번에 자동완성으로 편리하게 관리할 수 있고, 생산성이 증대되겠죠.

또한, **React Hooks**에 조금 더 익숙해지는 것을 목표로 합니다. 여러 Hook들이 있지만 그 중에서도 `useState`, `useEffect`, `useRef`를 중점적으로 사용해 보는 과제인데요, React를 사용하면서 굉장히 자주 쓰이는 Hook들이기 때문에 이 부분을 집중적으로 공부해 보아요!

그럼 이번 과제도 파이팅입니다!!🎉

# 과제

## 목표

- TypeScript를 사용해봅시다.
- useState로 컴포넌트의 상태를 관리합니다.
- useEffect와 useRef의 사용법을 이해합니다.
- tailwind CSS의 사용법에 익숙해집니다.

## 기한

- 2025년 9월 27일 토요일 23:59까지

## Review Questions

- 디자이너로부터 전달받은 피그마 링크, 피그마 캡처본, 디자이너와의 소통 tmi 등
- JSX, JS, TSX, TS 각각의 확장자 개념 사용이유와 차이점.
- TypeScript를 사용하는 이유.
- SSR과 CSR 특성 및 차이점.

## 필수 구현 기능

- 피그마를 보고 [결과화면](https://react-messenger-21th-kwondu.vercel.app/)과 같이 구현합니다.
- 디자인 시스템을 구축합니다.
- tailwind CSS를 사용합니다.
- 메세지를 보내면 채팅방 하단으로 스크롤을 이동시킵니다.
- 메세지에 유저 정보(프로필 사진, 이름)를 표시합니다.
- user와 message 데이터를 json 파일에 저장합니다.
- UI는 **반응형을 제외**하고 피그마파일을 따라서 진행합니다.

### 추가 구현 기능

- 채팅방 상단의 프로필을 클릭하면 사용자를 변경할 수 있습니다.
- 더블 클릭 하면 감정표현을 추가합니다.
- 그 외 추가하고 싶은 기능이 있다면 마음껏 추가해 주세요!

참고로 이번 과제는 다음 과제까지 이어지는 과제이므로 **확장성**을 충분히 고려해 주세요. 참고로 **4주차 과제에서는 유저 및 기능 추가와 Routing을** 진행합니다. 이를 위해 [zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)를 이용한 상태관리를 미리 해보시는 것을 추천합니다!!

## 링크 및 참고자료

- [React docs - Hook](https://ko.reactjs.org/docs/hooks-intro.html)
- [React의 Hooks 완벽 정복하기](https://velog.io/@velopert/react-hooks#1-usestate)
- [useEffect 완벽 가이드](https://overreacted.io/ko/a-complete-guide-to-useeffect/)
- [코딩 컨벤션](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- [타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)
- [리액트 프로젝트에서 타입스크립트 사용하기 (시리즈)](https://velog.io/@velopert/series/react-with-typescript)
- [디자인 시스템 구축기](https://yozm.wishket.com/magazine/detail/1830/)
- [[영상] : 컴포넌트에 대한 이해](https://www.youtube.com/watch?v=21eiJc90ggo)
- [Styled Component로 디자인 시스템 구축하기](https://zaat.dev/blog/building-a-design-system-in-react-with-styled-components/)
- [Tailwind CSS 장단점, 사용법](https://wonny.space/writing/dev/hello-tailwind-css)
- [ts 절대경로 설정하기](https://tesseractjh.tistory.com/232)
