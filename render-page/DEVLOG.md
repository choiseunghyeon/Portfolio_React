## 이슈

1. 현재 selector 함수들은 root state 부터 하위 state를 찾아준다.
   각 slice에서는 해당 reducer에서 만들어준 initialState를 바로 받기 때문에 기존 selector를 사용할 수 없다.

- redux toolkit에서 createEntityAdapter를 통해 globalized, localized를 구별해서 사용할 수 있다.

2. content file이 ts, js 등 code인 경우 줄 번호, 하이라이팅 디자인 필요함

3. git api request limit이 있으므로 최적화 해야함

4. actionButton scroll에 따라 움직이기
