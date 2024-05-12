### Summary
- React 19에서 업데이트 되는 내용에 대해 이해할 수 있어요.

[A Deep Dive into React 19 Update](https://dev.to/fpaghar/a-deep-dive-into-react-19-update-257f)

### Advantages
### 읽기 전 알면 좋은 사전 지식 📑
#### React 최적화 컴파일러 ([링크](https://ko.react.dev/reference/react/use#use))

> **`= React Forget`, `auto-memoizing compiler`**
React 의 프로그래밍 모델을 유지하면서 재렌더링 비용을 최소화하기 위해 `useMemo` 와 `useCallback` 에 상응하는 호출을 자동으로 생성하는 컴파일러입니다. 

최근 저희는 컴파일러의 안정성과 성능을 높이기 위해 컴파일러 재작업을 완료했습니다. 이 새로운 아키텍처를 통해 [로컬 변이 사용](https://ko.react.dev/learn/keeping-components-pure#local-mutation-your-components-little-secret)과 같은 더 복잡한 패턴을 분석하고 메모화할 수 있게 되었으며, `memoization Hooks` 와 동등한 수준 이상으로 많은 새로운 컴파일 시간 최적화 기회가 열리게 되었습니다.
> 
- **[다시 되짚어 보기]** React 의 프로그래밍 모델이란 무엇일까?
  > React 의 프로그래밍 모델은 컴포넌트 기반의 프로그래밍 모델입니다. 컴포넌트는 재사용 가능한 코드 조각으로, UI를 독립적인 부분으로 나누어 관리할 수 있게 해줍니다. 이를 통해 코드의 가독성과 유지보수성을 높일 수 있습니다.
- **[생각해 보기]** 그렇다면 어떻게 React Compiler 는 `useMemo`, `useCallback` 과 같은 메모이제이션 훅을 완벽하게 대체할 수 있을까?
    > 리액트 Forget은 메모이제이션 과정을 자동화하여 이 문제를 완화하는 것을 목표로 합니다. 컴포넌트 수준에서 반응성을 최적화하는 자동 반응 컴파일러가 있는 것과 같습니다. 상태 값이 의미 있게 변경될 때만 애플리케이션이 다시 렌더링되도록 보장합니다.
    > https://www.youtube.com/watch?v=qOQClO3g8-Y

## `[use](https://ko.react.dev/reference/react/use#use)`
컴포넌트에서 [Promise](https://develope.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)나 [context](https://ko.react.dev/learn/passing-data-deeply-with-context)와 같은 데이터를 참조하려면 `use`를 사용합니다. 이 새로운 훅은 클라이언트에서 "중단(suspending)"하는 공식 API입니다. 프로미스를 전달하면 해당 프로미스가 해결될 때까지 React는 중단됩니다.

```jsx
import { use } from 'react';

function MessageComponent({ messagePromise }) {
  const message = use(messagePromise);
  const theme = use(ThemeContext);
  // ...
```

## Form Action
이 기능을 사용하면 <form>의 action 프로퍼티에 함수를 전달할 수 있습니다. React는 폼이 제출될 때 이 함수를 호출합니다.

```jsx
<form action={handleSubmit} />
```
React 18에서 <form action> 속성을 추가하면 다음과 같은 경고가 발생합니다.

> 경고: <form> 태그의 action 프로퍼티에 대한 잘못된 값입니다. 요소에서 값을 제거하거나, 해당 요소에 문자열 또는 숫자 값을 전달하여 DOM에 유지하세요.

React 19에서는 해당 경고가 발생하지 않으며, 이제 다음과 같이 폼을 작성할 수 있습니다. [코드 예제 링크](https://stackblitz.com/edit/stackblitz-starters-j6yogy?file=src%2FApp.tsx)

## useOptimistic
액션이 제출되는 동안 사용자 인터페이스를 낙관적으로(optimistically) 업데이트할 수 있는 새로운 훅입니다.

```jsx
import { useOptimistic } from 'react';

function AppContainer() {
  const [optimisticState, addOptimistic] = useOptimistic(
    state,
    // 업데이트 함수
    (currentState, optimisticValue) => {
        // 현재 상태에 낙관적인 값을 합치고 새로운 상태를 반환
    },
  );
}
```


---

### 👉🏻 참고

[React Compiler - Understanding Idiomatic React (React Forget) - GitNation](https://portal.gitnation.org/contents/understanding-idiomatic-react)

[How React Forget will make React useMemo and useCallback hooks absolutely redundant](https://dev.to/usulpro/how-react-forget-will-make-react-usememo-and-usecallback-hooks-absolutely-redundant-4l68)

[New client-side hooks coming to React 19](https://marmelab.com/blog/2024/01/23/react-19-new-hooks.html?ref=dailydev)

[[번역] React 19에서 새롭게 등장하는 클라이언트 사이드 훅](https://velog.io/@typo/new-client-side-hooks-react-19?utm_source=substack&utm_medium=email)

[[번역] 리액트가 컴파일될 예정입니다](https://velog.io/@surim014/react-19-will-be-compiled?utm_source=substack&utm_medium=email)

https://www.youtube.com/watch?v=lGEMwh32soc