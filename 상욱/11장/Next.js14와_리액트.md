### Summary
- next js 14 와 리액트에 대해서 알 수 있어요

#### Advantages
- 서버 컴포넌트란?
  - 하나의 언어, 프레임워크, api와 개념을 사용 하면서 서버와 클라이언트 컴포넌트를 렌더링 할 수 있는 기법
    - 주요 명심 ! 클라이언트 컴포넌트는 서버 컴포넌트를 임포트 할 수 없다.
    - 임포트는 못 하니 child props를 사용하면 된다.

- 스트리밍을 활용한 점진적인 페이지 불러오기가 가능
  - 예전처럼 한번에 불러오지 않고 부분 부분 조각 조각 가져와서 보여주기가 가능해 ttfb, fcp 개선에 큰 도움을 준다.

- use server
  - 'user server'에 있는 함수는 서버에서만 코드를 가지고 있고 클라이언트에서는 key만 가지고 있는다.

- 서버 사이드 렌더링과 서버 컴포넌트의 차이
  -  
#### Disadvantages
- 발표 주제를 적용했을 때 발생할 수 있는 side effect나 trade-off에 대해 설명해요.

#### Example Case
- 발표 주제가 적용되어 있는 라이브러리, 실제 업무에 적용되어 있는 코드, 직접 만든 예시 코드들을 첨부하여 이해를 도와야 해요.

#### Wrap-up
- 전체적으로 느낀 점을 작성해요.
