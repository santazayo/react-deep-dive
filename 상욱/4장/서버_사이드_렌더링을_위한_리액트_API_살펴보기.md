#### Summary
- renderToString ```인수로 넘겨받은 리액트 커포넌트를 렌더링해 html 문자열로 반환하는 메서드```
  - > 브라우저가 렌더링을 할 수 있는 HTML을 제공하는데에 목적이있다.<br>**이벤트 핸들러는 결과물에 포함이 되지 않는다.**<br>**data-reactid 속성이 추가된다. 이 속성은 리액트 컴포넌트의 루트 엘리먼트먼트가 무엇인지 식별하는 기준점이 된다.**
- renderToStaticMarkup ```renderToString과 비슷하지만, 컴포넌트에서 사용하는 데이터를 제거하여 렌더링하는 메서드```
  - > **data-reactid 속성이 추가되지 않는다.**<br>클라이언트에서 제공하는 useEffect와 같은 브라우저 API를 절대 사용할 수가 없다.<br>만약 결과물을 기반으로 리액트의 자바스크립트 이벤트 리스터를 등록하는 hydrate를 수행 할 경우, 서버와 클라이언트의 내용이 맞지 않는다는 에러가 발생한다.<br>순수하게 HTML을 렌더링하는데에 목적이 있다.
- renderToNodeStream ```서버 사이드 렌더링을 할 때 사용하는 메서드로, 스트림 형태로 렌더링할 수 있어 렌더링 성능을 최적화할 수 있어요.```
  - renderToNodeStream vs renderToString의 결과물이 완전히 동일하지만 두가지 차이점이 있다.
    1. 둘다 브라우저에서도 실행 할 수는 있지만 renderToNodeStream은 클라이언트에서 절대 사용이 불가능 하다.
    2. renderToString은 문자열이지만 renderToNodeStream은 ReadableStream을 utf-8로 인코딩한 결과이기에 node.js 환경에서만 사용이 가능하고 클라이언트에서 사용하기 위한 추가적인 처리가 필요하다.
    
  - > **스트림 형태로 렌더링할 수 있어 렌더링 성능을 최적화할 수 있어요.**<br>렌더링할 컴포넌트의 크기가 커질 경우 Stream을 사용하여 작게 나누어 전송할 수 있어 렌더링 성능을 최적화할 수 있다.
- renderToStaticNodeStream ```renderToNodeStream과 비슷하지만, 컴포넌트에서 사용하는 데이터를 제거하여 렌더링하는 메서드 순수한 HTML을 제공```
- hydrate ```리액트 컴포넌트를 초기 렌더링한 결과물에 이벤트 리스너를 등록하여 클라이언트 사이드 렌더링을 할 때 사용하는 메서드```
  - hydrate는 일단 기본적으로 렌더링된 html이 있다는 가정하에 작업이 수행되고, 이 렌더링된 html을 기준으로 이벤트를 붙이는 작업만 수행한다.
  - 따라서 renderToString등으로 렌더링된 html 정보가 반드시 담겨있어야 한다.
  - 경고가 나오더라도 정상적으로 출력이 되기는 한다.
    - hydrate가 렌더링한 결과물과 인자로 받은 렌더링을 비교 한다.
    - 이 과정에서 틀리더라도 hydrate의 결과물을 렌더링 한다.

#### Advantages
- 발표 주제를 적용했을 때 얻을 수 있는 이점이나 해결할 수 있는 문제 상황들에 대해 설명해요.

#### Disadvantages
- 발표 주제를 적용했을 때 발생할 수 있는 side effect나 trade-off에 대해 설명해요.

#### Example Case
[예제코드](https://github.com/wikibook/react-deep-dive-example/tree/main/chapter4)

#### Wrap-up
- Stream, hydrate 의 이해도가 생겼습니다.
