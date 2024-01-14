import axios from 'axios'
import React from 'react'

const Detail = ({detail}) => {
    console.log(detail)
  return (
    <>
        <div>作品詳細ページ</div>
        <h1>{detail.title}</h1>
    </>
  )
}

// SSR
export async function getServerSideProps(context){
    const { media_type, media_id } = context.params

    try{
        const response = await axios.get(`https://api.themoviedb.org/3/${media_type}/${media_id}?api_key=${process.env.TMDB_API_KEY}&language=ja=JP`)
        const fetchData = response.data

        return{
            props:{detail: fetchData}
        }
    } catch {
        return { notFound: true }
    }
}
export default Detail