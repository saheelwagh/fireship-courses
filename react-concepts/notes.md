Most common way to loop over collection of data in eact js is to yse the array map method

tip -> dont use index as the key

## hanldling evenbts in jsx
signal -> some interaction has occured

vanilla -> grab el and assign eh
in jsx -> same approach but devlerative

assign event directly without grabbing

usually define eh as named fn inside component

## state
props are immutable

useState hook for data that changes

used on top of component

## lifecycle
mount -> update -> unmount

in class -> lifecycle methos

in fnls -> useEffect hook

## context api
for passing data much fruther down > prop drilling

Provider -> provide data here  > child -> consume here

## Erro boundaries
catch error at component level

## Prisma
ORM with own schema declerative lang

discomfort embrace

## react query
simplifies fetch cche and serve datat from a server

fetch -> cache rerty etc compolicated

infinite scroll 
optimistic updates
integrated debugging


```
const queryClient = new QueryClient()
fn app
    return 
    <QueryClientProvider client={queryClient}>
```

## redux
single src of truth
pattern library
like a client side db
reducer to change data 
lot of boilerplate

