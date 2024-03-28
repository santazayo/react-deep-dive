#### Summary
- Next.js Data Fetching에 대해 알아보았다.

#### Advantages
- getStaicPaths, getStaticProps
  - 사용자에게 정적으로 결정된 페이지를 보여주고자 할 때 사용한다.
  - 두 함수를 동시에 사용이 가능
- getServersideProps
  - 무조건 페이지 진입 전에 동작한다.
  - 응답값에 따라 props를 반환 하기도 아니면 리다이렉트를 보내기도 한다.
  - next js는 서버에서 실행하는 페이지로 분류해 서버용 js를 따로 만든다.
  - __NEXT_DATA__에 props를 넣어서 전달한다.
    - 이유 : 서버에서 렌더링 된 페이지를 클라이언트에서 재사용하기 위해
  - 서버에서 실행하는 코드임을 염두해두고 작성해야 한다.
- getInitialProps
  - getStaticProps나 getServersideProps이 나오기전에 유일하게 사용했던 수단
  - _app 같은 곳에서는 사용이 불가하다
- 스타일 적용하기
  - 전역 스타일
    - _app.js에 작성, layout에 적용
  - 컴포넌트 스타일
    - [name].module.css로 작성, 컴포넌트에 적용
  - SCSS 와 SASS
    - npm install --save-dev sass
  - CSS-in-JS
    - 리액트 트리 내부에서 사용하고 있는 styled-components의 스타일을 모두 모은 다음 이 각각의 스타일에 유니크한 클래스명을 부여한다.
    - 이를 _document.tsx 에서 context 형태로 제공하는것
  - config
    - basePath : 초기 라우팅 경로를 변경할 수 있다.
    - redirects : 리다이렉트 경로를 설정할 수 있다.
    - reactStrictMode : 리액트의 strict mode를 설정할 수 있다.
    - assetPrefix : 해당 호스트가 아닌 다른 곳에서 불러올 경우 설정 해줘야 한다.

#### Disadvantages
- 발표 주제를 적용했을 때 발생할 수 있는 side effect나 trade-off에 대해 설명해요.

#### Example Case
- ```typescript
    // getStaticPaths, getStaticProps
    // 1, 2 만 접근이 가능 나머지는 not fonud
    export async function getStaticPaths() {
        return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } }
        ],
        fallback: true
        };
    }
    export async function getStaticProps({ params }) {
        const {id} = params;
        const post = await getPostById(id);
        return { props: { post } };
    }
   ```
  
- ```typescript
    // getServersideProps
    export async function getServerSideProps(context) {
        const { params } = context;
        const { id } = params;
        const post = await getPostById(id);
        return { props: { post } };
    }
   ```

#### Wrap-up
