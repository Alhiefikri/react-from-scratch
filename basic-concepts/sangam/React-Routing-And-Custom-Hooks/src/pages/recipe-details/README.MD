Saya akan membuat dokumentasi untuk komponen RecipeDetailsPage yang menggunakan parameter URL dengan React Router.

# Dokumentasi RecipeDetailsPage - Halaman Detail Resep

## Penjelasan Impor

```javascript
import { useParams } from "react-router-dom";
```

- `useParams`: Hook dari React Router untuk mengambil parameter dinamis dari URL

## Struktur Komponen

### 1. Parameter URL Handling

```javascript
const params = useParams();
const { id } = params;
```

#### Penjelasan useParams:

1. **Mengambil Parameter**

   - `useParams()` mengembalikan objek berisi parameter URL
   - Parameter sesuai dengan definisi di route (`:id` dalam route definition)

2. **Destructuring**
   - Mengekstrak `id` dari objek params
   - Bisa digunakan untuk fetching data spesifik

### 2. Debugging

```javascript
console.log(params);
```

- Membantu development dengan menampilkan parameter di console
- Berguna untuk troubleshooting

### 3. Render Component

```javascript
return (
  <div>
    <h1>Recipe Details Page of recipe item {id}</h1>
  </div>
);
```

- Menampilkan ID resep yang diambil dari parameter URL
- Layout sederhana dengan judul

## Penggunaan dalam Routing

### 1. Route Definition (dalam App.jsx)

```javascript
{
  path: "recipe-list/:id",
  element: <RecipeDetailsPage />
}
```

- `:id` adalah parameter dinamis
- Cocok dengan URL seperti `/recipe-list/123`

### 2. Parameter Matching

- URL: `/recipe-list/123` → `params.id = "123"`
- URL: `/recipe-list/abc` → `params.id = "abc"`

## Rekomendasi Pengembangan

### 1. Data Fetching

```javascript
const { data, loading, error } = useFetch(
  `https://dummyjson.com/recipes/${id}`
);
```

### 2. Loading State

```javascript
if (loading) return <h1>Loading recipe details...</h1>;
```

### 3. Error Handling

```javascript
if (error) return <h1>Error: {error.message}</h1>;
```

### 4. Complete Component Example

```javascript
function RecipeDetailsPage() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/recipes/${id}`
  );

  if (loading) return <h1>Loading recipe details...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  if (!data) return <h1>Recipe not found</h1>;

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} />
      <div>
        <h2>Ingredients:</h2>
        <ul>
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Instructions:</h2>
        <p>{data.instructions}</p>
      </div>
    </div>
  );
}
```

## Best Practices

### 1. Parameter Validation

```javascript
if (!id) return <h1>Invalid Recipe ID</h1>;
```

### 2. Type Checking

```javascript
const id = params.id;
if (isNaN(parseInt(id))) {
  return <h1>Invalid Recipe ID Format</h1>;
}
```

### 3. Navigation Handling

```javascript
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

// Back button
<button onClick={() => navigate(-1)}>Back to Recipes</button>;
```

## Tips Penggunaan

1. Selalu validasi parameter URL
2. Implementasikan proper error handling
3. Tambahkan loading states
4. Gunakan proper navigation
5. Implementasikan data caching jika perlu

## Keamanan

1. Validasi input parameter
2. Sanitasi data sebelum ditampilkan
3. Handling edge cases
4. Proper error boundaries

## Debugging Tips

1. Gunakan console.log untuk parameter
2. Periksa React Router DevTools
3. Monitor network requests
4. Validasi response data
