// export const timer = () => {
//     async function fetchId(e, url = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty') {
//     let idArr = []
//     idArr = await axios.get(url)
//     return idArr.data
//   }
//     return async function(dispatch) {
//         const news = []
//         let idArr = await fetchId()
//         idArr.length -= 400
//         news.length = 0
//         if (idArr.length >= 100) {
//             console.log("ЗАПРОС СТАТЬЕЙ...");
//             for (const value of idArr) {
//                 if (value) {
//                     news.push(fetchId({}, `https://hacker-news.firebaseio.com/v0/item/${value}.json?print=pretty`))
//                 }
//             }
//         }
//         if (news.length >= 100) {
//             postsArr.length = 0
//             for (let i = 0; i < news.length; i++) {
//                 news[i]
//                     .then((res) => postsArr.push(res))
//                     .then(() => {
//                         if (postsArr.length === 100) {
//                             setPost([...postsArr])
//                             setIsLoading(false)
//                             setPageLoad(false)
//                         }
//                     })
//             }
//         }
//     }
// }
import axios from "axios"

export const fetchArticles = () => {
    const anyFetch = async(url = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty') => {
        fetch(url)
            .then(res => res.json())
            .then(arr => arr.map(
                id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
            ))
            .then(res => res)
    }

    const allData = anyFetch().then(res => console.log(res));

    function does(data) {
        console.log(data);
    }
}