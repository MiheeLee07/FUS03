# CSS
## CSS 애니메이션
> CSS 애니메이션에 대해서....
1. animation 속성
2. transition 속성
3. transform 속성
```css
.main-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    color: #fff;
    display: none;
    height: 0;
    overflow: hidden;
    flex-direction: row;
    flex-wrap: nowrap;
    display: flex;
    transition: height 0.5s, color 2s 0.5s;
}
```
link: [생활코딩][coding]
[coding]: https://opentutorials.org/course/1 "생활코딩 사이트로 이동"