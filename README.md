# Библиотека стилей инфографики СберБизнес

Набор переменных(less и js) с цветами и градиентами инфографики СберБизнес.

# Использование

1. Установить npm пакет - `npm i @sberbusiness/infographics-styles`.
2. Импортировать переменные в .less или .ts/.js файл.

Less:
```html
@import "@sberbusiness/infographics-styles/colors.less";
@import "@sberbusiness/infographics-styles/gradients.less";

.my-class {
  color: @color-dark-orchid-02;
  background: @gradient-from-sunny-to-speech-magenta;
}
```

JS/TS:
```js
import colors from '@sberbusiness/infographics-styles/colors';
import gradients from '@sberbusiness/infographics-styles/gradients';

export default function App() {
    return (
        <div style={{color: colors["color-dark-orchid-01"], background: gradients["gradient-from-dark-orchid-to-speech-magenta"]}}>
            Hello
        </div>
    );
}

```



