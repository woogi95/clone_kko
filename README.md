# 카드리스트 만들기

## 1.주의 사항

```
a 태그는 너비와 높이를 줄 수 없다.
이유 : 초기값이 display: inline 이다.
```

```
a 태그에 너비, 높이, 마진 , 패딩 주려면
display: block 을 손으로 적어준다.
or display: flex 를 준다.
```

```
span 태그는 너비와 높이를 줄 수 없다.
이유 : 초기값이 display: inline 이다.
```

```
span 태그에 너비, 높이, 마진 , 패딩 주려면
display: block 을 손으로 적어준다.
or display: flex 를 준다.
```

## 2. 중요 사항

### 2.1. position 을 필수로 이해해야 된다.

#### 2.1.1 position: fixed

```
웹 브라우저 기준으로 위치 고정
스크롤, 화면 넓고 좁고 짧아도
위치 고정
```

- 주의 사항

```
position: fixed 하면 웹 브라우저 기준이라서
화면에 보이는 내용의 레이아웃에서 높이가 반영이 안된다.
```

```
position: fixed 화면 너비를 줘야 한다.
배경색도 주셔야 합니다.
웹브라우저 기준으로 left, top, bottom, right 도 설정
```

```
position: fixed 하면
우선 전체너비를 기준으로
내용과 구분해서 div 구성하기를 추천
```

```
화면 즉, z-index 값을 많이 준다.
z-index: 0~999999999999999
```

#### 2.1.2. position: absolute

- fixed 와 똑같다.
- 차이점은 body를 기준으로 한다.
- 반드시 원하는 css 에 relative 가 있어야 한다.

#### 2.1.3. position: relative

- absolute에 기준을 세워준다.
-
