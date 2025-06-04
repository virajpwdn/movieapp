# Slugs
## catch all routes -> Here we use slugs


# Special Pages in next js
* layout vs tempelete -> In next js if we want on navigation to re-render the entire page at that time we use tempelete and layout which is used by default it does not re render or re mounts the page.
* not-found.tsx -> This file when configured we can show personalised message to the routes which does not exists and client is trying to access it
* Loading
* Redirect
* Error



# Query Parameters
Very Important topic if you are using dynamic queries then we create dynamic route in next to receive what is there is params we have to use NEXTRequest -> because it gives superpowers through which we can receive queries in params following is the example. Although in traditional appraoch we use to use req.params which was provided by express framework.


```
export async function GET(request: NextRequest, {params}: {params: {id:string}}) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    const {id} = await params;
    console.log(id)
  
    const filteredMovies = query
      ? movies.filter((m) => m.name.toLowerCase().includes(query.toLowerCase()))
      : movies;
  
    return new Response(JSON.stringify(filteredMovies));
}
```


# Next js provides Google Fonts Feature in build
To use any fonts from google we have to named import the font and then import it from "next/font/goolge"