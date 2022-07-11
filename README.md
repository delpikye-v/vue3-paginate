<div >
    <h1>vue3-paginate-z</h1>
    <a href="https://codesandbox.io/s/d7qh6h">LIVE EXAMPLE</a>
</div>

---

#### Description

+ Vue pagination (simple) with css. (ts)
+ You can customize ripple css.
---

#### Usage
```js
npm install vue3-paginate-z --save
```

Import the module in the place you want to use:
```js
import 'vue3-paginate-z/dist/styles.css' // => to main
import Paginate from 'vue3-paginate-z'
app.use(Paginate);
```

#### Snippet

##### `simple`

```js
    // data() {
    //     currentPage: 1,
    // }

    <Paginate
        :totalCount="100"
        //   :limit="10"
        //   labelFirst="|<<"
        //   labelLast="Last"
        //   :sectionNumber="5"
          v-model="currentPage"
        //   :showFirstLast="true"
        //   showForwardBack="false"
    />

    // <Paginate
        // :totalCount="100"
        // :limit="10"
        // labelFirst = "|<<",
        // labelLast = ">>|",
        // labelBack = "<",
        // labelForward = ">",
        // v-model="currentPage2"
        // type="pager"
    // />

```

<br />


---

#### props


<br />

#### RUN

<a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a>

```js
npm install
```
```js
npm run dev
npm run start
```

### License

MIT