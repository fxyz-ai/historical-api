# Historical Events API

This is a simple public API that serves historical, each with several events happened on the year.

---

## 📘 Endpoints

### `api/events`
Returns all historical event entries.

### `api/events/year`
Returns the event for a specific year.

---

## 🔧 Usage Example

```js
fetch("https://historical-api.onrender.com/api/events")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
```

---

## 📎 Note
This API is for personal use, but you're free to use it.
Just use the base URL:
`https://historical-api.onrender.com`
